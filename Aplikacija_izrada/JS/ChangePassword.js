function changePassword(password) {


    debugger
    var UrlParams = new URLSearchParams(window.location.search);

    $.ajax({
        url: webAPIUrl + "/api/v1/user/forgottenPassword",
        data: JSON.stringify({ usr_password: CryptoJS.MD5(password).toString(), host: window.location.host, usr_guid: UrlParams.getAll('g')[0], usr_com_id: UrlParams.getAll('c')[0], hash: UrlParams.getAll('h')[0], protocol: window.location.protocol, path: window.location.pathname }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (e) {

            var nova = document.querySelector("#password");
            var nova_potvrdi = document.querySelector("#password-confirm");

            if (nova.value == nova_potvrdi.value)
                alert("Uspjesno ste promjenili lozinku");

            else {

                passwordChangeInProccess = false;
                alert("Nisu iste vrijednosti");
                e.preventDefault();
                e.stopPropagation();
            }

        },
        error: function () {
            passwordChangeInProccess = false;
            alert("Nije proslo");
        }
    });
}




document.querySelector("#promjeni_pass").addEventListener("click", function () {

    changePassword($('#password').val());
})




window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        window.location.reload();
    }
});

MobPasswordChange = (function () {

    var passwordChangeInProccess = false;

    function onLoad() {


        $("#password").attr("pattern", "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$");

        $('#passwordConfirmation').on('focusin', function () {
            removeValidationCSS();
        });

        $('#passVisibility').on('click', function () {
            if (document.querySelector("#password").getAttribute("type") == "password") {
                document.querySelector("#password").setAttribute("type", "text");
                $("#passVisibility").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>');

            } else {
                document.querySelector("#password").setAttribute("type", "password");
                $("#passVisibility").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/></svg>');
            }
        });

        $('#passConfirmVisibility').on('click', function () {
            if (document.querySelector("#passwordConfirmation").getAttribute("type") == "password") {
                document.querySelector("#passwordConfirmation").setAttribute("type", "text");
                $("#passConfirmVisibility").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>');

            } else {
                document.querySelector("#passwordConfirmation").setAttribute("type", "password");
                $("#passConfirmVisibility").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/></svg>');
            }
        });

        function removeValidationCSS() {
            var elems = document.querySelectorAll(".was-validated");
            if (document.querySelectorAll(".was-validated").length) {
                [].forEach.call(elems, function (el) {
                    el.classList.remove("was-validated");
                });
            }
        }

        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {

                event.preventDefault();
                event.stopPropagation();

                if (passwordChangeInProccess) return;

                passwordChangeInProccess = true;
                if (form.checkValidity() === false) {
                    form.classList.add('was-validated');
                    passwordChangeInProccess = false;
                }
                else {


                    changePassword($('#password').val());
                }

            }, false);
        });

    }


    return {
        onLoad: onLoad
    }
}())

