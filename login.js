var Inloggen_v2 = function (login) {

	var gebruikersnaam = '';
	var wachtwoord = '';
	var varCheckOpResultaat = 'false';

	function setgebruikersnaam() {
		gebruikersnaam = $("#gebruikersnaam").val();
		console.log("Status: Gebruikersnaam value uit inputveld halen")
	}

	function setwachtwoord() {
		wachtwoord = $("#wachtwoord").val();
		console.log("Status: Wachtwoord value uit inputveld halen")
	}

	function loginSucces() {
		console.log("Status: Login succesvol");
		alert('Inloggen succesvol');
	}

	function loginError() {
		console.log("Status: Login mislukt");
		alert('Gebruikersnaam en/of wachtwoord zijn onjuist');
	}

	function checkVarMetJson() {
		$.getJSON("./gebruikers.json", function (data) {
			console.log("Status: Input vergelijken met records .json")
			for (var z = 0; z < data.length; z++) {
				if ((data[z]['gebruikersnaam'] == gebruikersnaam) && (data[z]['wachtwoord'] == wachtwoord)) {
					varCheckOpResultaat = 'true';
				}
			}
			jsonCheckValideren();
		});
	}

	function jsonCheckValideren() {
		console.log("Status: Input valideren op true of false")
		if (varCheckOpResultaat == 'true') {
			loginSucces();
		} else {
			loginError();
		}
	}

	return {
		dataUitFormInput: function () {
			console.log("Status: Data initialiseren in leegstaande variabelen");
			setgebruikersnaam();
			setwachtwoord();

			checkVarMetJson();
		}
	}
}($);