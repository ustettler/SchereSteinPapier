console.log("Schnick,Schnack,Schnuck")

ergebnisComputer = 0;
ergebnisSpieler = 0;

/* Funktionsblock */
/* -------------- */

// Funktion "display" zur Anzeige von Texten im Paragraphen mit der ID "ausgabe" des HTML-Dokuments
let display = function(text) {
  let ausgabeParagraph = document.getElementById('ausgabe');
	ausgabeParagraph.innerHTML = text + "<br>";
	return;
};

// Funktion "displayErgebnis" zur Anzeige von Texten im Paragraphen mit der ID "ergebnis" des HTML-Dokuments
let displayErgebnis = function(text) {
  let ausgabeParagraph = document.getElementById('ergebnis');
	ausgabeParagraph.innerHTML = text + "<br>";
	return;
};




/* Funktion "vergleich" vergleicht die Eingaben und gibt das gewinnende Element zurück */
let vergleich = function (auswahlSpieler, auswahlComputer) {
	auswahlSpieler = auswahlSpieler.toLowerCase().trim();
	auswahlComputer = auswahlComputer.toLowerCase().trim();
    if (auswahlSpieler === auswahlComputer) {
			ergebnisComputer++;
			ergebnisSpieler++;
      return `<br><i class="fas fa-balance-scale"></i> Unentschieden!`;
    } else if (auswahlSpieler === "stein") {
        if (auswahlComputer === "schere") {
					ergebnisSpieler++;
          return `<br><i class="fas fa-gem"></i> gewinnt!`;
        } else {
					ergebnisComputer++;
          return `<br><i class="fas fa-scroll"></i> gewinnt!`;
        }
    } else if (auswahlSpieler === "papier") {
        if (auswahlComputer === "stein") {
					ergebnisSpieler++;
          return `<br><i class="fas fa-scroll"></i> gewinnt!`;
        }
        else {
					ergebnisComputer++;
          return `<br><i class="fas fa-cut"></i> gewinnt!`;
        }
    } else if (auswahlSpieler === "schere") {
        if (auswahlComputer === "stein") {
					ergebnisComputer++;
          return `<br><i class="fas fa-gem"></i> gewinnt!`;
        }
        else {
					ergebnisSpieler++;
          return `<br><i class="fas fa-cut"></i> gewinnt!`;
        }
    } else {
    	return "Falsche Eingabe!?"
    }
};

let erzeugeComputerAuswahl = function () {
	let zufallsZahl = Math.random();
	if (zufallsZahl < 0.34) {
		return "stein";
	} else if(zufallsZahl <= 0.67) {
		return "papier";
	} else {
		return "schere";
	}
};

/* Hauptteil */
/* --------- */
let spielen = function (spielerAuswahl) {
	let meldung;
	let ergebnis;
	let computerAuswahl = erzeugeComputerAuswahl();
	
  meldung = "Du hast " + spielerAuswahl.substr(0, 1).toUpperCase() + spielerAuswahl.substr(1) + " und der Computer hat " + computerAuswahl.substr(0, 1).toUpperCase() + computerAuswahl.substr(1) + ".\n";
  meldung = meldung + vergleich(spielerAuswahl, computerAuswahl);
  display(meldung);

	ergebnis = "Spieler: " + ergebnisSpieler + " / Computer: " + ergebnisComputer;
	displayErgebnis(ergebnis);

};