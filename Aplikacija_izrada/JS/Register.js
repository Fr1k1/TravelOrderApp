
window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        window.location.reload();
    }
});


function refreshFormData() {
    $('#ime_tvrtke').val(registerData.companyName);
    $('#adresa_tvrtke').val(registerData.companyAddress);
    $('#drzava').val(registerData.companyCountryName);
    $('#grad').val(registerData.companyCity);
}

function geoCodeAndSetData(address) {
    $.ajax({
        url: AppConfig.TravelOrderAPIUrl + '/v1/company/geocode/' + address,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            console.log(result);
            registerData.companyCity = result.LocalityName;
            registerData.companyAddress = result.Address;
            registerData.companyCountryName = result.CountryName;
            registerData.companyCountryCode = result.CountryNameCode;
            registerData.companyCountryLat = result.Latitude;
            registerData.companyCountryLon = result.Longitude;
            refreshFormData();
        },
        error: function () {

        }
    });
}


function getCompanyData(oib) {
    $.ajax({
        url: AppConfig.TravelOrderAPIUrl + '/v1/company/get/' + oib,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            if (result) {
                oibFound = true;
                let companyAddress = result.sjedista[0].ulica + " " + result.sjedista[0].kucni_broj + ", " + result.sjedista[0].naziv_naselja;
                registerData.oib = result.oib;
                registerData.companyName = result.skracene_tvrtke[0].ime;
                geoCodeAndSetData(companyAddress);
            }
            $("#oibExists").css("display", "none")
            document.getElementById("oib").setCustomValidity('');
            document.getElementById("oib").reportValidity();

        },
        error: function (error) {
            if (error.status == 300) {
                $("#oibExists").css("display", "block");
                document.getElementById("oib").setCustomValidity(' ');
                document.getElementById("oib").reportValidity();
            }

        }
    });
}

var registerData = {
    oib: 0,
    companyName: "",
    companyAddress: "",
    companyCountryCode: "",
    companyCountryName: "",
    companyCountryLat: 0,
    companyCountryLon: 0,
    companyCity: "",
    userNameSurname: "",
    userEmail: "",
    userPhone: "",
    host: "",
    protocol: ""
};


$("#mobitel").addClass("sakri");
$("#mail").addClass("sakri");
$("#ime_prezime").addClass("sakri");

$(".form-label-drugi").addClass("sakri");
$(".ikonica-drugi").addClass("sakri");



$(".dalje").click(function () {

    $("#ime_tvrtke").val = registerData.companyName;
    $("#adresa_tvrtke").val = registerData.companyAddress;
    $("#drzava").val = registerData.companyCountryName;

    $("#ime_tvrtke").addClass("sakri");
    $("#adresa_tvrtke").addClass("sakri");
    $("#drzava").addClass("sakri");
    $(".form-label-prvi").addClass("sakri");
    $(".ikonica-prvi").addClass("sakri");
    $(".prvi_dio").addClass("sakri");
    $(".lijeva-slika-na-formi").addClass("velicina-slike");
    $(".card").addClass("promjena_velicine");

    $(".form-label-drugi").removeClass("sakri");
    $(".ikonica-drugi").removeClass("sakri");
    $("#mail").removeClass("sakri");
    $("#mobitel").removeClass("sakri");
    $("#ime_prezime").removeClass("sakri");


    $("#register_card").attr('id', "#register_card_2");
    $(".dalje").addClass("sakri");

    $(".reg").removeClass("sakri");

    $(".podaci_o_tvrtki").addClass("sakri");

});


$("#oib").on('input', function () {
    var oib = $("#oib").val();
    if (oib.length == 11) {
        getCompanyData(oib);
    }
})


MobRegister = (function () {

    var oibFound = false;
    var lang = "hr";


    function onLoad() {

        $("#userPhone").intlTelInput({
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
            initialCountry: "auto",
            geoIpLookup: function (callback) {
                callback("HR");
            },
        });

        $('#passVisibility').on('click', function () {
            if (document.querySelector("#pass").getAttribute("type") == "password") {
                document.querySelector("#pass").setAttribute("type", "text");
                $("#passVisibility").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>');

            } else {
                document.querySelector("#pass").setAttribute("type", "password");
                $("#passVisibility").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/></svg>');
            }
        });

        $("#nextBtn").click(function () {
            $(this).data('clicked', true);
        });

        $("#saveBtn").click(function () {
            $(this).data('clicked', true);
        })

        $("#backBtn").click(function () {
            $(this).data('clicked', true);
        })




        var form = document.getElementById("forma");

        form.addEventListener("submit", function () {
            alert("Stisnuto");
        })
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (e) {
                alert("Stisnut sam");
                e.preventDefault();
                e.stopPropagation();



                loginInProcess = true;
                if (form.checkValidity() === false) {
                    form.classList.add('was-validated');
                    loginInProcess = false;
                }
                else {
                    if ($("#saveBtn").data("clicked")) {
                        $("#saveBtn").find(".spinner-grow-sm").css("display", "inline-block");
                        $("#saveBtn").find(".sr-only").css("display", "none");


                        //ovo tu jos popuni za register data

                        saveData(registerData, saveSuccessToast, saveFailedToast);
                    }

                    if ($("#nextBtn").data("clicked")) {
                        if (oibFound != true) {
                            registerData = {
                                oib: $('#oib').val(),
                                companyName: $('#companyName').val(),
                                companyAddress: $('#companyAddress').val(),
                            }
                            geoCodeAndSetData(registerData.companyAddress);
                        }
                        document.getElementsByClassName("d-block")[0].style.cssText += ';display:none !important;';
                        document.getElementsByClassName("d-none")[1].style.cssText += ';display:block !important;';
                        $("#nextBtn").data('clicked', false);
                    };
                }

            }, false);
        });

        setDictionary();

        var saveFailedToast = new bootstrap.Toast($("#saveFailed"));
        var saveSuccessToast = new bootstrap.Toast($("#saveSuccess"));
    }


    function setDictionary() {
        if (localStorage.loginLanguage) lang = window.localStorage.loginLanguage;
        else lang = window.navigator.language.substr(0, 2);

        if (lang != "hr" && lang != "en" && lang != "de") lang = "en";

        var dictionaryValues = {
            hr: {
                "oibLabel": "OIB",
                "oibRequired": "OIB je obavezan",
                "oibExists": "Tvrtka s OIB-om postoji u sustavu",
                "companyNameLabel": "Ime tvrtke",
                "companyNameRequired": "Ime tvrtke je obavezno",
                "companyAddressLabel": "Adresa tvrtke",
                "companyAddressRequired": "Adresa tvrtke je obavezna",
                "companyCountryLabel": "Država",
                "companyCountryRequired": "Država je obavezna",
                "companyCityLabel": "Grad",
                "companyCityRequired": "Grad je obavezan",
                "nextBtnText": "Dalje",
                "companyInfo": "Podaci o tvrtki",
                "userInfo": "Korisnički podaci",
                "userNameSurnameLabel": "Ime i prezime",
                "userNameSurnameRequired": "Ime i prezime je obavezno",
                "userEmailRequired": "E-mail je obavezan i mora biti u odgovarajućem formatu!",
                "userEmailLabel": "E-mail",
                "saveBtnText": "Spremi",
                "backBtnText": "Natrag",
                "userPhoneLabel": "Mobitel",
                "userPhoneRequired": "Broj mobitela je obavezan",
                "saveSuccessNotificationText": "Uspješno ste se registrirali! Za nekoliko sekundi bit će te prebačeni na stranicu za prijavu!",
                "saveFailedNotificationText": "Registracija neuspješna!",
                "backToLoginPage": "Povratak na stranicu za prijavu",
                "backToLoginPage2": "Povratak na stranicu za prijavu",
            },
            en: {
                "oibLabel": "OIB",
                "oibRequired": "OIB is required",
                "oibExists": "Company with inserted OIB exists in system",
                "companyNameLabel": "Company name",
                "companyNameRequired": "Company name is required",
                "companyAddressLabel": "Company address",
                "companyAddressRequired": "Company address is required",
                "companyCountryLabel": "Country",
                "companyCountryRequired": "Country is required",
                "companyCityLabel": "City",
                "companyCityRequired": "City is required",
                "nextBtnText": "Next",
                "companyInfo": "Company info",
                "userInfo": "User data",
                "userNameSurnameLabel": "Name and surname",
                "userNameSurnameRequired": "Name and surname is required",
                "userEmailRequired": "E-mail is required and it must be in appropriate format!",
                "userEmailLabel": "E-mail",
                "saveBtnText": "Save",
                "backBtnText": "Back",
                "userPhoneLabel": "Phone",
                "userPhoneRequired": "Phone number is required",
                "saveSuccessNotificationText": "You have registered successfully! In a few seconds you will be redirected to the login page!",
                "saveFailedNotificationText": "Registration failed!",
                "backToLoginPage": "Back to login page",
                "backToLoginPage2": "Back to login page",
            },
            de: {
                "oibLabel": "OIB",
                "oibRequired": "OIB ist erforderlich",
                "oibExists": "Firma mit eingefügter OIB ist im System vorhanden",
                "companyNameLabel": "Name der Firma",
                "companyAddressLabel": "Firmenanschrift",
                "companyAddressRequired": "nadopuni", //
                "companyCountryLabel": "nadopuni", //
                "companyCityLabel": "nadopuni", //
                "nextBtnText": "Nächste", //
                "companyInfo": "nadopuni", //
                "userInfo": "nadopuni", //
                "userNameSurnameLabel": "Name und Nachname",
                "userNameSurnameLabel": "nadopuniti", //
                "userEmailRequired": "nadopuniti", //
                "userEmailLabel": "E-mail",
                "saveBtnText": "nadopuni", //
                "backBtnText": "Zurück",
                "userPhoneLabel": "Mobiltelefon",
                "userPhoneRequired": "nadopuni", //
                "saveSuccessNotificationText": "nadopuni", //
                "saveFailedNotificationText": "nadopuni", //
                "backToLoginPage": "Zurück zur Login-Seite",
                "backToLoginPage2": "Zurück zur Login-Seite",
            }
        };

        for (var key in dictionaryValues[lang]) {

            if ($("#" + key).length) $("#" + key).text(dictionaryValues[lang][key]);
        }
    }


    function saveData(data) {
        $.ajax({
            url: AppConfig.TravelOrderAPIUrl + '/v1/company/save',
            data: JSON.stringify(data),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                console.log(result);
                alert("Uspjesno poslano");
            },
            error: function () {

                alert("Neuspjesno");
            }
        });
    }

    $(".reg").click(function () {


        registerData.userNameSurname = $('#ime_prezime').val();
        registerData.userEmail = $('#mail').val();
        registerData.userPhone = $('#mobitel').val();
        registerData.host = window.location.host;
        registerData.protocol = window.location.protocol;
        registerData.companyAddress = $('#adresa_tvrtke').val();
        console.log(registerData);
        alert("Saljem podatke na mail");
        saveData(registerData);
    })

    function refreshFormData() {
        $('#companyName').val(registerData.companyName);
        $('#companyAddress').val(registerData.companyAddress);
        $('#companyCountry').val(registerData.companyCountryName);
        $('#companyCity').val(registerData.companyCity);
    }



    function setLoader(set) {
        if (set == true) {
            $(".vh-100").append('<div class="mainSpinner" style="position: fixed; top: 0; left: 0; bottom: 0; right: 0; background: rgba(0,0,0,.3);">'
                + '<div style="width:100%; height: 100%; position: relative;">'
                + '<div class="spinner-border" style="width: 3rem; height: 3rem; position: absolute; left: 50%; top:50%;" role="status">'
                + '</div >'
                + '</div>'
                + '</div>')
        }
        if (set == false) {
            $("div").remove(".mainSpinner");
        }
    }

    return {
        onLoad: onLoad,
    }
}())

