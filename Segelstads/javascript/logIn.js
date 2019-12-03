$(document).ready(function () {
    var inloggad = false;

    var modal = document.getElementById('logInModal');
    if (!inloggad) {
        modal.style.display = "block"
    }
});



function logIn() {
    if ($("#password").val() == "DaciaFredde") {
        var modal = document.getElementById('logInModal');
        modal.style.display = "none";
        inloggad == true;
    }

    else {
        $('#passwordLbl').text("Fel lösenord");
    }
}
