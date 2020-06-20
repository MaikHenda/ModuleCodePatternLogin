$(function () {
    $("#loginForm").on("submit", function (e) {
        console.log("Status: Verkrijgen van inlog gegevens")
        e.preventDefault();

        var gebruikersnaam = $("#gebruikersnaam").val();
        console.log("Gebruikersnaam Check")
        
        var wachtwoord = $("#wachtwoord").val();
        console.log("Wachtwoord Check")

        function gebruikersnaamCheck(data) {
            console.log("Status: Checken van gebruiker in database")
            return data.find(function (gebruiker) {
                return (gebruiker.gebruikersnaam == gebruikersnaam && gebruiker.wachtwoord == wachtwoord);
            });
        }

        function loginSucces(res) {
            var result = gebruikersnaamCheck(res);
            berichtgeving(result);
            console.log("Status: Inloggen succesvol");
            console.log(res);
            console.log(result);
        }

        function loginError(err) {
            console.log("Status: Login sequentie mislukt");
            console.log(err);
        }

        gebruikersChecklist(loginSucces, loginError);
    });
});

function gebruikersChecklist(successCallback, errorCallback) {
    $.get({
        url: "gebruikers.json",
        success: successCallback,
        error: errorCallback
    });
}

function berichtgeving(result) {
    if (result) {
        $("#error").addClass("d-none");
        $("#success").removeClass('d-none');
    } else {
        $("#error").removeClass('d-none');
        $("#success").addClass('d-none');
    }
}