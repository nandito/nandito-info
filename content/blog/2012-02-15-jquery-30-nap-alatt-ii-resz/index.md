---
author: info_plhg3qe0
comments: true
date: 2012-02-15 19:07:31+00:00
layout: post
link: https://nandito.info/2012/02/15/jquery-30-nap-alatt-ii-resz/
slug: jquery-30-nap-alatt-ii-resz
title: jQuery 30 nap alatt II. rész
wordpress_id: 103
categories:
- Dev
tags:
- jquery
- tutsplus
---

**_Az előző rész tartalmából:_**

> [Tutsplus.com](http://tutsplus.com/) ajánlata a következő: megtanítja nekem (és bárki másnak is) 30 nap alatt a jQuery használatát ingyen.

### 7. nap

3 fontos metódus kerül ma bemutatásra, így:

* `.bind()`
* `.live()`
* `.delegate()`

E 3 eljárás mindegyike gyakorlatilag egy pointer (mutató) az `.on()`-ra. Szó esik még a `.clone()` és `.appendTo()` funkciókról is.

### 8.nap

A DOM-hoz adás eljárásairól van szó. Azaz, például hogyan lehet a HTML kódhoz hozzátenni új tartalmat jQuery-vel.

* `.append()` : utána fűzi a zárójelben lévő tartalmat a kijelölt terület végéhez
* `.prepend()`: annyiban más az .append()-nél, hogy nem a „this” után, hanem elé fűz
* Az `.after()` és `.before()` arra szolgál, hogy közvetlenül egy megkeresett tag/osztály után és elé szúrja be a zárójel tartalmát, nem pedig a kijelölt tag-en belülre (ahogyan azt az `.append()` és `.prepend()` teszik).

Új tartalom hozzáadás tag-gel együtt egy „_article_”-höz:

```js
$(’<h2></h2>’, {
  text: ’ez lesz a h2 tag-eken belül’,
  class: ’osztaly’,
}).appendTo(’article’);
```

Az `.appendTo()` a végére illeszt az article-nek, a `.prependTo()` pedig az elejére.
Használható még az `.appendTo()` helyett az `.insertBefore()` vagy `.insertAfter()` is, ilyenkor a zárójelben megadott tag/osztály elé vagy utána teszi az új tartalmat.

Végül egy olyan scriptet írt Jeffrey, ami például blog-bejegyzéseknél használatos: a `<span class=”co”></span>` tag-ek közötti szöveget oldalra igazítva, felnagyítva és egyéni háttérrel ellátva blokkidézetként jeleníti meg. Egész jól néz ki.

### 9. nap

A slide-ról és fade-ről lesz ma szó. A példában egy „contact me” gombra kattintva lecsúszik a weblap tetejéről egy űrlap. Amit már az elején leszögez Jeffrey, hogy mindig a HTML-el kezdjünk (és CSS-el). Ne ugorjunk neki egyből a JavaScriptnek vagy jQuerynek. Jelen esetben ez azt jelenti, hogy először egy „nyers” HTML váz készült, ahol rendre megjelenik az adott szöveg és _contact me_ gomb, alatta pedig az űrlap, ami majd a script elkészítése után csak a gombra kattintva jelenik meg.

Érdekes a JavaScript (JS) engedélyezettségének ellenőrzése. A formot (űrlapot) „fel kell ragasztani” az oldal tetejére. Ennek definiálása egy css osztályban történik (_.js body #form_). Alapból a html-hez nincs hozzáadva semmilyen osztály. A script úgy kezdődik, hogy `$(’html’).addClass(’js’)`. Ezáltal aktívvá válik a _.js body #form_ definíció a css-ben és felragad a form a weboldal tetejére és eltűnik (gombnyomásra pedig előjön). Ha a böngészőben nincs engedélyezve a JS, akkor viszont a html tag-hez sem lesz hozzárendelve a js osztály, így a definíció sem lesz érvényes, tehát a form nem takarja el a tartalmat.

Ha ugyanazokkal a paraméterekkel használjuk a `.slideUp()` és `.slideDown()`-t vagy a `.fadeIn()` és `.fadeOut()`-ot, akkor helyettük használható a `.slideToggle()` és `.fadeToggle()`.

Megjegyzem, ez az eddigi legbonyolultabb rész. Kicsit hosszú is a korábbiakhoz képest (~24 perc) és eléggé belemegy itt a call funkcióba, ide-oda hivatkozik. A végén ezt el is ismeri és ajánlja, hogy nézzük meg újból, ha nem volt minden tiszta elsőre. Igencsak élek a lehetősséggel.

### 10. nap

Jeffrey egy 10 perces előadást szentel most a this megértetésének. Tüzetesen vizsgálgatjuk, hogy mi változik, ha változtatjuk a this környezetét, vagy helyét a scriptben. Amiről már tegnap is volt szó, de nem ejtettem róla szót az az, hogy van egy számomra új módja is a funkciókészítésnek:

```js
var  cif = {
  akarmi: function(){
    console.log(this);
  }
}
```

Ez esetben az akarmi meghívása így történik (például): `$(’a’).on(’click’, cif.akarmi);`

Szó esik a `.preventDefault()`-ról, a `.call()`-ról és a `.proxy()`-ról is.

### 11. nap

Rövid előadás következik az effektek sebességéről. A jQuery forrásfájlban lévő .fx.speeds-ben található értékeket figyeljük meg, majd módosítjuk azokat. Ezek a módosítások természetesen nem magában a jquery-1-7-1.js-ben, hanem a mi HTML állományunkban történik. A forrást nem piszkáljuk. Vannak előre definiált sebességek. Például: `.slideDown(’slow’)` az _600ms_, de ha a zárójelbe `fast`-et írunk, akkor az _200ms_ lesz. Az **alapértelmezett** érték _400ms_. Újat is definiálhatunk a `$.fx.speeds.nagyonlassu = 6000;`-el például. Ilyenkor, ha a `.slideDown()` zárójelébe a ’_nagyonlassu_’-t írjuk, akkor ugyanaz történik, mintha 6000-et írtunk volna.

### 12. nap

Megtanulhatjuk, hogyan írjunk saját scriptet arra, hogy egy `<h1>` elemre kattintva automatikusan megjelenjen néhány bekezdés, majd pár másodperc múlva tűnjön is el. Ehhez a jQuery forrásból kimásoljuk a slideDown definíciója után következő `jQuery.fn[]` kezdetű részt és azt módosítjuk.

Azt szeretnénk, hogy addig ne fusson le a következő parancs, amíg az aktuális effekt le nem fut teljesen. Ezt úgy valósítjuk meg, hogy hozzáfűzzük a 2. parancsot az effekthez:

```js
$(this).slideDown(300, function(){
  //ez csak akkor fut le, ha már a slidedown lefutott.
});
```

A várakoztatásra van előre elkészített eljárás jQuery-ben: a `.delay()`, ahol a zárójelben megadható, hogy mennyi idő teljen el addig (milliszekundumban), míg a következő utasítás lefut.

### Összegzés

Fenntartom továbbra is, hogy érdemes elkezdeni és folytatni ezt a sorozatot. Hasznos időtöltés, nem megerőltető, de azért igényel némi gondolkodást, ha tényleg meg akarja valaki érteni. Ez a kivonat, amit itt publikálok, közel sem helyettesíti a videókat, nem azért csinálom. Inkább arra jó, hogy emlékeztet engem - és bárkit, aki a végigcsinálja a tanfolyamot -, hogy melyik részben mi is volt. Így, ha kérdés merülne fel, akkor gyorsabban megtalálható az a rész, amelyikben a kérdésre választ kaphatunk. 12 napnyi videót néztem meg eddig, az utóbbiak 10 percnél is kevesebbek. Mégis úgy érzem, jQuery-vel gyakorlatilag bármit meg lehet tenni és máris hasznosítható tudással rendelkezem. DE természetesen megnézem a többi részt is!
