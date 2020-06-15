# Angular Exam

A vizsga két részből fog állni, első részében pár kérdésre kell válaszolnotok. 
Kérlek tegyétek ezt meg **_röviden és lényegretörően_**. A pontszámok indikálják, hogy mennyi információt várok, 
egy-egy kérdésre.

A második résznél pár egyszerü feladatot kell megoldanotok. Ne fordítsatok sok időt arra, 
hogy maga a megjelenítés szép legyen, nem ez fontos most, hanem **_a kód helyessége és minősége_**!

Forkoljátok ezt a repot a válaszokat írjátok le a kérdések alá. 
A gyakorlati feladatoknál, amennyiben a project nem indul el, nem tudok rá pontot adni.
**_Amikor végeztetek az url-eket slacken várom._**

####**_A vizsgára 60 perc áll rendelkezésetekre._**

### Kérdések (30 pont)

1) Mi az az SPA (Single Page Application)? **(2p)**

Egy HTML file es tobb JS file amit egyszer kerunk le a szerverrol. A JavaScript dinamikusan valtoztatja a DOMot a bongeszoben.
Gyorsabb mint az MPA, ha adat kell a szerverrol azt a hatterben kerjuk le, az oldal nem tolt ujra.

2) Miket nevezünk dekorátoroknak? Mondj rájuk legalább 3 példát. **(4p)**

Lehetove teszik egy service vagy direktiva modositasat a hasznalata elott.
@HostListener, @Inject, @Input

3) Nevezz meg két-két struktúrális és attribútum direktívát! Mire használjuk őket? **(4p)**

ngFor: ugy hasznaljuk mint egy for ciklust, tombok, objectek kiporgetese a html oldalra
ngIf: meg tudjuk hatarozni vele, hogy egy html element csak akkor jelenjen meg ha a teljesul a feltetel

ngStyle: dinamikusan allithatunk be inline styleokat a komponens allapotatol fuggoen
ngClass: dinamikusan elvehetunk vagy hozzaadhatunk CSS classokat a komponenshez

4) Milyen típusú adatok jeleníthetőek meg string interpoláció segítségével? Milyenek nem? **(2p)**

A primitive adatok megjelenithetoek. De Objectek, arrayk mar nem, ezeket ki kell porgessuk egy ngForral, vagy index/key szerint hivatkozni rajuk.

5) Nevezz meg legalább 3 életciklust! Mire használjuk őket? **(3p)**

OnInit: az itt deklaralt esemenyek a komponens letrejottekor mennek vegbe (pl: subscribe)
OnDestroy: a komponens megszunesekor (elnavigalas, bezaras) hajtodik vegre (pl: unsubscribe)
DoCheck: reagal azokra a valtoztatasokra amire az angular magatol nem tudna


6) Mit jelent a dependency injection? Angularban hogyan használjuk? **(2p)**

Ha egy classnak van dependency injectionje, az azt jelzi, hogy a classnak szuksege van arra a servicere, hogy mukodni tudjon.
Igy nem muszaj minden egyes komponensben letrehoznunk ugyanazt, eleg csak egyszer, majd injektalni.

7) Abszolút vagy relatív elérési utat lehet használni a templaten a routerLink-nél? Miért? **(2p)**

abszolut, a routerLink mindig a root-bol keresi, hogy hova kell eljusson

8) Abszolút vagy relatív elérési utat lehet használni a kódban a Router.navigate()-nél? Miért? **(2p)**

relativ, mert a .navigat() a jelenlegi oldalrol probal majd elnavigalni

9) Mik azok a guardok? Mire használjuk őket? **(2p)**

A guardok ellenorzik, hogy jelen esetben el lehet-e navigalni egy adott komponensre, vagy a felhasznalo igenybe vehet-e bizonyos funkciokat. Hasznosak ha peldaul tobbfele user role-unk van. Pl: egy Admin megnezheti a teljes user baset-t amig egy User role-al rendelkezo felhasznalo nem.

10) Mik azok a resolverek? Mire használjuk őket? **(2p)**

Egy interface ami megvalositja a resolve functiont. Amikor elkezdodik a navigacio a routernek meg kell varja amig a resolver vegbemegy, es csak azutan navigalhat el. Hasznos, ha valamilyen adatra feltetlenul szuksegunk van a navigacio befejezte elott.

11) Mik azok a pipeok? Mondj legalább két példát! **(2p)**

Kepesek a templaten atalakitani az adatokat. Vannak beepitett pipeok (pl: uppercase: nagybetusse alakitja a teljes szoveget, date: datum formatumot adhatunk meg vele), de letrehozhatunk sajat pipeokat is.

12) Mik azok az interceptorok? Mire használjuk őket? **(2p)**

Ellenorizhetjuk vagy atalakithatjuk veluk a bejovo adatot mielott tovabbadnank azt. Hasznalhatjuk validalasra, exception handlingre.

13) Mi a különbség a Subject és a BehaviorSubject között? **(1p)**

A Subject emittalja de nem tarolja el az ertekeket, amig a BehaviorSubject mindig megorzi az utoljara eltarolt adatot.


### Gyakorlati feladatok (30 pont)
A models mappában megtaláljátok a Pet model-t és a hozzá tartozó enumot. 
A services mappa tartalmazza az állatok listáját, amit használni kell, a láthatósági beállításokat nem módosíthatod!
1) Hozz létre két komponenst, az egyik listázni fogja az állatokat, 
a másik a lista egyes elemeinek megjelenítéséért felelős. **(5p)**
2) Kösd össze őket a lehető legegyszerübb módon, figyelj rá, hogy mire, hol és meddig iratkozol fel! **(5p)**
3) Hozz létre egy direktívát ami kékre változtatja a list 
elemének hátterét mouseoveren ha kutya és pirosra ha macska. **(5p)**
4) Hozz létre egy pipeot ami nem engedi hogy 20 karakternél több jelenjen meg a descriptionból, 
a túllógó részt helyettesítse ...-al. Nem vághat ketté szavakat! **(5p)**
5) Hozz létre egy komponenst ami új állatok hozzáadásáért felelős, reactive form segítségével,
 minden mező kitöltése legyen kötelező, az állat neve legalább 2 karakterből álljon, a description pedig nem lehet több mint 200 karakter! 
 Új elem hozzáadásakor a lista automatikusan frissüljön **(10p)** 

#####Plusz pontért (10p)
- Készíts routingot, a hozzáadásért felelős logika kerüljön külön oldalra **(5p)**
- Old meg, hogy resolver adja vissza a lista számára az elemeket **(5p)**
