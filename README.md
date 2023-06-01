Bakgrund
Strajk bowling är en nyöppnad bowlinghall i centrala Bromölla. Ägaren K. Ägla gillar tekniska lösningar och har tillsammans med brorsonen Keso Ägla byggt denna webbapp. Herr Ägla är väldigt nöjd med appen men vill försäkra sig om att den är fortsatt stabil när ny funktionalitet läggs till framöver. Ditt uppdrag är att skriva E2E-tester i Cypress som sen kan köras för att testa av all funktionalitet som finns.

User stories
Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.

-Användaren ska kunna ange datum och tid för bokningen.

-Systemet ska kunna validera att det angivna datumet inte är tidigare än dagens datum.

-Användaren ska kunna lägga till antal spelare i bokningen.

-Systemet ska validera att antal spelare är större än 0.

-Användaren kan välja att boka en eller flera banor.

-Om allt är tillgängligt så ska systemet utföra bokningen och bekräfta för användaren att bokningen lyckades.

Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.

-Användaren kan ange skostorlek för varje spelare vid bokningen.

-Systemet kollar igenom angivna skostorlekarna matchar antal personer på bokningen.

Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.

\*Man ska kunna ta bort från input ifall man råkar skriva fel storlek.

Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).

\*Man ska kunna skicka iväg formuläret och fetch total beloppet från alla inputs innan man ska "betala".

Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.

\*Det ska finnas en nav där man kan skifta vy mellan bokning och bekräftelsesidan.
