var vehiclesGrid;
var divUsers;
var costTypesGrid;
var paymentTypesGrid;
getAllUsers = () => {
    MobCommon.showInitialLoadPanel()
    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/user/get/all').then(function (usersData) {

        var divContent = $("<div />").css({ "width": "100%", "height": "100%" }).appendTo($('#content'));
        divUsers = divContent.dxDataGrid({
            dataSource: usersData,

            paging: {
                pageSize: 50,
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 25, 50, 100],
            },
            remoteOperations: false,
            searchPanel: {
                visible: true,
                highlightCaseSensitive: true,
            },
            groupPanel: { visible: true },
            allowColumnReordering: true,
            rowAlternationEnabled: true,
            showBorders: true,
            scrolling: {
                mode: 'virtual',
            },
            columns: [
                {
                    dataField: 'name',
                    caption: 'Korisničko ime',
                    dataType: 'string'
                },

                {
                    dataField: 'extId',
                    caption: 'Vanjski ID',
                    dataType: 'string'
                },


                {
                    dataField: 'phone',
                    caption: 'Telefon',
                    dataType: 'string'
                },
                {
                    dataField: 'profession',
                    caption: 'Profesija',
                    dataType: 'string'
                },

                {
                    dataField: 'position',
                    caption: 'Pozicija',
                    dataType: 'string'
                },

                {
                    dataField: 'isAdmin',
                    caption: 'Administrator sustava',
                    dataType: 'boolean'
                },

                {
                    dataField: 'canSeeAllTraveOrders',
                    caption: 'Pregled svih putnih računa',
                    dataType: 'boolean'
                },
                {
                    caption: "Primarna banka",
                    dataField: "bankName",
                    dataType: "string"
                }
            ]

        }).dxDataGrid("instance");
        MobCommon.hideInitialLoadPanel()

    })

};

getAllVehicles = () => {

    MobCommon.showInitialLoadPanel()
    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/vehicle/get/all').then(function (vehiclesData) {


        var divContent = $("<div />").css({ "width": "100%", "height": "100%" }).appendTo($('#content'));

        vehiclesGrid = divContent.dxDataGrid({
            dataSource: vehiclesData,

            paging: {
                pageSize: 50,
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 25, 50, 100],
            },
            remoteOperations: false,
            searchPanel: {
                visible: true,
                highlightCaseSensitive: true,
            },
            groupPanel: { visible: true },
            allowColumnReordering: true,
            rowAlternationEnabled: true,
            showBorders: true,
            scrolling: {
                mode: 'virtual',
            },
            columns: [
                {
                    dataField: 'makeAndModel',
                    caption: 'Marka i model vozila',
                    dataType: 'string',
                },

                {
                    dataField: 'registration',
                    caption: 'Registracija vozila',
                    dataType: 'string',
                },


                {
                    dataField: 'extId',
                    caption: 'Vanjski ključ',
                    dataType: 'string',
                }
            ]
        }).dxDataGrid("instance");

        MobCommon.hideInitialLoadPanel()
    });
};

getAllCostTypes = () => {
    MobCommon.showInitialLoadPanel()
    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/costs/types').then(function (travelOrderData) {
        console.log(travelOrderData);

        var divContent = $("<div />").css({ "width": "100%", "height": "100%" }).appendTo($('#content'));
        costTypesGrid = divContent.dxDataGrid({
            dataSource: travelOrderData,

            paging: {
                pageSize: 50,
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 25, 50, 100],
            },
            remoteOperations: false,
            searchPanel: {
                visible: true,
                highlightCaseSensitive: true,
            },
            groupPanel: { visible: true },
            allowColumnReordering: true,
            rowAlternationEnabled: true,
            showBorders: true,
            scrolling: {
                mode: 'virtual',
            },
            columns: [
                {
                    dataField: 'name',
                    caption: 'Naziv troška',
                    dataType: 'string',
                    //  groupIndex: 0 ,

                    //alignment: 'right',
                },

                {
                    dataField: 'groupName',
                    caption: 'Grupa',
                    dataType: 'string',
                    groupIndex: 0,

                    //alignment: 'right',
                },




            ]

        }).dxDataGrid("instance");
    });
    MobCommon.hideInitialLoadPanel()
};

getAllPaymentTypes = () => {

    MobCommon.showInitialLoadPanel();
    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/costs/payments').then(function (travelOrderData) {

        console.log(travelOrderData);

        var divContent = $("<div />").css({ "width": "100%", "height": "100%" }).appendTo($('#content'));
        paymentTypesGrid = divContent.dxDataGrid({
            dataSource: travelOrderData,

            paging: {
                pageSize: 50,
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 25, 50, 100],
            },
            remoteOperations: false,
            searchPanel: {
                visible: true,
                highlightCaseSensitive: true,
            },
            groupPanel: { visible: true },
            allowColumnReordering: true,
            rowAlternationEnabled: true,
            showBorders: true,
            scrolling: {
                mode: 'virtual',
            },
            columns: [


                //{
                //    dataField: 'status',
                //    groupIndex: 0,
                //},
                {
                    dataField: 'name',
                    caption: 'Naziv',
                    dataType: 'string',
                    //alignment: 'right',
                },

                {
                    dataField: 'cash',
                    caption: 'Tip',
                    dataType: 'string',

                    customizeText: function (cash) {
                        console.log(cash)
                        return (cash.value ? "Gotovina" : "Ostalo");
                    },
                    //alignment: 'right',

                },


                {
                    dataField: 'personalFunds',
                    caption: 'Na teret',
                    dataType: 'string',
                    //alignment: 'right',

                    customizeText: function (cash) {
                        console.log(cash)
                        return (cash.value ? "Privatne osobe" : "Firme");
                    },
                },



            ]

        }).dxDataGrid("instance");
        MobCommon.hideInitialLoadPanel();
    });

};

getAllCurrencies = () => {
    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/costs/currencies').then(function (travelOrderData) {
        console.log(travelOrderData);

        var divContent = $("<div />").css({ "width": "100%", "height": "100%" }).appendTo($('#content'));
        divContent.dxDataGrid({
            dataSource: travelOrderData,

            paging: {
                pageSize: 50,
            },


            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 25, 50, 100],
            },
            remoteOperations: false,
            searchPanel: {
                visible: true,
                highlightCaseSensitive: true,
            },
            groupPanel: { visible: true },
            allowColumnReordering: true,
            rowAlternationEnabled: true,
            showBorders: true,
            scrolling: {
                mode: 'virtual',
            },
            columns: [

                {
                    dataField: 'name',
                    caption: 'Valuta',
                    dataType: 'string',
                    alignment: 'center',
                    //alignment: 'right',
                },


            ]

        });
    });
};

$(() => {

    var params = {
        datum_od: "20220721000000",
        datum_do: "20220728000000"
    };


    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/web/cost/get/' + params.datum_od + "/" + params.datum_do).then(function (travelOrderData) {


        var divContent = $("<div />").css({ "width": "100%", "height": "100%" }).appendTo($('#content'));
        divContent.dxDataGrid({
            dataSource: travelOrderData,
            //dataSource: {
            //    store: {
            //        type: 'odata',
            //        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
            //        key: 'Id',
            //        beforeSend(request) {
            //            request.params.startDate = '2020-05-10';
            //            request.params.endDate = '2020-05-15';
            //        },
            //    },
            //},
            paging: {
                pageSize: 50,
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 25, 50, 100],
            },
            remoteOperations: false,
            searchPanel: {
                visible: true,
                highlightCaseSensitive: true,
            },
            groupPanel: { visible: true },
            allowColumnReordering: true,
            rowAlternationEnabled: true,
            showBorders: true,
            scrolling: {
                mode: 'virtual',
            },
            columns: [
                {
                    caption: di("Sektor vozila"),
                    dataField: "sector",
                    dataType: "string",
                    groupIndex: 0
                },
                {
                    caption: di("Vozilo"),
                    dataField: "objName",
                    dataType: "string",
                    groupIndex: 1
                },
                {
                    caption: di("ID troška"),
                    dataField: "costId",
                    dataType: "string",
                    allowHeaderFiltering: false
                },
                {
                    caption: di("Datum"),
                    dataField: "costDateTime",
                    name: "dx_ds_datetime_date",
                    dataType: "date",
                    format: "shortDate",
                    allowEditing: false
                },
                {
                    caption: di("Vrijeme"),
                    dataField: "costDateTime",
                    name: "dx_ds_datetime_time",
                    dataType: "date",
                    format: "longTime",
                    allowEditing: false
                },
                {
                    caption: di("Naziv vozila"),
                    dataField: "obj_name",
                    dataType: "string",
                    visible: false
                },
                {
                    caption: di("Korisnik"),
                    dataField: "userName",
                    dataType: "string"
                },
                {
                    caption: di("Tip troška"),
                    dataField: "costTypeName",
                    dataType: "string"
                },
                {
                    caption: di("Proizvod"),
                    dataField: "cpr_name",
                    dataType: "string",
                    visible: false
                },
                {
                    caption: di("Količina"),
                    dataField: "costAmount",
                    dataType: "number",
                    format: {
                        type: "fixedPoint",
                        precision: 2
                    },
                    allowHeaderFiltering: false
                },
                {
                    caption: di("Cijena"),
                    dataField: "costPrice",
                    dataType: "number",
                    format: {
                        type: "fixedPoint",
                        precision: 2
                    },
                    allowHeaderFiltering: false
                },




                {
                    caption: di("Ukupni trošak"),
                    dataField: "costTotal",
                    dataType: "string",
                    allowHeaderFiltering: false,
                    format: {
                        type: "fixedPoint",
                        precision: 2
                    }
                },
                {
                    caption: di("Valuta"),
                    dataField: "currency",
                    dataType: "string"
                },
                {
                    caption: di("Ukupni trošak u lokalnoj valuti"),
                    dataField: "sumInLocal",
                    dataType: "number",
                    format: {
                        type: "fixedPoint",
                        precision: 2
                    },
                    allowHeaderFiltering: false
                },
                {
                    caption: di("Ukupni trošak") + " (EUR)",
                    dataField: "sumInEur",
                    dataType: "number",
                    format: {
                        type: "fixedPoint",
                        precision: 2
                    },
                    allowHeaderFiltering: false
                },
                {
                    caption: di("Način plaćanja"),
                    dataField: "paymentName",
                    dataType: "string"
                },
                {
                    caption: di("Broj računa"),
                    dataField: "costBillNumber",
                    dataType: "string"
                },

                {
                    caption: di("Dan"),
                    dataField: "d",
                    dataType: "string",
                    calculateCellValue: function (options) {
                        return moment(options.dx_ds_datetime, "YYYY/MM/DD HH:mm:ss").format("dddd");
                    },
                    visible: false,
                    allowEditing: false
                },
                {
                    caption: di("Tjedan"),
                    dataField: "w",
                    dataType: "number",
                    calculateCellValue: function (options) {
                        return moment(options.dx_ds_datetime, "YYYY/MM/DD HH:mm:ss").isoWeek();
                    },
                    visible: false,
                    allowEditing: false
                },
                {
                    caption: di("Mjesec"),
                    dataField: "m",
                    dataType: "string",
                    calculateCellValue: function (options) {
                        return moment(options.dx_ds_datetime, "YYYY/MM/DD HH:mm:ss").format("MMMM");
                    },
                    visible: false,
                    allowEditing: false
                },
                {
                    caption: di("Godina"),
                    dataField: "y",
                    dataType: 'number',
                    calculateCellValue: function (options) {
                        return moment(options.dx_ds_datetime, "YYYY/MM/DD HH:mm:ss").year();
                    },
                    visible: false,
                    allowEditing: false
                }

            ],

            summary: {
                totalItems: [
                    {
                        column: "sum_in_local",
                        summaryType: "sum",
                        displayFormat: "{0}",
                        valueFormat: {
                            type: "fixedPoint",
                            precision: 2
                        }
                    },
                    {
                        column: "sum_in_eur",
                        summaryType: "sum",
                        displayFormat: "{0}",
                        valueFormat: {
                            type: "fixedPoint",
                            precision: 2
                        }
                    },
                    {
                        showInColumn: "cst_total",
                        alignByColumn: true,
                        name: 'cst_totalCalculation',
                        summaryType: 'custom',
                        valueFormat: {
                            type: 'fixedPoint',
                            precision: 2
                        },
                        displayFormat: "{0}"
                    },
                ],
                groupItems: [
                    {
                        column: "sum_in_local",
                        alignByColumn: true,
                        summaryType: "sum",
                        valueFormat: {
                            type: 'fixedPoint',
                            precision: 2
                        },
                        displayFormat: "{0}"
                    },
                    {
                        column: "sum_in_eur",
                        alignByColumn: true,
                        summaryType: "sum",
                        valueFormat: {
                            type: 'fixedPoint',
                            precision: 2
                        },
                        displayFormat: "{0}"
                    },
                    {
                        showInColumn: "cst_total",
                        alignByColumn: true,
                        name: 'cst_totalCalculation',
                        summaryType: 'custom',
                        valueFormat: {
                            type: 'fixedPoint',
                            precision: 2
                        },
                        displayFormat: "{0}"
                    },
                ],

            }


        });
    });


});

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

callWebApiDelete = function (relativeUrl, absoluteUrl) {
    var deferred = new $.Deferred();
    $.ajax({
        url: absoluteUrl ? absoluteUrl : (MobAppNamespace.fleetWebApiUrl + relativeUrl) + ((MobAppNamespace.fleetWebApiUrl + relativeUrl).includes("?") ? "&" : "?") + "com_id=" + MobAppNamespace.currentUser.mainData.comId + "&usr_id=" + MobAppNamespace.currentUser.mainData.usrId,
        headers: {
            "Authorization": "Bearer " + sess_key
        },
        type: "DELETE",
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

callWebApiPut = function (relativeUrl, absoluteUrl, data) {
    var deferred = new $.Deferred();

    $.ajax({
        url: absoluteUrl ? absoluteUrl : (MobAppNamespace.fleetWebApiUrl + relativeUrl) + "?com_id=" + MobAppNamespace.currentUser.mainData.comId + "&usr_id=" + MobAppNamespace.currentUser.mainData.usrId,
        headers: {
            "Authorization": "Bearer " + sess_key
        },
        data: data ? JSON.stringify(data) : null,
        type: "PUT",
        //dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (result, textStatus, xhr) {

            deferred.resolve(result);
        },
        error: function (xhr, textStatus, error) {


            deferred.reject(xhr);
        }
    });
    return deferred;
}






