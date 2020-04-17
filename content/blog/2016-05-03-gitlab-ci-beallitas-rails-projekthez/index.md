---
author: info_plhg3qe0
comments: true
date: 2016-05-03 21:07:39+00:00
layout: post
link: https://nandito.info/2016/05/03/gitlab-ci-beallitas-rails-projekthez/
slug: gitlab-ci-beallitas-rails-projekthez
title: Gitlab CI beállítás Rails projekthez
wordpress_id: 237
categories:
- Dev
tags:
- adatbázis
- CI
- docker
- env
- Gemfile
- GitLab
- PostgreSQL
- rails
- ruby
- Ruby on Rails
---

[GitHub](https://github.com/) helyett a hobbiprojektekhez inkább a [GitLab](https://gitlab.com/)-ot használom. Többek között azért, mert ingyen lehet benne private repository-kat létrehozni (Github-on azt hiszem, 1 ilyen lehet ingyen). Másrészt számomra kényelmesebb a használata, a felülete jobban tetszik. Egyik újítás, hogy 2016. április közepe óta a GitLab összefogott a DigitalOcean-nal és lehetőséget adnak arra, hogy ingyenesen futtassunk job-okat a GitLab CI keretein belül.

A folyamat úgy néz ki, hogy GitLab-ra push-olt kód egy Runner-en lefut és a futás eredménye megjelenik a GitLab-on. A Runner-ek azok a környezet, melyeken a buildelés / futtatás történik. Ilyne Runner-t lehet futtatni egy helyi Docker konténerben is, de a DigitalOcean a nép rendelkezésére bocsát néhány úgynevezett "Shared Runner"-t, melyet lehet használni bátran.

### Mire jó ez?

* Automata tesztek futtatására
* Deploy-álásra például sikeres futás esetén egy adott production környezetre
* Kódminőség ellenőrzésre

A fentieken kívül és túl használható egyéb olyan építésekhez, melyeket úgy általában a CI rendszereken szoktak végezni. A példa projektben az automata tesztek futtatása és kódminőség ellenőrzése lesz történik a GitLab-on keresztül DigitalOcean Runner-ben.

### Projekt részletek

* Ruby 2.2.3-p173
* Rails 4.2.6
* JavaScript Runtime: Node.js (V8)
* Database: PostgreSQL
* Kódminőség ellenőrzés: Rubocop

### CI konfigurálása

Először a projekt gyökérkönyvtárában létre kell hozni egy gitlab-ci konfigurációs fájlt: `.gitlab-ci.yml`

Ebben a fájlban definiáljuk, hogy miket szeretnénk futtatni milyen job-ok keretein belül.

```yml
image: ruby:2.2

services:
  - postgres:9.3

variables:
  # Configure postgres service (https://hub.docker.com/_/postgres/)
  POSTGRES_DB: custom_db
  POSTGRES_USER: custom_user
  POSTGRES_PASSWORD: custom_pass
  
before_script:
  - apt-get update -qq && apt-get install -y -qq nodejs
  - bundle install

test:
  script:
  - bundle exec rake db:drop RAILS_ENV=gitlabci
  - bundle exec rake db:create RAILS_ENV=gitlabci
  - bundle exec rake db:migrate RAILS_ENV=gitlabci
  - bundle exec rake test RAILS_ENV=gitlabci

rubocop:
  script:
  - bundle exec rubocop
```

Az **image** résznél definiáljuk, hogy milyen környezetben szeretnénk futtatni a job-okat. Ez job szinten is megadható, jelenesetben globálisan értendő. A **services**-en belül olyan szolgáltatást listázhatunk, melyet a futtatások során használni szeretnénk. Jelenleg ez egy _postgres_-t tartalmaz: ilyenkor egy postgres konténer is elindul, melynek a tesztadatbázisa a **variables**-ben megadott változókkal érhetők el. A **before_script** az összes job előtt lefut. A **test** és **rubocop** egy-egy job-ot jelöl, ez a nevük. Ezeken belül a **script** alatt kell definiálni az egyes lépéseket, melyek a job keretein belül futtatandók - ezek a parancssorban is megadható utasítások:

```bash
# JavaScript runtime telepítése
$ apt-get update -qq && apt-get install -y -qq nodejs
# projekt telepítése, szükséges dependenciák letöltése
$ bundle install
# korábbi custom_db tábla tartalmának eldobása
$ bundle exec rake db:drop RAILS_ENV=gitlabci
# tábla létrehozása újból és a szükséges migrációk futtatása
$ bundle exec rake db:create RAILS_ENV=gitlabci_ és _bundle exec rake db:migrate RAILS_ENV=gitlabci
# tesztek futtatása
$ bundle exec rake test RAILS_ENV=gitlabci
# kódminőség-ellenőrzés futtatása
$ bundle exec rubocop
```

### CI-specifikus környezet definiálása

A fenti részben feltűnhet, hogy az egyes utasítások mögött szerepel a `RAILS_ENV=gitlabci` argumentum. Erre az adatbázis-kapcsolat és a környezettől függő _Gemfile_ group miatt van szükség, mivel ugyanúgy szeretném megőrizni a fejlesztői környezethez és a helyi tesztfuttatáshoz használt, helyi Docker konténerben futó PostgreSQL beállításokat.

Új környezet létrehozásának lépései:

1. `config/environments` mappában `test.rb` duplikálása `gitlabci.rb` néven
2. `config/database.yml` fájlhoz `gitlabci` beállítások hozzáadása
3. `Gemfile`-ban csoportok frissítése

A `.gitlab-ci.yml` fájlban megadottaknak megfelelően a `database.yml`-ben a `gitlabci` beállítások:

```yml
gitlabci:
  adapter: postgresql
  encoding: unicode
  pool: 5
  host: postgres
  username: custom_user
  password: custom_pass
  database: custom_db
```

Esetemben a `Gemfile`-ben az alábbiak módosultak:

```gemfile
group :test, :gitlabci do
  # Mock API with webmock
  gem 'webmock'
  # Test framework
  gem 'rspec'
end

group :development, :gitlabci do
  # Static code analyzer
  gem 'rubocop', require: false
end
```

A **webmock**-ot és **rspec**-et csak a **test** és **gitlabci** környezeteken használom, mivel ezekben történik a tesztek futtatása. Ezzel szemben a **rubocop**-ot csak **development** és **gitlabci** környezeteken futtatom, így a **test** környezeten a `bundle install` idejét nem növelem feleslegesen ennek függőségnek a telepítésével.

**Megjegyzés:** másik elterjedt módszer, hogy egy másik, CI adatbázisadatokat leíró `database.yml` fájlt is létrehoznak, melyet `copy` paranccsal a CI környezetben aktiválnak oly módon, hogy felülírják vele az eredeti `database.yml`-t.

További információk, felhasznált irodalom:

* [https://gitlab.com/help/ci/quick_start/README.md](https://gitlab.com/help/ci/quick_start/README.md)
* [http://doc.gitlab.com/ce/ci/examples/test-and-deploy-ruby-application-to-heroku.html](http://doc.gitlab.com/ce/ci/examples/test-and-deploy-ruby-application-to-heroku.html)


