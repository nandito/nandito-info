---
author: info_plhg3qe0
comments: true
date: 2018-01-09 05:51:07+00:00
layout: post
link: https://nandito.hu/2018/01/09/graphql-backend-szolgaltatok/
slug: graphql-backend-szolgaltatok
title: GraphQL backend szolgáltatók
wordpress_id: 278
categories:
- Dev
tags:
- baas
- graphcool
- graphql
- scaphold
---

A [GraphQL hivatalos oldalán](http://graphql.org/) van egy [lista](http://graphql.org/code/#services) a GrahpQL technológián alapuló szolgáltatókról. Ezek nagyrésze backend as a service (BaaS) megoldás. Első ránézésre remek ötlet ilyet használni.

### BaaS koncepció

A [backend as a service](https://en.wikipedia.org/wiki/Mobile_backend_as_a_service) lényege, hogy a telefonon vagy böngészőben futó alkalmazáshoz tartozó backend-et - vagy annak bizonyos részeit - egy felhőalapú szolgáltató biztosítja. Ilyen lehet például a felhasználó-kezelés, integráció a közösségi médiával vagy bármi általunk definiált funkció. Néhány szolgáltató lehetőséget biztosít arra, hogy webes felületükön akár pár perc kattingatás után egy komplex [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) alkalmazás backend-et kapjunk.

A backend-et az alkalmazásunkból egy API-n keresztül érjük el. Egy CRUD alkamazás esetén a szokásos kliens-szerver kommunikáció révén tudunk adatot létrehozni, lekérni, módosítani vagy törölni.

A BaaS szolgáltatók pénzt kérnek a szolgáltatásukért. Ez lehet havi vagy használat, forgalom alapú díj is.

A BaaS piac nagyra nőtt már, szinte mindenre létezik ilyen megoldás. Vannak tradícionális [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API-t biztosítók és GraphQL API-t biztosítók is, ebben a cikkben az utóbbiakkal foglalkozok.

### A legtöbb fejlesztése leáll vagy átalakul

A GraphQL oldalán ma felsorolt BaaS szolgáltatók:

* GraphCMS
* Graphcool
* Reindex
* Scaphold
* Tipe (ez igazából software as a service-nek van megjelölve)

Ezek közül talán a legismertebb a [Graphcool](https://www.graph.cool/). Roppant ambíciózus csapatuk Berlinben van, hamar nagy népszerűségre tettek szert, nem is véletlenül. Szépen megrajzolt weboldalon biztosítanak egy konzolt, melyben kódolási ismeretek nélkül létre lehet hozni egy GraphQL backended.

2017 októberében [bejelentették](https://blog.graph.cool/introducing-the-graphcool-framework-d9edab2a7816), hogy üzleti modelljük átalakul és a továbbiakban backend framework-ként szeretnének tovább működni. Bár megtartják a BaaS szolgáltatást is - a korábbi, 3rd party szolgáltatás integrációkkal és webes szerkesztővel működő verzió érezhetően háttérbe szorult.

A [Scaphold](https://scaphold.io/) nagyon hasonlít a Graphcool-hoz. Webes felületükön valamivel több 3rd party szolgátató integrációjára adnak lehetőséget, illetve lehet egyéni interface-eket létrehozni a sémához. Viszont nem nehéz bug-ot találni ezen a webes felületen, többször valamiféle szerverhiba miatt sikertelen a mentés.

A Scaphold szellemvároshoz hasonlító Slack csoportjában kitűzött üzenet, hogy a szolgáltató nagy átalakításon megy keresztül, addig is "karbantartás módban" üzemelnek, kérik az ügyfelek szíves türelmét és megértését. Az alapítók, tulajdonosok - bár tagjai a Slack csoportnak -, nem válaszolnak a kérdésekre és nem is próbálják eloszlatni a pletykákat, miszerint a Scaphold meghal(t). A csoportban egyébként vannak pletykák felvásárlásról és perről is. Mindenesetre egy újonnan fejlesztett szoftverhez a Scaphold-ot választani BaaS-nek kockázatos vállalkozásnak bizonyul.

A [Reindex BaaS](https://www.reindex.io/baas/)-re mutató link 404 Not Found oldalra visz. A blogjukra térve van egy [bejegyzés](https://www.reindex.io/blog/discontinuing-backend-as-a-service/), mely szerint a BaaS-t - főleg az erős konkurencia miatt - leállítják, a kódbázisukat nyílt forráskódúvá alakítják, az eddigi támogatást köszönik. Sajnos a Reindex BaaS-et még ereje teljében nem sikerült kipróbálnom.

A [GraphCMS](https://graphcms.com/)-t sem próbáltam még ki. Akik kipróbálták, dicsérik: jó a támogatottsága, aktív fejlesztői csapat áll mögötte és továbbra is BaaS-ként szeretnének működni. Ha majd kipróbálom, lehet, hogy megírom a tapasztalatimat, addig is sok sikert nekik!

A [Tipe](https://tipe.io/) ma még "request access" fázisban van, vagyis nem regisztrálhat akárki, fel kell iratkozni meghívóra. Bevett szokás egy ilyen feliratkozós rendszert már akkor közzétenni, amikor a szolgáltatás - amire fel lehet iratkozni - még csak fejben vagy papíron létezik. Így annak függvényében, hogy hányan iratkoznak fel - vagyis mennyien érdeklődnek - vágnak bele a fejlesztésbe vagy néznek új üzleti lehetőségek után. Persze egyáltalán nem biztos, hogy a Tipe is ezt játssza, mindenesetre eddig én nem kaptam meghívót, pedig kb 2 hónapja feliratkoztam rá.

A fent leírtak alapján felmerült bennem a kérdés, hogy miért tűnnek el vagy alakulnak át ezek a szolgáltatók?

### Könnyű elérni ezek határát

Az általam kipróbált szolgáltatók többnyire ugyanazokat a lehetőségeket biztosítják a fejlesztők számára. A szoftverek egy bizonyos pontig nagyon hasonlítanak. Adatot lehet bennük létrehozni, megtekinteni, módosítani és törölni. Esetleg ezek regisztrációhoz vannak kötve és felhasználók különféle jogkörökkel rendelkeznek.

Egy pont után, ahol a program értelmét adó üzleti modell elkezd bonyolódni, ott következésképpen az alkalmazás is komplikáltabb fejlesztői megoldásokat igényel. Itt jönnek képbe jellemzően az egyéni backend függvények, melyekkel ez megvalósítható és erre a BaaS lehetőséget is ad a webes felületen keresztül.

Ha azonban nem csak egy fejlesztő, hanem egy csapat dolgozik ezen, akkor ugyanazt a felületet módosítanák többen - akár egyidőben is. Így a fejlesztők hamar egymás lábára léphetnek, főleg, hogy ezek a felületek nem adnak (ma még) lehetőséget, hogy ezekhez a függvényekhez tesztet írjunk.

Ugyanitt merül fel problémaként a verziókövetés hiánya: nehéz dokumentálni és visszakövetni, hogy melyik változás, mikor, ki által és miért következett be.

### Akkor meddig jó?

Úgy gondolom, hogy egy zöldmezős vagy prototípus alkalmazás létrehozásakor sok, backend fejlesztésre szánt idő (és pénz) megspórolható a BaaS által. Egy nem túl komplex, [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) (Minimum Viable Product, minimum elvárásokat teljesítő termék) alkalmazáshoz jó választás lehet egy ilyen szolgáltatás használata.

Ha erről az MVP alkalmazásról a piacra kerülést követően vagy a tesztfázisban kiderül, hogy "van benne potenciál", azaz van igény a továbbfejlesztésre, akkor érdemes lehet backend fejlesztőket dedikálni a projektre. A Graphcool és Scaphold felületén is van lehetőség kiexportálni a sémát, azok felhasználásával a saját backend fejlesztése már nem nulláról indul.

### Előretekintés: az Amazon színrelép

November végén az Amazon [bejelentette](https://aws.amazon.com/about-aws/whats-new/2017/11/introducing-aws-appsync-a-managed-graphql-service-with-real-time-data-and-offline-programming/), hogy ők is "beszállnak a GraphQL-be". AWS AppSync szolgáltatásuk konkurenciát jelenthet valamennyi jelenlegi GraphQL BaaS számára. Főleg azért, mert az Amazon-nál rengeteg a tapasztalt, jól képzett fejlesztő, akik segítségével igen hamar behozható a cég lemaradása a GraphQL területén. Másrészt, ha az AppSync integrálódik a meglévő Amazon szolgáltatásaikba, akkor ez is döntési pont lehet egy fejlesztőcsapat számára, hogy a már amúgy is használt és ismert szolgáltatót választják a kisebb, start-up hangulatú BaaS-ekkel szemben.

Az AWS AppSync jelenleg még kipróbálási szakaszban van, igényelni kell hozzáférést. Mivel ez a bankkártya adatok megadásával jár, én ezt egyelőre nem tettem meg.
