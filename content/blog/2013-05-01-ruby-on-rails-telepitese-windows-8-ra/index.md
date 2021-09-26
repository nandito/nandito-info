---
author: info_plhg3qe0
comments: true
date: 2013-05-01 10:24:07+00:00
layout: post
link: https://nandito.hu/2013/05/01/ruby-on-rails-telepitese-windows-8-ra/
slug: ruby-on-rails-telepitese-windows-8-ra
title: Ruby on Rails telepítése Windows 8-ra
wordpress_id: 164
categories:
- Dev
tags:
- Ruby on Rails
---

Az Interneten hozzáférhető tutorial-ok alapján úgy tűnik, hogy Ruby on Rails alapú honlapokat kevesen fejlesztenek Windows rendszereken. Bár én is használok Ubuntu-t is, jobban szeretem a Windows-t. Elhatároztam, hogy feltelepítem most legfrissebb Ruby-t, Gem-t, Rails-t és hozzá MySQL-t a 64 bites Windows 8 rendszeremre. Mivel természetesen nem úsztam meg hibaüzenet nélkül, szükségesnek éreztem, hogy dokumentáljam az eseményt, hogy legközelebb ne kelljen annyit keresgélni a probléma oka és megoldása után.

### 1. lépés: Ruby telepítése

Windows-ra ez egész könnyen megy, a [http://rubyinstaller.org/](http://rubyinstaller.org/) website [letöltés](http://rubyinstaller.org/downloads/) oldaláról kiválasztottam a Ruby 2.0.0-p0 (x64)-t letöltöttem, majd gyakorlatilag "Next, Next, Next" módszerrel telepítettem, annyi a különbség, hogy a telepítés helyének kiválasztásánál kipipáltam, hogy rendelje a hozzá a .rb és .rbw fájlokat és hogy adja hozzá a Ruby-t a "PATH"-hoz.

Telepítés után parancssorba beírva a ruby -v parancsot látható, hogy sikeres volt-e a telepítés, ugyanis ha igen, a telepített Ruby verziószámát kapjuk eredményül.

### 2. lépés: RubyGems telepítése

Ez a csomagkezelő, amit a Ruby használ. A Ruby-val együtt ez is fel lett telepítve, így ezt nem kell külön telepíteni. Egy frissítést érdemes ellenőrizni parancssorban: gem update --system

Ha mégsem lenne telepítve valamiért, akkor a rubygems.org honlapról letölthető.

### 3. lépés: Rails telepítése

Mivel ez is egy gem, ezért telepítése egyszerűen, parancssorból történik: gem install rails

Miután telepítettük, jócskán megnő a telepített gem-ek listája: gem list paranccsal ellenőrizhetjük, hogy ott van-e a Rails.

### 4. lépés: MySQL telepítése

Ezzel volt a legtöbb gond, de a végén jó lett.

Először telepíteni kellett a MySQL Community Server-t, amit érdemes az .msi kiterjesztésű telepítővel végezni, ami elérhető: [http://dev.mysql.com/downloads/installer/](http://dev.mysql.com/downloads/installer/)

A telepítés során elég kiválasztani, hogy csak a Server-t telepítse, a többire nincs szükség most.

Ezt követően a Ruby-hoz kell kapcsolni. Ehhez le kell tölteni egy C Connector-t a [MySQL honlapjáról](http://dev.mysql.com/downloads/connector/c/), nekem a mysql-connector-c-noinstall-6.0.2-winx64.zip működött végül. Ezt ki kell csomagolni, majd parancssorba ezeket a sorokat írni:

```bash
gem install mysql2 --platform=ruby -- --with-mysql-include=D:\mysql-connector-c-noinstall-6.0.2-winx64\include --with-mysql-lib=D:\mysql-connector-c-noinstall-6.0.2-winx64\lib --with-mysql-dir=D:\mysql-connector-c-noinstall-6.0.2-winx64
```

A Connectort én a D: meghajtómra csomagoltam ki, így az elérési út nálam "D:\mysql-connector-c-noinstall-6.0.2-winx64".

Ha `ERROR: Failed to build gem native extension.`-t kapunk érdemes kipróbálni a 32 bites C Connector-t, van akinek azzal működik.

Így más sikeresen összeállt a kép és a rendszer, lehet Windows 8-on is készíteni RoR rendszereket.
