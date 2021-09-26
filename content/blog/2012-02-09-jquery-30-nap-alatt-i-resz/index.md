---
author: info_plhg3qe0
comments: true
date: 2012-02-09 20:52:39+00:00
layout: post
link: https://nandito.hu/2012/02/09/jquery-30-nap-alatt-i-resz/
slug: jquery-30-nap-alatt-i-resz
title: jQuery 30 nap alatt I. rész
wordpress_id: 82
categories:
- Dev
tags:
- jquery
- tutsplus
---

[Tutsplus.com](http://tutsplus.com/) ajánlata a következő: megtanítja nekem (és bárki másnak is) 30 nap alatt a jQuery használatát ingyen.

Ez az ajánlat több szempontból is vonzó számomra:

* Érdekel a jQuery
* Anyagi vonzattól mentes
* Nincs semmi veszítenivaló

Az oktatás úgy működik, hogy e-mail címünk megadása és megerősítő e-mailben megfelelő linkre kattintás után naponta kapunk egy linket, ami egy videóra mutat. [Jeffrey Way](http://notes.envato.com/team/meet-the-staff-jeffrey-way/) tartja az "előadásokat", aki az [Envato](http://envato.com/) online oktatóközpont egyik tanára. Korábban már találkoztam vele egy [Rails videóban](http://www.youtube.com/watch?v=cMcEgOPza8A).

Úgy döntöttem, hogy nagy vonalakban, vázlatosan leírom az aktuális napi videó tartalmát. Ez abból a szempontból is jó, hogy emlékeztet arra, hogy mit hol is láttam, így egyszerűbb lesz a visszakeresés vagy utánanézés. Mivel ezek a kis vázlatok nem hosszúak, tényleg csak pár címszó, esetleg megjegyzendő példa, így nem minden nap születik róla bejegyzés, hanem mondjuk 6 részenként.

#### Íme az első hat nap tanulsága:

### 1. nap

Egyből 2 videót is kaptam (mármint linket, amin keresztül online nézhetem, nem kell letölteni). Egyik egy rövid (38 másodperces) ismertető Jeffrey Way-től, az oktatótól. Itt elmondja, hogy adjak neki napi 15 percet és 30 nap múlva jQuery pro leszek. Jó.

A második videó már 11 perces (1 mp híján). Lehetőség van a videó letöltésére és a projekt fáljok letöltésére is. Ez a rész a jQuery library-król, letöltésükről és html kódba illesztésükről, és a selector-okról szól. Teljesen jól érthető, követhető és logikus. Az alapoktól kezdi a tanfolyamot (nagyon helyesen), de tény, hogy ezekkel már tisztában voltam, mivel kicsit tanultam jQuery-t. Viszont, ha nem tanultam volna, akkor most megértettem volna.

### 2. nap

7 perces videó, abból is csak egy. Tarthatónak tűnik a napi 15 perc – nyilván ha magam is végig próbálom a videóban bemutatottakat, akkor máris megvan a negyedóra. A document.ready kerül bemutatásra. Egy html oldal betöltésekor a böngésző soronként értelmezi a html-t így, ha a jQuery kód előbb van, mint az kódrész, amin változtatni kell, akkor „meg kell neki mondani”, hogy várjon, amíg a teljes oldal (DOM – Document Object Model) be nem tölt, és csak aztán fusson le. Erre szolgál a **$(document).ready(funtion{});**, vagy rövidebben: **$(function(){});** (előbbi érthetőbb, utóbbi rövidebb). Innen eredhet a napi tananyag elnevezése is: „Not so fast, jQuery” – azaz „Ne olyan gyorsan, Tudjukki”.

### 3. nap

Bizonyos metódusok (eljárások) kerülnek bemutatásra. Ezeket össze lehet keverni, - tapasztalatom szerint - kis gyakorlást igényelnek, de logikusak. Azért itt van pár példa:

* `$(’ul’).children(’li’);` csak a közvetlen li-t jelöli ki, ami az ul-on belül van. Ha az ul-on belüli li-ben van egy másik lista elemekkel, akkor azok nem lesznek kijelölve.
* `$(’ul’).find(’li’);` nem csak a közvetlen listaelemeket jelöli ki, hanem azokat is, amik egy, vagy több szinttel lejjebb vannak, tehát az mindazt, ami az `<ul>` és `</ul>` tag között van.
* `$(’ul’).children(’li’).eq(2);` a 3. listaelemet jelöli ki (mivel a számozás 0-tól indul).
* `$(’ul’).children(’li’).eq(1).next();` ez is a 3. listaelemet jelöli ki. A next() a következő a soron következő, ugyanazon tulajdonságú elemre mutat.
* `$(’ul’).children(’li’).eq(3).prev();` ez is a 3. listaelemet jelöli ki.
* `$(’li’).parent();` a közvetlen szülő kijelölése (zárójelben megadható a tag neve, ID-je vagy osztálya)
* `$(’li’).parents(.container);` nem csak a közvetlen szülő, hanem az összes `<li>`-t közbezáró tag között keresi az összes container osztállyal rendelkezőt és azt/azokat jelöli ki.
* `$(’li’).closest(.container);` annyiban tér el az előzőtől, hogy csak az adott listaelemhez legközelebbit jelöli ki, ha esetleg attól távolabb is van, azt már nem.

### 4. nap

Ez a nap az eseményekről (events) szól. Az oktató (Jeffrey) egy alapszintű honlaphoz készít css stíluslap cserélő scriptet. Szó esik a this-ről. Ez a következőképp néz ki:

```js
(function(){
  $(’button’).click(function(){
    console.log(this);
  });
})();
```

Ilyenkor, ha egy gombra kattintunk, akkor a konzolban megjelenik az a gomb (html formában), amelyikre kattintottunk. Tehát a this egy olyan érték a függvényen belül, ami az aktuálisan kiválasztott/folyamatban lévő értéket adja vissza. Különbség van a sima this és a `$(this)` között!

Másik fontos dolog, amire rámutat ez a videó, az a változók használata. Pl.:

* `var uls = $(’ul’);` ezáltal nem kell állandóan leírni, hogy `$(’ul’)`, ha újra azt akarjuk használni, hanem helyette csak azt, hogy uls. Ez azért is jó, mert nem kell mindig az eseménynek DOM-ba „ugrani”, vagyis kevésbé terheli a böngészőt.
* Adott elem attribútuma módosítható az attr-al a következőképp: `$(’.link’).attr(’href’,’jaj.css’);`
* `.siblings()`: a kiválasztott elemmel azonos tulajdonságú és azonos szinten (pl.: ugyanazon div-ben) lévő másik elemet/elemeket választja ki.

### 5. nap

Ma egy táblázatszerű listát készítünk, ahol az egyes cellák felé mozgatva az egeret, jQuery-szerűen lenyílik egy kis sáv – lejjebb tolva az alatta lévő cellákat. Ha másik cella felé mozgunk, akkor a korábban lenyitott visszacsúszik (eltűnik) és lenyílik az éppen aktuális. A létrehozás ismét a váz megalkotásával kezdődik. Itt számomra új elem jelent meg, a <dl><dt></dt><dd></dd></dl> felépítésű „definíciós lista”. Szegyén-nem szégyen, nem láttam még ilyet (vagy legalábbis nem tűnt fel) és nem is volt rá szükségem. Példa rá a w3schoolból:

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

Másik érdekesség számomra a Chrome Autosave plugin, ami lehetővé teszi, hogy a Chrome-on belül szerkesszük a CSS fájlt, ezáltal gyakorlatilag WYSIWYG (What You See Is What You Get - Kapod, amit látsz) szerkesztőt készítve a böngészőből.

CSS-el egész ügyes kereteket (border)-t állít össze Jeffrey. Kiderült, hogy a CSS3-ban már van olyan, hogy `:nth-last-child(2)` – ami az adott felsorolásban az utolsó előtti elemet jelenti.

Használt effektek: a `.slideDown()` és a `.slideUp()`. A zárójelbe írt szám az animáció sebessége ms-ban.

### 6. nap

Ma nincs videó. Helyette kisZH – vagyis gyors kvíz az eddig tanult alapokból. Nem nehéz, tényleg csak azokat kérdezte, amiket elmondott. 1 hibám volt, ami igazából annyira nem is volt hiba, csak a kérdésre, hogy „Mivel jelölök ki azonos szinten az aktuális elemen kívül minden mást?” annyit írtam, hogy „siblings” és lehet, azt kellett volna, hogy „siblings()”. Ezzel együtt is 92% lett a teszt, jó lenne egyetemen is ilyeneket írni, de hát az élet nem habostorta és a BME nem diplomagyár.

### Konklúzió

Eddig egy napot sem hagytam ki és nem is tervezem a továbbiakban sem. A léptékek, ahogyan Jeffrey Way halad, teljesen jók, érthetően beszél és jól elmagyarázza a dolgokat. Láthatóan remek szakember, legtöbb apróságra kitér és elmondja, mi miért úgy működik ahogyan, és mi lenne másképp, ha mást máshogyan csinálna.
