# Energie Dashboard voor Homey Pro

*English below.*

Een Homey-app die je energie overzichtelijk laat zien op een webpagina: wat je zonnepanelen opwekken, wat je van het net haalt en teruglevert, wat je thuisbatterij doet, welke apparaten het meest gebruiken en wat het kost. Het ziet eruit als de Homey-app en is bedoeld voor een tablet aan de muur, maar werkt ook op je telefoon of computer.

![Het dashboard](docs/screenshots/dashboard-dark.png)

## Installeren

1. Open de app in de Homey App Store: https://homey.app/a/com.drpeppers.energydashboard/test/ en kies **Installeren**.
2. Open in de Homey-app *Meer → Apps → Energie Dashboard → Instellingen*. Bovenaan staat de link naar je dashboard.
3. Open die link op je tablet, telefoon of computer in je thuisnetwerk.

Meer is er niet nodig: geen extra computer, geen account en geen API-key. Updates komen vanzelf binnen, net als bij andere apps. De app vindt je P1-meter, zonnepanelen, thuisbatterij en andere apparaten zelf.

Homey vraagt bij het installeren om toegang tot je Homey. Die is nodig om de gegevens van je andere apps te lezen, zoals de P1-meter en de omvormer. Het dashboard leest alleen en bedient niets.

## Wat je nodig hebt

- Een Homey Pro
- Een slimme meter in Homey, bijvoorbeeld via een P1-dongel van HomeWizard

Zonnepanelen, een thuisbatterij, laadpaal, warmtepomp, boiler of slimme stekkers zijn niet nodig, maar als je ze hebt, verschijnen ze vanzelf op het dashboard.

## Wat je ziet

Het dashboard bestaat uit blokken die je zelf kiest, verschuift en groter of kleiner maakt met het potlood rechtsboven. Onder andere:

- **Energie nu**: wat er op dit moment tussen zon, net, huis en batterij stroomt
- **Totalen** per dag, week, maand en jaar, vergeleken met de vorige periode
- **Vermogen vandaag**: je verbruik en opwek door de dag heen
- **Energiestromen**: waar je stroom vandaan kwam en welk apparaat het gebruikte
- **Kosten**, **Stroomprijs** en **Einde salderen**, met je eigen energiecontract
- **Thuisbatterij** en **Batterijgebruik**: wat de batterij laadde en leverde en wat dat opleverde
- **Warm water**, **Verwarming** en **Laadpaal**
- **Groepen** en **Fasebelasting**: hoe zwaar elke groep in je meterkast belast is
- **Meterstanden**, **Sluipverbruik**, **Meldingen** en **Batterij kiezen** (welke thuisbatterij bij je verbruik past)

Met de knop **i** bij elk blok lees je hoe het berekend is. Bij Vandaag en Gisteren kun je terugkijken naar een eerder moment van de dag. Er zijn ook widgets voor Homey Dashboards.

Het dashboard werkt in licht en donker en in tien talen: Nederlands, Engels, Duits, Noors, Zweeds, Deens, Italiaans, Frans, Portugees en Spaans.

De volledige uitleg van alle blokken en instellingen staat in de [handleiding](homey-app/README.md).

| | |
|---|---|
| ![Energie nu](docs/screenshots/energy-now.png) | ![Energiestromen](docs/screenshots/energy-flows.png) |
| ![Thuisbatterij](docs/screenshots/battery.png) | ![Telefoon](docs/screenshots/phone-nl.png) |

## Vragen of iets werkt niet?

- Stel je vraag op het Homey-forum: [Nederlands](https://community.homey.app/t/160118) of [English](https://community.homey.app/t/160116).
- Of maak een [issue](https://github.com/WNijhof/homey-energy-dashboard/issues) aan op GitHub.
- Klopt er iets niet, stuur dan een diagnose mee: in de instellingen van de app onder **Diagnose delen**. Daarmee kan ik zien welke apparaten de app gevonden heeft.

---

## English

A Homey app that shows your energy on a web page: what your solar panels produce, what you take from and return to the grid, what your home battery does, which devices use the most and what it costs. It looks like the Homey app and is made for a tablet on the wall, but also works on your phone or computer.

**Install:** open https://homey.app/a/com.drpeppers.energydashboard/test/ and choose **Install**. Then open *More → Apps → Energy Dashboard → Settings* in the Homey app: the link to your dashboard is at the top. No extra computer, account or API key is needed, and the app finds your P1 meter, solar panels, battery and other devices by itself. You need a Homey Pro with a smart meter (P1); everything else is optional.

Questions or problems: ask on the [Homey forum](https://community.homey.app/t/160116) or open an [issue](https://github.com/WNijhof/homey-energy-dashboard/issues), if possible with a diagnosis from the app settings (**Share diagnosis**).

---

Wil je zelf aan de code werken? Zie [DEVELOPMENT.md](DEVELOPMENT.md).
