var usersPopup = function () {
    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/user/banks').then(function (banksData) {

        const popupContentTemplate = function () {
            return formDiv;
        };
        const formDiv = $('<div></div>');

        formData = {
            name: '',
            email: '',
            phone: '',
            extId: '',
            profession: '',
            position: '',
            bankId: '',
            isAdmin: '',
            canSeeAllTraveOrders: '',
            createUserAcc: '',
        }

        var formUsers = formDiv.dxForm({
            formData: formData,

            items: [
                {
                    label: {
                        text: "Ime i prezime"
                    },
                    dataField: "name",
                    editorType: "dxTextBox",
                    validationRules: [{
                        type: "required",
                        message: "Unesite ime i prezime"
                    }],
                },
                {
                    label: {
                        text: "E-mail"
                    },
                    dataField: "email",
                    editorType: "dxTextBox"
                },
                {
                    label: {
                        text: "Telefon"
                    },
                    dataField: "phone",
                    editorType: "dxTextBox"
                },
                {
                    label: {
                        text: "Vanjski ID"
                    },
                    dataField: "extId",
                    editorType: "dxTextBox",


                },
                {
                    label: {
                        text: "Profesija"
                    },
                    dataField: "profession",
                    editorType: "dxTextBox"

                },
                {
                    label: {
                        text: "Pozicija"
                    },
                    dataField: "position",
                    editorType: "dxTextBox"
                },
                {
                    label: {
                        text: "Primarna banka"
                    },
                    dataField: "bankId",
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: banksData,
                        displayExpr: "name",
                        valueExpr: "id"
                    },
                    validationRules: [{
                        type: "required",
                        message: "Unesite primarnu banku!!"
                    }],
                },
                {
                    label: {
                        visible: false
                    },
                    dataField: "isAdmin",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "Administrator sustava"
                    }
                },
                {
                    label: {
                        visible: false
                    },
                    dataField: "canSeeAllTraveOrders",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "Pregled svih putnih računa"
                    }
                },
                {
                    label: {
                        visible: false
                    },
                    dataField: "createUserAcc",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "Kreiraj korisnički račun"
                    }
                },
            ]


        }).dxForm("instance");


        let userPopupDiv = $("<div>").appendTo($('#content'));
        const popup = userPopupDiv.dxPopup({
            contentTemplate: popupContentTemplate,
            width: 450,
            height: 500,
            showTitle: true,
            title: 'Unos novog korisnika',
            visible: true,
            dragEnabled: false,
            hideOnOutsideClick: true,
            showCloseButton: false,
            position: {
                at: 'center',
                my: 'center',
            },
            toolbarItems: [
                {
                    widget: 'dxButton',
                    toolbar: 'bottom',
                    location: 'before',
                    options: {
                        icon: 'email',
                        text: 'Unesi korisnika',
                        position: { my: 'center top', at: 'center top' },
                        onClick() {
                            var valid = formUsers.validate();
                            if (valid.isValid) {
                                console.log(formData);


                                callWebApiPost(formData, null, AppConfig.TravelOrderAPIUrl + '/v1/user/create').then(function (travelOrderData) {
                                    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/user/get/all').then(function (vehicleData) {
                                        divUsers.option("dataSource", vehicleData);
                                        divUsers.refresh();
                                    });
                                });
                                popup.hide();
                            }
                        }
                    }
                },
                {
                    widget: 'dxButton',
                    toolbar: 'bottom',
                    location: 'after',
                    options: {
                        text: 'Odustani',
                        onClick() {
                            popup.hide();
                        },

                        elementAttr: { class: 'sakri', id: 'gumb_unos2' }
                    }
                }
            ]
        }).dxPopup('instance');
    });
}

var groupsPopup = function () {


    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/costs/types/groups').then(function (costsData) {

        console.log(costsData);
        const popupContentTemplate = function () {
            return formDiv;
        };
        const formDiv = $('<div></div>');

        formData = {
            name: '',
            groupId: '',
        }
        var formTypes = formDiv.dxForm({
            formData: formData,

            items: [
                {
                    label: {
                        text: "Naziv"
                    },
                    dataField: "name",
                    editorType: "dxTextBox",
                    validationRules: [{
                        type: "required",
                        message: "Unesite naziv"
                    }],
                },
                {
                    label: {
                        text: "Oznaka grupe"
                    },
                    dataField: "groupId",
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: costsData,
                        displayExpr: "groupName",
                        valueExpr: "groupId"
                    }
                },

            ]
        }).dxForm("instance");

        let CostsPopupDiv = $("<div>").appendTo($('#content'));
        const popup = CostsPopupDiv.dxPopup({
            contentTemplate: popupContentTemplate,
            width: 300,
            height: 200,
            showTitle: true,
            title: 'Unos nove vrste troška',
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
                    text: 'Unesi vrstu troška',
                    position: { my: 'center top', at: 'center top' },
                    onClick() {

                        var valid = formTypes.validate();

                        if (valid.isValid) {

                            console.log(formData);
                            callWebApiPost(formData, null, AppConfig.TravelOrderAPIUrl + '/v1/costs/types/create').then(function () {
                                callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/costs/types').then(function (costsData) {
                                    costTypesGrid.option("dataSource", costsData);
                                    costTypesGrid.refresh();
                                });
                            });
                            popup.hide();
                        }
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
    });
}

var vehiclePopup = function () {
    const popupContentTemplate = function () {
        return formDiv;
    };
    const formDiv = $('<div></div>');

    formData = {
        registration: '',
        makeAndModel: '',
        extId: ''
    }
    var formVehicle = formDiv.dxForm({
        formData: formData,

        items: [
            {
                label: {
                    text: "Registracija"
                },
                dataField: "registration",
                editorType: "dxTextBox",
                validationRules: [{
                    type: "required",
                    message: "Unesite registraciju!!"
                }],
            },
            {
                label: {
                    text: "Marka"
                },
                dataField: "makeAndModel",
                editorType: "dxTextBox"
            },
            {
                label: {
                    text: "Vanjski sustav"
                },
                dataField: "extId",
                editorType: "dxTextBox"
            }
        ]
    }).dxForm("instance");

    let vehiclePopupDiv = $("<div>").appendTo($('#content'));
    const popup = vehiclePopupDiv.dxPopup({
        contentTemplate: popupContentTemplate,
        width: 300,
        height: 280,
        showTitle: true,
        title: 'Unos novog vozila',
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
                text: 'Unesi vozilo',
                position: { my: 'center top', at: 'center top' },
                onClick() {
                    var validirano = formVehicle.validate();
                    console.log(formData);

                    if (validirano.isValid) {
                        callWebApiPost(formData, null, AppConfig.TravelOrderAPIUrl + '/v1/vehicle/create').then(function () {
                            callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/vehicle/get/all').then(function (vehicleData) {


                                if (vehiclesGrid) {
                                    vehiclesGrid.option("dataSource", vehicleData);
                                    vehiclesGrid.refresh();
                                }
                            });
                        });
                        popup.hide();
                    }

                    else { }

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
}

var paymentTypePopup = function () {

    const popupContentTemplate = function () {
        return formDiv;
    };
    const formDiv = $('<div></div>');

    formData = {
        name: '',
        cash: '',
        personalFunds: '',
    }
    var form = formDiv.dxForm({
        formData: formData,

        items: [
            {
                label: {
                    text: "Naziv"
                },
                dataField: "name",
                editorType: "dxTextBox",
                validationRules: [{
                    type: "required",
                    message: "Unesite naziv!!"
                }],
            },

            {
                label: {
                    text: "Tip"
                },
                dataField: "cash",
                editorType: "dxRadioGroup",
                editorOptions: {
                    valueExpr: 'value',
                    displayExpr: 'name',
                    items: [
                        {
                            value: true,
                            name: "Gotovina"
                        },
                        {
                            value: false,
                            name: "Ostalo"
                        }
                    ]
                }



            },
            {
                label: {
                    text: "Na teret"
                },
                dataField: "personalFunds",
                editorType: "dxSelectBox",
                editorOptions: {
                    valueExpr: 'value',
                    displayExpr: 'name',
                    dataSource: [
                        {
                            value: false,
                            name: "Firma"
                        },
                        {
                            value: true,
                            name: "Privatne osobe"
                        }
                    ]
                }
            },

        ]
    }).dxForm("instance");

    let CostsPopupDiv = $("<div>").appendTo($('#content'));
    const popup = CostsPopupDiv.dxPopup({
        contentTemplate: popupContentTemplate,
        width: 300,
        height: 300,
        showTitle: true,
        title: 'Unos nove vrste plaćanja',
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
                text: 'Unesi vrstu plaćanja',
                position: { my: 'center top', at: 'center top' },
                onClick() {
                    var validirano = form.validate();
                    if (validirano.isValid) {
                        console.log(formData);
                        callWebApiPost(formData, null, AppConfig.TravelOrderAPIUrl + '/v1/costs/payments/create').then(function () {
                            callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/costs/payments').then(function (costsData) {
                                paymentTypesGrid.option("dataSource", costsData);
                                paymentTypesGrid.refresh();
                            });
                        });
                        popup.hide();
                    }

                    else { }
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

}


var TravelOrderPopup = function () {

    // callWebApiPut(null, AppConfig.TravelOrderAPIUrl + '/v1/web/travelorder/settings/update').then(function (usersData) {

    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/user/get/all').then(function (usersData) {

        console.log(usersData);
        const popupContentTemplate = function () {
            return form;
        };
        const formDiv = $('<div></div>');

        formData = {
            cashier: '',
            liquidator: '',
            authorizedPerson: '',
            advancedPayout: '',
            notSendEmail: '',
            payBackTo: '',
            fuelOnTravelOrder: '',
            notCalculateHalfWages: '',
            showBorderCrossings: '',
            showListOfDrives: '',
            showDetailWageCalculation: '',


        }
        var form = formDiv.dxForm({
            formData: formData,

            items: [
                {
                    label: {
                        text: "Ovlaštena osoba"
                    },
                    dataField: "cashier",
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: usersData,
                        displayExpr: "name",
                        valueExpr: "id"
                    }
                },
                {
                    label: {
                        text: "Likvidator"
                    },
                    dataField: "liquidator",
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: usersData,
                        displayExpr: "name",
                        valueExpr: "id"
                    }
                },
                {
                    label: {
                        text: "Blagajnik"
                    },
                    dataField: "authorizedPerson",
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: usersData,
                        displayExpr: "name",
                        valueExpr: "id"
                    }
                },
                {
                    label: {
                        visible: false
                    },
                    dataField: "advancedPayout",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "Dnevnice i troškovi po kilometru NE pribrajaju se ukupnoj sumi za isplatu"
                    }
                },
                {
                    label: {
                        visible: false
                    },
                    dataField: "notSendEmail",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "NE šalji mail prilikom kreiranja / promjene statusa putnog računa"
                    }
                },
                {
                    label: {
                        visible: false
                    },
                    dataField: "payBackTo",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "Postavi VRAĆENO na iznos za isplatu / vraćanje u statusu zatvoreno / proknjiženo"
                    }
                },

                {
                    label: {
                        visible: false
                    },
                    dataField: "showBorderCrossings",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "Ispis prelazaka granica"
                    }
                },
                {
                    label: {
                        visible: false
                    },
                    dataField: "showListOfDrives",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "Ispis popisa vožnji"
                    }
                },
                {
                    label: {
                        visible: false
                    },
                    dataField: "showDetailWageCalculation",
                    editorType: "dxCheckBox",
                    editorOptions: {
                        text: "Ispis detaljnog obračuna dnevnica"
                    }
                },
            ]
        });

        var popupClosed = false;
        let vehiclePopupDiv = $("<div id='settingsPopup'>").appendTo($('#content'));
        const popup = vehiclePopupDiv.dxPopup({
            contentTemplate: popupContentTemplate,
            width: 500,
            height: 500,
            showTitle: true,
            title: 'Podaci za putni račun',
            visible: true,
            dragEnabled: false,
            hideOnOutsideClick: false,
            showCloseButton: true,
            onHiding: function (e) {
                if (!popupClosed) {
                    e.cancel = true;
                    var result = Swal.fire({
                        title: 'Jeste li sigurni da želite zatvoriti prozor bez spremanja?',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: 'DA',
                        denyButtonText: `NE`,
                        toast: true,
                    });
                    result.then((result) => {
                        if (result) {
                            popupClosed = true;
                            $("#settingsPopup").dxPopup('instance').hide();
                            $("#settingsPopup").dxPopup('instance').dispose();
                        }
                        else popupClosed = false;
                    });
                }
            },
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
                    text: 'Unesi podatke za putni račun',
                    position: { my: 'center top', at: 'center top' },
                    onClick() {

                        callWebApiPost(formData, null, AppConfig.TravelOrderAPIUrl + '/v1/vehicle/create').then(function () {
                            callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/vehicle/get/all').then(function (vehicleData) {
                                $("#content").dxDataGrid("instance").option("dataSource", vehicleData);
                                $("#content").dxDataGrid("instance").refresh();
                            });
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

    });
}