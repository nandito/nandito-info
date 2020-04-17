---
author: info_plhg3qe0
comments: true
date: 2012-02-05 21:34:08+00:00
layout: post
link: https://nandito.info/2012/02/05/rubymine-telepites-es-beallitas/
slug: rubymine-telepites-es-beallitas
title: RubyMine telepítés és beállítás
wordpress_id: 78
categories:
- Dev
tags:
- Ruby on Rails
- RubyMine
- szoftver
---

Elmondom én mi a bajom nekem a Ruby on Rails-el (RoR-ral). A telepítése és beállítása. Jól lehet, én vagyok primitív, de nekem gyakorlatilag semmi nem sikerült elsőre eddig, amikor valamely tutorialt csináltam végig, vagy saját ötletet próbáltam számomra logikus módon megvalósítani.

Valahol mindig gubanc volt/van. Arra tippelek, hogy direkt csinálják ezt a fejlesztők, hogy ne lehessen Windows 7 alatt bárkinek csak úgy Ruby on Rails-el webes alkalmazásokat készíteni. Mikor egyetemen tanultam RoR-t, akkor Linuxon mutatták, hogy mi merre, így virtuális gépre feltéve egy Ubuntu Linuxot én is azon keresztül készítettem a házi feladatomat. Kényelmetlennek tartottam ezt, mivel - bár nem ismeretlen számomra a Linux, de Windowshoz vagyok szokva. Nem szeretek parancssorban zsonglőrködni, kattintgatni szeretek.

Nézelődés közben ma ráakadtam a [Jetbrains RubyMine](http://www.jetbrains.com/ruby/index.html) Ruby on Rails [IDE](http://hu.wikipedia.org/wiki/Integr%C3%A1lt_fejleszt%C5%91i_k%C3%B6rnyezet)-re (Integrated Development Environment). Az integrált fejlesztői környezet - mint a nevéből is kiderül - tartalmazza a fejlesztéshez szükséges eszközöket, mint például egy szövegszerkesztőt, fordítót, hibakeresőt, stb. Ez a RubyMine 30 napig ingyenes, gondoltam kipróbálom, nincs mit veszíteni. Elég terjedelmesre csinálta a cseh fejlesztőcsapat, mérete majdnem 100 mb. Telepítése nem bonyolult, setup.exe > pipa + next > next > stb. Első indításkor ajánlja, hogy adjuk meg a licenszkódot, vagy aktiváljuk a 30 napos próbalicenszet.

Akkor készítsünk egy próbaprojektet! (Azaz Create new projekt). A projektnév, elérési út megadása és a "Rails Application" kiválasztása után kéri, hogy adjuk meg a Ruby interpretert (egészségedre), Rails verziót, Rails template-et, JavaScript library-t és van még két jelölőnégyzet: egyik adatbázist, másik a test fájlok kihagyását ajánlja. Itt kicsit megfőttem, mivel az első mezőben (az interpreteresnél) valami [No SDK] (vagy hasonló) jelent meg, Rails verziót sem talált, és gondolom ezek miatt a többi opció nem is volt elérhető/módosítható, még az OK gomb sem. Rájöttem, hogy bár összeszedett programnak tűnik ez a RubyMine, de annyira mégsem hülyebiztos, hogy csak úgy sipsupp kész legyen. A [rubyonrails.org/download](http://rubyonrails.org/download) oldalról le kell tölteni a windows-os telepítőjét a Ruby-nak (én a legújabb, 1.9.3-at töltöttem). Telepítőfájl, rákattintva és a megszokott next > next > next > finish-el telepíthető. Visszalépve a RubyMine projekthez interpreternek adjuk meg a feltelepített Ruby-nkat. Ehhez tallózással keressük meg a <ahová a ruby-t tetted>\bin\ruby.exe-t. Nálam tehát így néz ki: C:\Ruby193\bin\ruby.exe. Erre kattintva már varázslatszerűen elindult mindenféle egyéb folyamat, települt a Rails (még meg is kérdezte, hogy melyik verziót szeretném - de drága). Lehetőségem akadt már adatbázist és JavaScript library-t is választani. JQuery és MySql teljesen jó lesz nekem.

A projekt mappájában végre megjelentek a RoR-nál szokásos struktúrában rendezett fájlok. A RubyMine kis üzenetek formájában kiabált, hogy hiányoznak bizonyos gem fájlok, kattintsak oda a telepítéshez. Így is tettem, de a konzolban és az újra megjelenő üzenetben láttam, hogy nem ért a végére. Ajánlotta, hogy telepítsem fel a Development Kit-et, aminek a letöltési útvonalát is megadta és azt is, hogy a [github](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit)-on találok leírást a telepítéshez. Egy önkicsomagoló 7z fájlt találtam, ez kicsomagolta magát és parancssorral ide navigálva itt kell kiadni a ruby dk.rb init parancsot. A parancssor azonban visszaszólt, hogy nem ismer olyan parancsot, hogy "ruby". Némi keresgélés után rátaláltam, hogy ahhoz, hogy ismerje a parancsot, meg kell adni annak az elérési útvonalát. Ennek a menete a következő: start menü - computer (jobb klikk) - properties - advenced system settings - environment variables gomb (advanced fülön) és itt a system variables között a Path nevűt kell megkeresni és szerkeszteni. A jelenleg ott lévő sor végére pontosvesszőt kell tenni, aztán odamásolni a ruby.exe lelőhelyét - ami nálam továbbra is C:\Ruby193\bin. Ezután zárjuk be a parancssort, ha korábban megnyitva hagytuk és indítsunk egy újat, hogy frissüljön fel a fantáziája. Ekkor már működött a ruby parancs és a github-os leírást követve sikerült a Development Kit telepítése. A tálcára tett RubyMine-ba visszalépve láttam, hogy megint aktivizálta magát - gondolom észlelte, hogy meglett a hiányzó láncszem és le tudott futni a bundle install, amivel a probléma volt.

Egyáltalán nem biztos, hogy másnál is fellépnek ugyanezek a hibák. Azt nem értem igazából, hogy miért kell ez a sok kínlódás, miért nem tud valami egyből normálisan működni. Innentől kezdve aztán mehet minden rendesen, ez az IDE tényleg jónak látszik - a beállításokban jól testreszabhatjuk és komfortossá tehetjük, sőt, még az általam újabban egyre kedveltebb Zen Coding-ot is ismeri.

Az a legtöbb, hogy a RubyMine fejlesztők a honlapon a Quick Guide (gyors útmutató) alatt még írják is, hogy mielőtt elkezdesz valamit is csinálni, telepíts ezt-azt. Persze nem olvastam el, pedig olvashattam volna, így nem is lenne jogos a felháborodásom - nem is háborodok fel.
