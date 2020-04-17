---
author: info_plhg3qe0
comments: true
date: 2015-03-16 20:53:24+00:00
layout: post
link: https://nandito.info/2015/03/16/autentikacio-rails-ben-devise-gem-mel/
slug: autentikacio-rails-ben-devise-gem-mel
title: Autentikáció Rails-ben Devise gem-mel
wordpress_id: 184
categories:
- Dev
tags:
- autentikáció
- devise
- gem
- rails
- ruby
- Ruby on Rails
---

A Devise gem lehetőséget nyújt arra, hogy Rails alkalmazásunk bizonyos funkció egyszerűen és profin védve legyenek - csak regisztrációt és bejelentkezést követően legyenek elérhetők.

### Telepítés

Hozzáadjuk a `Gemfile`-hoz a Devise-t:

```
gem 'devise'
```

Futtatunk egy bundle telepítést parancssorban:

```bash
bundle install
```

Generálunk egy alap konfigurációt az alkalmazáshoz:

```bash 
rails generate devise:install
```

Következő lépésként létrehozzuk a User model-t:

```bash 
rails generate devise user
```

Ez a `config/routes.rb` fájlba is beírja, hogy van ilyen devise dolog.

### Védelem a controller-ben

Következő lépésként beállíthatjuk, hogy melyik controller-nek melyik method-jait akarjuk autentikációhoz kötni. Íme egy példa (`app/controllers/testcases_controller.rb`)

```ruby
before_filter :authenticate_user!, only: [:new, :edit, :create, :update, :destroy]
```

A fenti példában a szögletes zárójelben felsoroltak lesznek bejelentkezéshez kötve. Tehát a _CRUD-_ból (Create Read Update Destroy) az _R_ kivételével minden (tehát csak megtekinteni lehet anélkül, hogy bejelentkeznénk).

### Védelem a view-ban

A view-okban is beállíthatjuk, hogy egyes elemek csak akkor jelenjenek meg, ha bejelentkezett a kedves felhasználó. Például az _app/views/testcases/index.html.erb_ fájlban:

```ruby
<% if user_signed_in? %>
  <%= link_to 'Edit', edit_testcase_path(testcase)  %>
  <%= link_to 'Delete', testcase, method: :delete, data: { confirm: 'Are you sure?' } %>
<% end %>
```

Így a szerkesztés és törlés gombok bejelentkezés nélkül nem is lesznek láthatóak.

### További információ a Devise-ról


Getting started GitHub-on: [https://github.com/plataformatec/devise#getting-started](https://github.com/plataformatec/devise#getting-started)

Rubydoc dokumentáció: [http://www.rubydoc.info/github/plataformatec/devise/](http://www.rubydoc.info/github/plataformatec/devise/)
