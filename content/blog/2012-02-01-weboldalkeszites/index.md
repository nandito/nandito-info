---
author: info_plhg3qe0
comments: true
date: 2012-02-01 16:49:09+00:00
layout: post
link: https://nandito.info/2012/02/01/weboldalkeszites/
slug: weboldalkeszites
title: Weboldalkészítés
wordpress_id: 44
categories:
- Dev
tags:
- cms
- css
- html
- weboldalkészítés
- wordpress
---

Ha beszélgetek valakivel és szóba kerül, hogy foglalkozom weboldalak készítésével, akkor gyakran ráugranak a témára, hogy csináljak nekik, vagy mondjam el, hogyan kell csinálni. Már ott járnak, hogy letöltöttek egy HTML-szerkesztőt, vagy MS FrontPage-et, csak nem tudják, hogy mi mivel van, illetve hogy mit kell beírni a böngészőbe, hogy az jelenjen meg, amit ők csináltak.

A weboldal készítés nem olyan nagy ördöngösség, de lehet úgy is csinálni, hogy az legyen. Minél több időt szán rá az ember, annál jobb lesz/lehet - ez persze nem minden esetben igaz, mert előfordulhat, hogy túlzásba esik az illető akár design, akár kódolás terén. Abban azonban egyet érthetünk, hogy egy weboldalnak ma már nem elég az, hogy csak HTML és CSS legyen, kell valami, ami aktívvá teszi, működésbe hozza és lehetőséget biztosít a dinamikus bővítésre. Szét lehet tehát választani a weboldalkészítést kinézetre és az azt futtató programra (motorra).

## Nézzük, mik a lehetőségek

### Készítesz weboldalt magadtól, nulláról

Legtöbben ezt gondolják a legkézenfekvőbbnek. Előnye, hogy a kész weboldal valószínűleg teljesen egyedi lesz és érteni biztosan fogja a készítő, hogy mi hogyan működik. A hátránya viszont, hogy rajta kívül más nem biztos, hogy érti és ami nagyobb "baj", hogy az igényes munka rengeteg időbe telik és szaktudást igényel. Egy hatékony módja ennek a folyamatnak, ha először megrajzolja az ember a weboldalt, majd az alapján megírja a HTML és CSS fájlokat, leellenőrzi a leghasználtabb böngészőkben, hogy jól jelenik-e meg, majd php, asp.net, ruby on rails, vagy akármi mással dinamikussá és működőképessé teszi. Ezeket a lépéseket lehet keverni - például egyből HTML-t ír a készítő és menet közben dönti el, hogy mi hol legyen -, de akkor előfordulhat, hogy nem látja a végét és elfelejti, mit is akar. Ráun a készítésre és bajlódásra, folyton újrakezdi egy új ötlet alapján (tapasztalat) - persze nem minden esetben.

### Letöltesz sablont és azt módosítgatod, majd készítesz hozzá egy motort

Ezt a módszert azok használják, akik nem értenek eléggé a HTML/CSS-hez, vagy nincs hozzá türelmük. Az Interneten ingyenes HTML/CSS weboldal-sablonok tömkelege fellelhető (például: Google: free html template). A letöltött sablon alá egy motort ír a készítő - ehhez szintén kell a programozási ismeret. A sablon készítői gyakran feltüntetik nevüket és esetleg elérhetőségüket a sablon alján (vagy akárhol máshol). Ezt természetesen ki lehet törölni, de határozottan nem etikus. Olyan is előfordul, hogy a készítő csak a forráskódban hagyja ott lábnyomát kommentként. Ami viszont még jó ezekben a sablonokban, hogy lehet tanulni belőlük. Ha az ember érdeklődik a HTML és CSS iránt, akkor ez egy jó tanulási lehetőség lehet: például letölt egy sablont átnézi a kódot, majd megpróbálja magától leírni és folyamatosan figyeli, hogy mi történik az egyes kódsorok beírása után. Ha elakad, ott az eredeti sablon, abból lehet lesni, vagy ellenőrizni.

### Használsz egy kész motort és töltesz le hozzá sablont

Ezt szoktam leginkább ajánlani annak, aki nem foglalkozik - és nem is akar foglalkozni - HTML, CSS és programnyelvek tanulásával. Előnye, hogy gyorsan, látványos weboldalt lehet létrehozni. Ezzel viszont az jár, hogy jó esély van rá, hogy néhány másik weboldal pont úgy fog kinézni, mint a miénk - mivel azt a sablont, amit mi letöltöttünk, más is ugyanúgy letöltheti és használhatja. Erre létezik megoldás: meg lehet venni a kinézet használatának kizárólagos jogát, vagy eleve rendelésre készítettünk kinézetet - vagy akár motort is. Visszatérve az ingyenes megoldásokhoz: ott vannak a CMS-ek (Content Management System). Ezeknek előnyük, hogy szakemberek készítik őket, az esetleges hibákat folyamatosan javítják, újításokat eszközölnek és biztosítják az új verziót a használóknak. Emellett moduláris felépítésük révén tetszőlegesen bővíthetők úgynevezett pluginokkal (bővítményekkel), melyeket legtöbb esetben szintén elérhetünk a CMS honlapján. Ilyen CMS például a [WordPress](http://wordpress.org) (kedvencem, én is ezt használom), a [Drupal](http://drupal.org/), a [Joomla](http://www.joomla.org/), stb. Ezek szinte mindenre jók - webáruház, blog, fórum, bemutatkozó oldal, közösségi oldal, stb. üzemeltetésére. Vannak specifikus CMS-ek, melyek adott funkció ellátására szolgálnak, például dedikált fórummotor a [PHPBB](http://www.phpbb.com/), [Invision Power Board](http://www.invisionpower.com/products/board/) (ez utóbbi fizetős).

### Használsz egy kész motort és készítesz hozzá kinézetet, vagy módosítod az eredetit

Ez a nekem való megoldás :). Labilis php és Ruby on Rails tudással a fejemben leginkább a WordPress CMS-t használom. Elég sok oktató leírás (tutorial) található arról, hogy mit hogyan lehet módosítani az egyéni kinézet kialakításához. Ez is igen időigényes és kell hozzá némi programozási ismeret is. (Most a Radontastic sablont használom ezen a blogon.) Motornak ugyanazokat a CMS-eket ajánlom, mint az előző bekezdésben. Olyanra is van lehetőség, hogy egy tetsző témát letöltesz és ami nem tetszik, kiveszed belőle, vagy átteszed máshová, esetleg új dolgokat adsz hozzá. Ilyenkor is figyelni kell azonban, hogy az eredeti szerző nevét ne tüntessük el teljesen.

## Na de mit kell beírni a böngészőbe, hogy megjelenjen az oldalam?

### Ingyenes lehetőség

Regisztrálsz egy ingyenes tárhelyet és domaint - például az [atw.hu](http://atw.hu/)-nál, vagy [uw.hu](http://uw.hu/index.jsp)-nál. Ilyenkor kapsz némi tárhelyet, egy adatbázist és a hozzáféréshez szükséges címeket, felhasználóneveket, jelszavakat. Például: van egy Figaro Szalon nevű fodrászatod, amihez egy bemutató honlapot készítesz, akkor beregisztrálhatod ingyen a figaroszalon.atw.hu címet. Ide FTP-n keresztül kerül fel a honlap. Azt még tudni érdemes az ingyenes tárhelyekkel kapcsolatban, hogy leggyakrabban a tulajdonosok abból tartják fenn a szolgáltatást, hogy a honlapod fölött a böngészőben reklámcsíkot jelenítenek meg.

### Fizetős lehetőség

Itt jönnek be a képbe az úgynevezett hoszting cégek. Szükség van egy domain névre és tárhelyre. A domain név ez esetben már tetszőleges - az előző példánál maradva: figaroszalon.hu, .com, .eu, akár több is ugyanahhoz a weboldalhoz. A domain név regisztrálása - legtöbb esetben - nem pár perc és nem ingyenes. A .hu végződés 3000 Ft/2 év, a .com 2000 Ft/év körüli áron érhető el. A tárhelyről és a kapott szolgáltatásokról szerződést szoktak írni a hoszting céggel. Tárhelytől függően, havi 800-1000 Ft-tól (egészen havi sok ezerig) kaphatunk szolgáltatáscsomagot. A csomag árába szintén beleszól az, hogy milyen alkalmazások futtatását engedélyezi (php, perl, stb.), hányféle adatbázist biztosít, mennyi aldomaint, illetve mennyi saját postafiókot engedélyez(ami például: info@figaroszalon.hu - tehát tetszőlegesen választható, egyedi).

Az ingyenes lehetőség arra tökéletes, hogy valaki megértse, hogy mi hogyan működik. Azonban cégeknek, vagy komolyabb szándék esetében érdemes rááldozni a fizetős szolgáltatás igénybevételére. Nem mutat jól egy céges honlap tetején a reklám és az is rontja az imázst, hogy a honlap címében is van reklám (mert hát a .atw.hu-ban az "atw" bizony reklám). Ráadásul nem szólhatunk bele, hogy milyen hirdetés jelenjen meg oldalunkon, így előfordulhat, hogy pont a konkurencia hirdetése jelenik meg.
