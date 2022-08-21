var datum_from = 'Thu Feb 10 2022 10:25:40 GMT+0200';
var datum_to = 'Sun Jan 31 2022 10:25:40 GMT+0200';

var putni_racuni = null;

$(() => {
    const now = new Date();
    $('#date').dxDateBox({
        type: 'date',
        value: now,
        onValueChanged: function (e) {
            datum_from = e.value;
        },
    });
})

$(() => {
    const now = new Date();
    $('#date2').dxDateBox({
        type: 'date',
        value: now,
        onValueChanged: function (e) {
            datum_to = e.value;
        },
    });
})


changeDate = () => {
    /*  let params = {
          timeFrom: datum_from,
          timeTo: datum_to,
          status: 13
      };*/

    let params = {
        timeFrom: "2021-01-07T00:00:00.000Z",
        timeTo: "2022-07-19T07:00:00.000Z",
        status: 13
    };
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/travelorder/get/all').then(function (travelOrderData) {

        // MobCommon.showInitialLoadPanel();

        console.log(travelOrderData);

        $("#content").empty();
        MobCommon.hideInitialLoadPanel();
        $('#content').dxDataGrid({
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
                    dataField: 'status',
                    groupIndex: 0,
                },
                {
                    dataField: 'travelOrderNumber',
                    caption: 'Br. putnog računa',
                    dataType: 'string',
                    //alignment: 'right',
                },

                {
                    dataField: 'userName',
                    caption: 'Korisnik',
                    dataType: 'string',
                    //alignment: 'right',
                },


                {
                    dataField: 'from',
                    name: "fromData",
                    caption: 'Datum od',
                    dataType: 'date',
                    format: "shortDate"
                },
                {
                    dataField: 'from',
                    name: "fromTime",
                    caption: 'Vrijeme od',
                    dataType: 'datetime',
                    format: "shortTime"
                },


                {
                    dataField: 'to',
                    caption: 'Datum do',
                    dataType: 'date',
                    //alignment: 'right',
                },

                {
                    dataField: 'to',
                    name: "toTime",
                    caption: 'Vrijeme do',
                    dataType: 'datetime',
                    format: "shortTime"
                },
                {
                    dataField: 'vehicleName',
                    caption: 'Vozilo',
                    dataType: 'string',
                    //alignment: 'right',
                },
                {
                    dataField: 'traOrdDestination',
                    caption: 'Odredište',
                    dataType: 'string',
                    //alignment: 'right',
                },
                {
                    dataField: 'xyz',
                    caption: 'Akontacija',
                    dataType: 'number',
                    value: 0,
                    //alignment: 'right',
                },
                {
                    dataField: 'totalCost',
                    caption: 'Ukupni trošak',
                    dataType: 'number',

                    format: {
                        type: "fixedPoint",
                        precision: 2
                    }
                    //alignment: 'right',
                },
                {
                    dataField: 'totalPayAmount',
                    caption: 'Trošak za isplatu',
                    dataType: 'number',

                    format: {
                        type: "fixedPoint",
                        precision: 2
                    }
                    //alignment: 'right',
                },
                {
                    dataField: 'travelPurpose',
                    caption: 'Svrha putovanja',
                    dataType: 'string',
                    //alignment: 'right',
                },


            ]



        });
        alert("Skrivam loader");

    });

};

changeDatePutni = (refreshDataSource) => {


    let params = {
        timeFrom: moment(datum_from).format('YYYY-MM-DD hh:mm:ss'),
        timeTo: moment(datum_to).format('YYYY-MM-DD hh:mm:ss'),
        status: 13
    };
    MobCommon.showInitialLoadPanel();


    var divContent = $("<div />").css({ "width": "100%", "height": "100%" }).appendTo($('#content'));

    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/travelorder/get/all').then(function (travelOrderData) {

        MobCommon.hideInitialLoadPanel();

        if (refreshDataSource) {
            putni_racuni.option("dataSource", travelOrderData);
            putni_racuni.refresh();

        }
        else {
            MobCommon.hideInitialLoadPanel();
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
                        dataField: 'status',
                        groupIndex: 0,
                    },
                    {
                        dataField: 'travelOrderNumber',
                        caption: 'Br. putnog računa',
                        dataType: 'string',
                        //alignment: 'right',
                    },

                    {
                        dataField: 'userName',
                        caption: 'Korisnik',
                        dataType: 'string',
                        //alignment: 'right',
                    },


                    {
                        dataField: 'from',
                        name: "fromData",
                        caption: 'Datum od',
                        dataType: 'date',
                        format: "shortDate"
                    },
                    {
                        dataField: 'from',
                        name: "fromTime",
                        caption: 'Vrijeme od',
                        dataType: 'datetime',
                        format: "shortTime"
                    },


                    {
                        dataField: 'to',
                        caption: 'Datum do',
                        dataType: 'date',
                        //alignment: 'right',
                    },

                    {
                        dataField: 'to',
                        name: "toTime",
                        caption: 'Vrijeme do',
                        dataType: 'datetime',
                        format: "shortTime"
                    },
                    {
                        dataField: 'vehicleName',
                        caption: 'Vozilo',
                        dataType: 'string',
                        //alignment: 'right',
                    },
                    {
                        dataField: 'traOrdDestination',
                        caption: 'Odredište',
                        dataType: 'string',
                        //alignment: 'right',
                    },
                    {
                        dataField: 'xyz',
                        caption: 'Akontacija',
                        dataType: 'number',
                        value: 0,
                        //alignment: 'right',
                    },
                    {
                        dataField: 'totalCost',
                        caption: 'Ukupni trošak',
                        dataType: 'number',

                        format: {
                            type: "fixedPoint",
                            precision: 2
                        }
                        //alignment: 'right',
                    },
                    {
                        dataField: 'totalPayAmount',
                        caption: 'Trošak za isplatu',
                        dataType: 'number',

                        format: {
                            type: "fixedPoint",
                            precision: 2
                        }
                        //alignment: 'right',
                    },
                    {
                        dataField: 'travelPurpose',
                        caption: 'Svrha putovanja',
                        dataType: 'string',
                        //alignment: 'right',
                    },


                ]




            });


            putni_racuni = divContent.dxDataGrid("instance");

        }


    });


};



changeDateCostsOnLoad = () => {
    MobCommon.showInitialLoadPanel();

    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/web/cost/get/' + '20210721000000' + '/' + '20220728000000').then(function (travelOrderData) {
        MobCommon.hideInitialLoadPanel();
        console.log(travelOrderData);
        $('#content').dxDataGrid({
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

        });
        // MobCommon.hideInitialLoadPanel();
    });
};


changeDateCosts = () => {
    MobCommon.showInitialLoadPanel();
    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/web/cost/get/' + moment(datum_from).format('YYYYMMDDhhmmss') + '/' + moment(datum_to).format('YYYYMMDDhhmmss')).then(function (travelOrderData) {
        console.log(travelOrderData);
        MobCommon.hideInitialLoadPanel();
        $('#content').dxDataGrid({
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

        });
    });
};

