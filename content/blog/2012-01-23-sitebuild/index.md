---
author: info_plhg3qe0
comments: true
date: 2012-01-23 21:15:28+00:00
layout: post
link: https://nandito.info/2012/01/23/sitebuild/
slug: sitebuild
title: SiteBuild++
wordpress_id: 31
categories:
- Dev
tags:
- általános leírás
- css
- html
- javascript
- jquery
---

Többnyire sitebuilddel foglalkozom, de bele-bele fogok az ezt megelőző - grafikai, tervezési - és az ezt követő programozási munkálatokba is.

Egy weboldal elkészítése alapesetben a következő lépésekből áll:

1. Megrajzolják a weboldalt egy grafikus programmal
1. A rajzból megcsinálják a HTML, CSS és JavaScript fájlokat tartalmazó vázat
1. A vázat működőképessé és aktívvá teszik valamilyen rendszerrel (pl. PHP-val, ASP.net-tel, Ruby-val, stb.)

Jelen felsorolásban az egyszerűség kedvéért kihagytam a weboldal megrajzolását megelőző folyamatokat, mint például megrendelői igényfelmérés, tartalom szerinti átgondolás, stb. Ezekre külön oda kell figyelni, hogy ha megrendelésre dolgozik valaki, akkor pontosan azt kell kapnia a vevőnek, amit szeretne - esetleg annál többet, de kevesebbet nem. Ez a cégszerű sikeres működés egyik alapszabálya.

Maga a sitebuilding (nyersfordításban: oldalépítés) az a folyamat, ahol egy weboldalt előkészítenek ahhoz, hogy egy programozó működőképessé tegye. Hasonlóképp: autógyártásnál egy tervező megrajzol egy autót, egy csapat megalkotja a karosszériát, egy másik csapat pedig legyártja a motort és beleteszi a vázba. A sitebuilder az, aki megalkotja a weboldal karosszériáját.

### Munkaeszközök

A sitebuild abból a szempontból szerencsés, hogy nem igényel komoly befektetést, gyakorlatilag egy notepaddel is el lehet készíteni. Vannak az úgynevezett WYSIWYG (What you see is what you get - kapod, amit látsz) programok, amikkel a készülő weboldal megjelenési alakját folyamatosan látjuk. Ilyen (funkcióval is rendelkezik) a [Dreamweaver](http://www.adobe.com/products/dreamweaver.html), a [Coda](http://panic.com/coda/), ingyenesek közül a régen NVU, most [Kompozer](http://kompozer.net/), stb. Ezek kezelése (is) tanulást igényel. Én nemes egyszerűséggel [**NotePad++**](http://notepad-plus-plus.org/)-t használok, itt csak a kódot látom és kell nyomnom egy CTRL+S, ALT+Tab, CTRL+R kombinációt ahhoz, hogy lássam a munkám eredményét, de nekem ez jön be.

Legtöbb esetben a grafikai állomány megnyitásához jól jön egy [**Photoshop**](http://www.adobe.com/hu/products/photoshop.html), ami megoldás, de ingyenes megoldásnak ott a [GIMP](http://www.gimp.hu/).

Kell még **néhány böngésző** is, a legnépszerűbbeket mindenképpen érdemes feltelepíteni: Firefox, Chrome, Safari, Internet Explorer, Opera. Az sem árt - ha a rendszer engedi -, ha a népszerű böngészők több, még a felhasználók körében fellelhető verziót is feltelepítünk, hogy lássuk, hogyan jelenik meg azokban a weboldal. Az Internet Explorer 9 esetében például ez már beépített eszköz, itt kapcsolgathatjuk a kompatibilitást.

Ami még nagyon hasznos - főleg a tesztelésnél- , az  a böngészők fejlesztői eszköztára. Legtöbb böngészőben megtalálható. Számomra a leggyakrabban használt a [**FireBug**](http://getfirebug.com/), ami a Firefox kiegészítője.

Előfordul, hogy egy kész, már php alapú rendszer (pl. Wordpress) témáját kell módosítani. Ez esetben érdemes feltelepíteni az adott tartalomkezelőt a localhostra. Ehhez persze kell néhány dolog (Apache, SQL) - a [XAMPP](http://www.apachefriends.org/en/xampp.html), vagy [WAMP](http://www.wampserver.com/en/) tartalmaz minden szükséges eszközt, használata ilyenkor megkönnyíti a munkát, mivel nem kell mindig FTP-vel feltöltögetni a frissített fájlokat.

### Állományok

**HTML**: HyperText Markup Language. Ezt úgy tanultam még anno, hogy ez nem programnyelv, hanem csak jelölőnyelv (mint a nevében is benne van). Itt csak megjelenést írunk le, hogy mi mit követ és mit tartalmaz. Adhatunk meg formázási tulajdonságokat is, de ezt elegánsabb külön állományban megadni. Legújabb verziója az 5.

**CSS**: Cascading Style Sheets. Kaszkádolt stíluslapok. Ezek írhatóak a HTML-be közvetlenül, vagy külön .css kiterjesztésű fájlba - ez utóbbi esetben szükséges hivatkozni a helyére a HTML kódon belül. A stíluslapokban kerülnek definiálásra az oldalon helyezkedő elemek tulajdonságai, mint például: szín, méret, elhelyezkedés, stb. Legújabb verziója a 3.

**JS**: JavaScript. Ezekkel az oldal aktívvá tehető, dinamikusan tölthető be a tartalom, optimalizálható az oldal betöltése, különböző megjelenítési mód eszközölhető a különböző böngészőkhöz, stb. Ez már programozás. Objektumorientált, hasonlít a C-re.

**jQuery**: Az egyik legnépszerűbb JavaScript library (könyvtár). Ez azt jelenti, hogy letölthető a jQuery honlapjáról a legújabb, aktuális jquery.js, aminek használatával könnyen és gyorsan lehet látványos elemekkel (pl.: effektekkel, slideshow-val) gazdagítani az oldalt. A jquery.js gyakorlatilag egy JavaScript fájl, amiben egy fejlesztőcsoport előre megírt sok "funkciót", amit mi egyszerűsítve meghívhatunk a mi weboldalunkra. Ezáltal egyedi nyelvezete van, de elég logikus, így gyorsan és könnyen tanulható.

Ezeket használom én. Nem említettem, de van még rengeteg egyéb is. Ha majd azokkal is foglalkozok, azokról is írok.
