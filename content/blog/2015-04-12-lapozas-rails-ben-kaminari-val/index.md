---
author: info_plhg3qe0
comments: true
date: 2015-04-12 10:17:34+00:00
layout: post
link: https://nandito.hu/2015/04/12/lapozas-rails-ben-kaminari-val/
slug: lapozas-rails-ben-kaminari-val
title: Lapozás Rails-ben Kaminari-val
wordpress_id: 200
categories:
- Dev
tags:
- gem
- pagination
- rails
- Ruby on Rails
---

Ha egy lista túl sok elemet tartalmaz, érdemes lapozással kisebb szeletekre vágni a megjelenített tartalmat. Ennek több előnye is van, például: kicsit kímélhetjük az adatbázist, rövidíthetjük az oldalbetöltés idejét, stb. A kaminari gem lehetővé teszi, hogy ezt roppant egyszerűen megoldjuk.

Adjuk hát hozzá a Rails projektünk Gemfile-jához a kaminarit, majd telepítsük is azt bundler-rel.

```
gem 'kaminari'
```

```bash
bundle install
```

Generáljuk a szükséges konfigurációs fájlokat:

```bash 
rails generate kaminari:config
```

Állítsuk be az alapértelmezett oldalméretet abban a model-ben, aminek a elemeit listázzuk. Ha például egy blog post-jait szeretnénk oldalanként megjeleníteni, akkor az `app/models/post.rb`-ba írjuk bele ezt:

```ruby
paginates_per 10
```

Ez elintézi nekünk, hogy oldalanként 10 post jelenjen meg. (Persze ha 15-öt szeretnénk oldalanként, akkor 10 helyett 15-öt kell írnunk).

Következő lépésként a controller-ben kell módosítanunk a listázást. Ez esetünkben az `app/controller/posts_controller.rb` fájl, melynek az index method-ját módosítjuk:

```ruby
# Ezt egészítsük ki
def index
  @posts = Post.all
end

# Erre
def index
  @posts = Post.order(:created_at).page(params[:page])
end
```

Végül a view-ban jelenítsük meg a lapozót, ahol szeretnénk. Ezt a példában az _app/views/posts/index.html.erb_ fájlban az alábbi módon tehetjük meg:

```ruby
<%= paginate @posts %>
```

Ezzel meg is volnánk, az oldalon megjelenik a lapozó!

Részletesebb leírás és sok példa elérhető Github-on: [amatsuda/kaminari](https://github.com/amatsuda/kaminari)
