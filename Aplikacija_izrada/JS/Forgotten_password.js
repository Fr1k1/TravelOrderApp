/*document.querySelector(".btn").addEventListener("click", function () {


})*/

function sendPasswordResetLink(userName, email) {

    debugger
    $.ajax({
        url: webAPIUrl + "/api/v1/user/forgottenPasswordSendEmail",
        data: JSON.stringify({ usr_login: $("#korisnicko_ime").val(), usr_email: $("#email").val(), host: window.location.host, protocol: window.location.protocol, path: window.location.pathname }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function () {

            $('.alert').show();

            $('.alert').removeClass("sakri");

            setTimeout(function () {
                window.location.href = "Login.cshtml";
            }, 3000);


        },
        error: function () {
            passwordForgottenInProccess = false;
            resetFailedToast.show();
            alert("Neuspjesni reset");


        }
    });
}

var passwordForgottenInProccess = false;

document.querySelector(".btn").addEventListener("click", function (e) {


    e.preventDefault();
    e.stopPropagation();

    if (passwordForgottenInProccess) return;

    passwordForgottenInProccess = true;
    if (form.checkValidity() === false) {
        form.classList.add('was-validated');
        passwordForgottenInProccess = false;
    }
    else {


        sendPasswordResetLink($('#korisnicko_ime').val(), $('#email').val());
    }

}, false);




window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        window.location.reload();
    }
});
MobPpasswordForgotten = (function () {



}())

