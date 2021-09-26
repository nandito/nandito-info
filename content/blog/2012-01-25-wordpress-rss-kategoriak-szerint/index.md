---
author: info_plhg3qe0
comments: true
date: 2012-01-25 22:24:29+00:00
layout: post
link: https://nandito.hu/2012/01/25/wordpress-rss-kategoriak-szerint/
slug: wordpress-rss-kategoriak-szerint
title: WordPress RSS kategóriák szerint
wordpress_id: 39
categories:
- Dev
tags:
- plugin
- rss
- wordpress
---

Előfordul - mint jelen esetben is -, hogy egy blog több témában publikál bejegyzéseket. Az ide tévedő olvasó esetleg érdekesnek találhat 1-1 témát, de ez az olvasó nem feltétlenül kíváncsi az összes téma összes bejegyzésére. Ha ez az olvasó gyakorta látogatja a honlapot és nem RSS olvasót használ, akkor ezzel nincs is gond, mivel oda kattint, ami számára érdekes.

Azonban, ha RSS Feed Reader-rel - azaz hírolvasóval - böngészi az újdonságokat, akkor zavaró lehet, hogy azok is megjelennek, amire amúgy egyáltalán nem is kíváncsi.

A WordPress alapból generál külön Feed-et minden kategóriának. Például, ha van egy "bútorok" kategóriánk, akkor annak az RSS csatornája a következő URL-en érhető el: http://domain.com/category/butorok. (Amennyiben közvetlen linkeket használunk az alapértelmezett ?p=20, stb. linkek helyett. Ezek  beállítása: Beállítások (Settings) - Közvetlen linkek (Permalinks))

Itt, ezen a blogon is elég eltérő témákban készítek bejegyzéseket, ezért jártam utána ezeknek. Létezik egy plugin: [Category Specific RSS feed Subscription](http://wordpress.org/extend/plugins/category-specific-rss-feed-menu/) néven. Ezt próbáltam először, de feltűnt, hogy az általa generált linkek a plugin kikapcsolt állapotában is működnek, így magam is elkészíthetek egy "Kategóriák szerinti RSS" menüt. Ehhez az admin felületen kell a Megjelenés (Appearance) - Menük (Menus) ponthoz navigálni magunkat, itt létrehozni egy új egyéni menüt és egyenként beírva az URL-eket már el is készítettük. Ezek után annyi csak a feladat, hogy a Widgetek menüben az "Egyéni menü" (Custom menu) névre hallgató widgetet a kívánt helyre mozgatjuk (például oldalsávra), kiválasztjuk a kis listában az előbb elkészített egyéni menüt és mentjük.

A korábban említett plugin annyival tudott többet ennél, hogy egy RSS ikont tett a menüpontok elé, de cserébe alul a készítő a saját weboldalára mutató linket tett. Ráadásul a plugin beállításainál megadott kategóriaelnevezésekre és sorrendre nem is figyel.

Később feltehetőleg kitalálok valamilyen színesítést, hogy valahol ebben a boxban jelenjen meg egy RSS ikon. Lehet a megoldás nem is az egyéni menü használata lesz, hanem egyszerű szöveg (HTML kód) hozzáadása az oldalsávhoz.

Maga az RSS egyébként az RDF Site Summary-nek, vagy a Really Simple Syndication-nek a rövidítése. Akit érdekel, hogy pontosan mi is az és hogyan működik, az a [Wikipédián](http://wordpress.org/extend/plugins/category-specific-rss-feed-menu/) talál róla leírást.
