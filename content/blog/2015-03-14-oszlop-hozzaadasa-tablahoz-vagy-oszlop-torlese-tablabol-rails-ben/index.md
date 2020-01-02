---
author: info_plhg3qe0
comments: true
date: 2015-03-14 20:24:41+00:00
layout: post
link: https://nandito.info/2015/03/14/oszlop-hozzaadasa-tablahoz-vagy-oszlop-torlese-tablabol-rails-ben/
slug: oszlop-hozzaadasa-tablahoz-vagy-oszlop-torlese-tablabol-rails-ben
title: Oszlop hozzáadása táblához vagy oszlop törlése táblából Rails-ben
wordpress_id: 175
categories:
- Dev
tags:
- adatbázis
- rails
- Ruby on Rails
---

Gyakran járok úgy, hogy utólag hozzá kell adni egy Rails alkalmazás adatbázisának valamelyik táblájához még egy oszlopot - vagy módosítani, törölni kell egy már meglévőt. Lássuk, mik a lehetőségek.

A Rails alkalmazás mappájába navigálva parancssorba írom ezt:

```bash
rails generate migration add_coolfields_to_tablename fieldname:string otherfield:string
```

Az `add_` utáni szó (fenti példában `_coolfields_`)a migration-t nevezi el tapasztalatom szerint, túl sok jelentősége nincs . A `_to_` utána szó (fenti példában `_tablename_`) viszont fontos, ez a tábla neve, ahová injektálni szeretnénk.

Itt egy konkrétabb példa:

```bash
rails generate migration add_contact_details_to_customers work_email:string private_email:string
```

CamelCase-t is használhatunk:

```bash
rails generate migration AddContactDetailsToCustomers work_email:string private_email:string
```

Ennek hatására a projekt db/migrate mappájában születik egy új fájl `[dátumidő]_addfieldname_to_tablename.rb` néven. Azt, hogy eddig milyen nevű és típusú oszlopok vannak a táblában, azt a `db/schema.rb` fájlból szoktam kihalászni. Ott látszik, hogy a táblák neve többesszámban van, így emlékeztet arra, hogy a migráció létrehozásakor is azt használjak.

Az oszlop törlése hasonlóképp működik, ott ez a varázsige:

```bash
rails generate migration RemovePhoneFromCustomers phone:string
```

Hogy az elvégzett módosítás életbe lépjen, szükséges egy migrációt futtatni az adatbázison, erre jó a következő parancs:

```bash
rake db:migrate
```

Vagy ha mondjuk csak a TEST környezethez belőtt adatbázison szeretnénk először:

```bash
rake db:migrate RAILS_ENV=test
```

Bővebb infó: [http://edgeguides.rubyonrails.org/active_record_migrations.html](http://edgeguides.rubyonrails.org/active_record_migrations.html)
