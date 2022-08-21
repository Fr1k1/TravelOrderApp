

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



document.querySelector(".gumb_prijava").addEventListener("click", function (userName, password) {
    //  debugger
    $.ajax({
        url: webAPIUrl + "/api/v1/user/login" + (getUrlParameter("domain") ? "?domain=" + getUrlParameter("domain") : ""),
        data: JSON.stringify({ username: $('#username').val(), pass: CryptoJS.MD5($('#password').val()).toString(), applicationId: 2 }),
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (userData) {
            sessionStorage.setItem("user", JSON.stringify(userData));
            window.location.href = "index.cshtml?portalDesignName=" + userData.PortalDesigneName + "&sessionLanguage=" + userData.SessionLanguage + "&sessionMapLanguage=" + userData.SessionMapLanguage;
        },
        error: function () {
            loginInProcess = false;

            if ($("#password").val() == "")
                $("#password").css("border-color", "red");

            if ($("#username").val() == "")
                $("#username").css("border-color", "red");

            $("#loginBtn").find(".spinner-grow-sm").css("display", "none");
            $("#loginBtn").find(".sr-only").css("display", "inline-block");
            $('.alert').show();

            $('.alert').removeClass("sakri");

            /* loginFailedToast.show();*/

        }
    });
})