
var datum_from = moment().add(-90, 'days').toDate();
var datum_to = new Date();



$(() => {
    const now = new Date();
    $('#date').dxDateBox({
        type: 'date',
        value: datum_from,
        onValueChanged: function (e) {
            datum_from = e.value;
        },
    });
})

$(() => {
    const now = new Date();
    $('#date2').dxDateBox({
        type: 'date',
        value: datum_to,
        onValueChanged: function (e) {
            datum_to = e.value;
        },
    });
})


var vehicleGrid;
$('.btn-api-create').dxButton({
    stylingMode: 'contained',
    text: 'Contained',
    type: 'default',
    width: 120,
    height: 60,
    onClick: function () {
        const formDiv = $('<div></div>');
        const popupContentTemplate = function () {
            return form;
        };

        formData = {
            // usr_id: '',
            usr_login: '',
            // usr_password: ''
        }
        var form = formDiv.dxForm({
            formData: formData,
            //form.option(formData.usr_login)
            items: [
                {
                    label: {
                        text: "Korisničko ime"
                    },
                    dataField: "usr_login",
                    editorType: "dxTextBox"
                },


            ]
        });

        let vehiclePopupDiv = $("<div>").appendTo($('#APImain'));

        //var apiName = form.option(formData.usr_login);
        const popup = vehiclePopupDiv.dxPopup({
            contentTemplate: popupContentTemplate,
            width: 300,
            height: 150,
            showTitle: true,
            title: 'Unos novog API računa',
            visible: true,
            dragEnabled: false,
            hideOnOutsideClick: true,
            showCloseButton: false,
            position: {
                at: 'center',
                my: 'center',
            },
            toolbarItems: [{
                widget: 'dxButton',
                toolbar: 'bottom',
                location: 'before',
                options: {
                    icon: 'email',
                    text: 'Unesi račun',
                    position: { my: 'center top', at: 'center top' },
                    onClick() {


                        var apiName = formData.usr_login;
                        console.log(formData);
                        callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/web/api/createAccount/' + apiName).then(function (resultData) {
                            //$("#APImain").empty();
                            getAllAPIAccounts(resultData);
                            //callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/web/api/get/apiAccounts/').then(function (vehicleData) {
                            //    $("#APImain").dxDataGrid("instance").option("dataSource", vehicleData);
                            //    $("#APImain").dxDataGrid("instance").refresh();
                            //});
                        });
                        popup.hide();
                    }
                },
            }, {
                widget: 'dxButton',
                toolbar: 'bottom',
                location: 'after',
                options: {
                    text: 'Odustani',
                    onClick() {
                        popup.hide();
                    },

                    elementAttr: { class: 'sakri', id: 'gumb_unos' }
                },
            }],
        }).dxPopup('instance');
    },


});

$('#default-outlined').dxButton({
    stylingMode: 'outlined',
    text: 'Outlined',
    type: 'default',
    width: 120,
    onClick() {
        DevExpress.ui.notify('Gumb za formu');
    },
});

var sess_key = '';

/*var datum_from = 'Thu Feb 10 2022 10:25:40 GMT+0200';
var datum_to = 'Sun Jul 31 2022 10:25:40 GMT+0200';
*/

function init() {

    var lang = "hr";
    DevExpress.localization.locale(lang == "en" ? "en-GB" : lang);
    moment.locale(lang == "en" ? "en-gb" : lang);

    if (sessionStorage.getItem("user")) {
        sess_key = JSON.parse(sessionStorage.getItem("user")).SessionKey;
    }
    else {
        window.open("Login.cshtml", '_self', 'location=0');
    }





    $('#content').html(sadrzaj);

    CreateDashboardGraphs();

}



const sadrzaj = `

<div class='grid_container'>


<div class='spremnik1 '>
<div id="chart" class='grid_item gr1'></div>

</div>


<div class='spremnik2'>
<div id="pie" class='grid_item gr2'></div>

</div>

<div class='spremnik3'>

<div id="chart2" class='grid_item gr3'></div>

</div>

<div class='spremnik4'>

<div id="chart3" class='grid_item gr4'></div>




</div>`   ;


callWebApiGet = function (relativeUrl, absoluteUrl) {
    var deferred = new $.Deferred();
    $.ajax({
        url: absoluteUrl,
        headers: {
            "Authorization": "Bearer " + sess_key
        },
        type: "GET",
        //dataType: "json",
        success: function (result) {
            deferred.resolve(result);
        },
        error: function (error) {
            deferred.reject(error);
        }
    });
    return deferred;
}

callWebApiPost = function (params, relativeUrl, absoluteUrl) {
    var deferred = new $.Deferred();
    $.ajax({
        url: absoluteUrl,
        headers: {
            "Authorization": "Bearer " + sess_key
        },
        data: params ? JSON.stringify(params) : null,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            deferred.resolve(result);
        },
        error: function (error) {
            deferred.reject(error);
        }
    });
    return deferred;
}


const overlappingModes = ['stagger', 'rotate', 'hide', 'none'];


function di(txt) {
    return txt;
}


/*const discountCellTemplate = function (container, options) {
    $('<div/>').dxBullet({
        onIncidentOccurred: null,
        size: {
            width: 150,
            height: 35,
        },
        margin: {
            top: 5,
            bottom: 0,
            left: 5,
        },
        showTarget: false,
        showZeroLevel: true,
        value: options.value * 100,
        startScaleValue: 0,
        endScaleValue: 100,
        tooltip: {
            enabled: true,
            font: {
                size: 18,
            },
            paddingTopBottom: 2,
            customizeTooltip() {
                return { text: options.text };
            },
            zIndex: 5,
        },
    }).appendTo(container);
};*/

let collapsed = false;
