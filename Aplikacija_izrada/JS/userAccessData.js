window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        window.location.reload();
    }
});



MobAccessData = (function () {

    var accessDataInProccess = false;
    var lang = "hr";

    function onLoad() {


        $("#password").attr("pattern", "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$");


        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {

                event.preventDefault();
                event.stopPropagation();

                if (accessDataInProccess) return;

                accessDataInProccess = true;
                if (form.checkValidity() === false) {
                    form.classList.add('was-validated');
                    accessDataInProccess = false;
                }
                else {

                    updateUserLoginData($('#un').val(), $('#password').val(), $('#code').val());
                }

            }, false);
        });
        function updateUserLoginData(userName, password, code) {
            var UrlParams = new URLSearchParams(window.location.search);
            debugger
            $.ajax({
                url: webAPIUrl + "/api/v1/user/userLoginData",
                data: JSON.stringify({ usr_code: code, usr_login: userName, usr_password: CryptoJS.MD5(password).toString(), host: window.location.host, usr_guid: UrlParams.getAll('g')[0], usr_com_id: UrlParams.getAll('c')[0], hash: UrlParams.getAll('h')[0], protocol: window.location.protocol, path: window.location.pathname }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function () {
                    updateSuccessToast.show();
                    alert("Uspjesno poslano");

                },
                error: function (xhr) {
                    alert("Neuspjesno poslano");
                    accessDataInProccess = false;

                }
            });

        }

        $("#gumb_novi_podaci").click(function () {

            updateUserLoginData($('#un').val(), $('#password').val(), $('#code').val());
            alert("Uspješno updateanje podataka!");
        });

    }




    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };



    return {
        onLoad: onLoad
    }
}())

