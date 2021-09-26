---
author: info_plhg3qe0
comments: true
date: 2015-03-18 21:47:42+00:00
layout: post
link: https://nandito.hu/2015/03/18/keresobarat-url-ek-rails-ben/
slug: keresobarat-url-ek-rails-ben
title: Keresőbarát URL-ek Rails-ben
wordpress_id: 193
categories:
- Dev
tags:
- gem
- rails
- ruby
- Ruby on Rails
---

Van egy nagyon tuti gem, ami hozzásegít ahhoz, hogy az URL-ben számok helyett szöveg jelenjen meg. Például: _www.example.com/posts/2_ helyett _www.example.com/posts/super-post_. Ez azért is jó, mert a keresők jobban szeretik az ilyet - így akár előrébb is kerülhet az oldal a találati listákban. Másrészt, ha könyvjelzőkhöz adja egy felhasználó, vagy bemásolja valahová (például e-mailbe) a címet, akkor sokkal beszédesebb az URL-ben a bejegyzés címe, mintha csak egy ID-t tartalmazna.

A gem neve **friendly_id**. A dokumentációja [itt](http://norman.github.io/friendly_id/file.Guide.html) található, a github oldala pedig [itt](https://github.com/norman/friendly_id).

A parancssorba/terminálba beírva telepíthetjük a legfrissebb verziót. Rails 4-hez legalább 5.0.0 kell. Nekem ma 5.1.0-t telepített. Pipa.

```bash
gem install friendly_id
```

Telepítés után adjuk hozzá az aktuális projektünk _Gemfile_-jához a friendly_id-t:

```
gem 'friendly_id'
```

Majd futtassunk parancssorban egy bundle-t, hogy települjön szépen:

``` bash
bundle install
```

Következő lépésként a már meglévő táblánkhoz - amelyikből jelenleg ID-t mutatunk URL-ben - adjunk hozzá egy új oszlopot. Ezt - ahogy [korábban bővebben leírtam](/2015-03-14-oszlop-hozzaadasa-tablahoz-vagy-oszlop-torlese-tablabol-rails-ben/) - az alábbi módon tehetjük meg:

```bash
rails generate migration add_slug_to_posts slug:string
```

Hajtsuk végre a migrációt, parancssorba írjuk:

```bash
rake db:migrate
```

Ezután a model-ben kell megadnunk, hogy melyik oszlop tartalma jelenjen meg ID helyett az URL-ben. Jelenlegi példában a bejegyzés címét (title) adjuk meg (_app/models/post.rb_):

```ruby 
  extend FriendlyId
  friendly_id :title, use: :slugged
```

Így már az újonnan létrehozott bejegyzéseknek az URL-jében a cím jelenik meg. Ahhoz, hogy ezt meg is tudjuk nyitni, szükséges némiképp módosítani is az `app/controllers/posts_controller.rb`-t. A `private` method-ok között módosítanunk kell, hogy ne közvetlenül használja a title-t ID-ként, mert úgy sosem találja meg.

```ruby
  # ezt egészítsük ki:
  @post = Post.find(params[:id])
  
  # erre:
  @post = Post.friendly.find(params[:id])
```

Figyelni érdemes arra is, hogy akár több bejegyzés is lehet azonos címmel. Ennek kezelése érdekében kapcsoljuk be a history-t a slug-okra. Ehhez annyi kell, hogy generálunk egy új migrációt és futtatjuk:

```bash
rails generate friendly_id
rake db:migrate
```

**Bónusz**: amennyiben vannak már korábbi bejegyzéseink, melyeknek az URL-je még nem szép, akkor _rails console_-ban átalakíthatjuk őket. Lépjünk be tehát a konzolba:

```bash 
rails console
```

És frissítsük a bejegyzéseket:

```ruby 
  irb(main):001:0> Post.find_each(&:save)
```