# Warm tapwater: laatste drie omschakelingen

Implementatievoorstel, nog niet op Ruuds Homey geïnstalleerd.

Onder Verwarming verschijnen de laatst aangestuurde tapwaterbron, het tijdstip
en de laatste drie omschakelopdrachten. De eerste registratie legt alleen een
beginstand vast: eerder schakelen wordt niet verzonnen. De gegevens blijven
bewaard in de app-instellingen (`tapwaterLog`) na een appherstart. Herhaalde
opdrachten voor dezelfde bron schrijven niets en voegen geen historie toe.
De registratie start geen klep-, boiler- of laadcommando en voegt geen polling toe.

## Ingebruikname door appbeheerder

1. Review de patch, bouw de Homey-app en publiceer een testupdate. Gebruik de
   gewone updateprocedure zodat bestaande instellingen en historie behouden blijven.
2. Voeg de nieuwe Energie Dashboard-actie `Registreer warm tapwater via bron`
   toe aan de succesuitgang van elke relevante klepopdracht. Bij Ruuds huidige
   Flow `Boiler Driewegklep Aansturing`: `down` betekent **Direct uit boiler**,
   `up` betekent **Via cv-ketel (naverwarming)**. De bestaande succesacties blijven
   aangesloten. Sluit de registratie niet aan op een foutuitgang.
3. Reden bij de huidige regeling: boven 42 °C direct boilerwater, onder 38 °C
   cv-naverwarming. Tussen die grenzen blijft de bestaande stand gelden.
   Geen bestaande grens of beveiliging wijzigen.
4. De eerstvolgende geslaagde reguliere klepopdracht maakt een beginregistratie.
   Geen testbeweging uitvoeren om de historie te vullen. Controleer een volgende
   normale omschakeling en een herhaalde opdracht naar dezelfde bron.
5. Ook andere automatiseringen die de bron bedienen moeten de actie krijgen.
   Handmatige bediening buiten deze flows wordt niet geregistreerd. De tekst
   zegt daarom expliciet **aangestuurd**, niet fysiek bevestigd.

Zonder aangesloten registratiekaart verschijnt geen nieuwe sectie. Bij historisch
terugkijken wordt de actuele omschakelhistorie niet op het verleden geprojecteerd.
De nieuwe Nederlandstalige tekst moet vóór een algemene release nog worden
opgenomen in de bestaande vertaalcatalogus. Redenen zijn vrije, escaped tekst.

## Herstel

Verwijder uitsluitend de twee nieuwe registratieacties uit de Flow om de
registratie te stoppen; behoud alle bestaande klep- en logica-acties. De oorspronkelijke
regeling is door deze patch niet aangepast. Een app-downgrade is niet nodig.

## Validatie

`node --test homey-app/lib/tapwater.test.js` controleert beginstand, herhaalde
opdrachten, opslag/herstart, laatste drie, ongeldige invoer en begrensde redenen.
`npm run sync` bouwt de bestaande browserbestanden voor Safari 12.
