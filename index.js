var login_module = function (login) {
	var gebruikersnaam = 'yassin';
	var wachtwoord = '123';

	function PrivateFunction() {
		login('#MyId').append('Private Function is called <br />');
	}

	function Getgebruikersnaam() {
		console.log("Stage 1: Gebruikersnaam wordt opgehaald.")
		return gebruikersnaam;
	}

	function Getwachtwoord() {
		console.log("Stage 2: Wachtwoord wordt nu opgehaald.")
		return wachtwoord;
	}

	function inlogSucces() {
		console.log("Wachtwoord is correct.")
		return "Wachtwoord is correct :)";
	}

	function inlogError() {
		console.log("Wachtwoord is foutief.")
		return "Wachtwoord is niet correct :(";
	}

	return {
		checkInlog: function () {
			if ($('#gebruikersnaam').val() == Getgebruikersnaam() && $('#wachtwoord').val() == Getwachtwoord()) {
				alert(inlogSucces());
			} else {
				alert(inlogError());
			}
		}
	}

}($);