const sadrzaj_graficki = "<div id='svi_grafovi'><div id='chartWebCosts' class='dx-theme-background-color'></div><div id = 'chartWebPaymentType' class='dx-theme-background-color'></div ><div id='chartWebExpenseAccount' class='dx-theme-background-color'></div> <div id='chartWebbySupplier' class='dx-theme-background-color'></div><div id='chartWebbyCountry' class='dx-theme-background-color'></div><div id='chartWebbyCurrency' class='dx-theme-background-color'></div> <div id='chartWebbyUser' class='dx-theme-background-color'></div><div id='chartWebbyVehicle' class='dx-theme-background-color'></div></div>";

var costsByType = function (params) {
    MobCommon.showInitialLoadPanel();
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/web/costs/byType').then(

        function (result) {

            chartCostsByDay = $("#chartWebCosts").dxChart({
                dataSource: _getChartData(result),

                series:
                {

                    argumentField: 'costTypeName',
                    valueField: 'costTotal',
                    name: 'Broj kreiranih radnih naloga',
                    type: 'bar',
                    color: '#607EAA',
                    showInLegend: false
                },

                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: 45
                    }
                },
                title: {
                    text: di('Ukupno prema vrsti'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                legend: {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='amount'><span class='caption'>" + di('Trošak') + "</span>: </div>",
                            "<div class='date'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.amount').append(document.createTextNode(info.value + " " + info.point.data.currency));
                        content.find('.date').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }


    )
    MobCommon.hideInitialLoadPanel();
}

var costsbyPaymentType = function (params) {
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/web/costs/byPaymentType').then(

        function (result) {

            chartCostsByDay = $("#chartWebPaymentType").dxChart({
                dataSource: _getChartData(result),

                series:
                {

                    argumentField: 'paymentName',
                    valueField: 'costTotal',
                    name: 'Broj kreiranih radnih naloga',
                    type: 'bar',
                    color: '#607EAA',
                    showInLegend: false
                },

                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: 45
                    }
                },
                title: {
                    text: di('Ukupno prema načinu plaćanja'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                legend: {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='amount'><span class='caption'>" + di('Trošak') + "</span>: </div>",
                            "<div class='date'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.amount').append(document.createTextNode(info.value + " " + info.point.data.currency));
                        content.find('.date').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )
}

var costsbyExpenseAccount = function (params) {
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/web/costs/byExpenseAccount').then(

        function (result) {
            console.log(result);
            chartCostsByDay = $("#chartWebExpenseAccount").dxChart({
                dataSource: _getChartData(result),

                series:
                {

                    argumentField: 'accountName',
                    valueField: 'accountTotal',
                    name: 'Prema kontu troska',
                    type: 'bar',
                    color: '#5FD068',
                    showInLegend: false
                },

                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: 45
                    }
                },
                title: {
                    text: di('Ukupno prema kontu troška'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                legend: {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='amount'><span class='caption'>" + di('Trošak') + "</span>: </div>",
                            "<div class='date'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.amount').append(document.createTextNode(info.value + " " + info.point.data.currency));
                        content.find('.date').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )
}

var costsBySupplier = function (params) {
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/web/costs/bySupplier').then(

        function (result) {

            chartCostsByDay = $("#chartWebbySupplier").dxChart({
                dataSource: _getChartData(result),

                series:
                {

                    argumentField: 'supplierName',
                    valueField: 'costTotal',
                    name: 'Prema dobavljacu',
                    type: 'bar',
                    color: '#5FD068',
                    showInLegend: false
                },

                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: 45
                    }
                },
                title: {
                    text: di('Ukupno prema dobavljaču'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                legend: {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='amount'><span class='caption'>" + di('Trošak') + "</span>: </div>",
                            "<div class='date'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.amount').append(document.createTextNode(info.value + " " + info.point.data.currency));
                        content.find('.date').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )
}

var costsbyCountry = function (params) {
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/web/costs/byCountry').then(

        function (result) {

            chartCostsByDay = $("#chartWebbyCountry").dxChart({
                dataSource: _getChartData(result),

                series:
                {

                    argumentField: 'countryName',
                    valueField: 'costTotal',
                    name: 'Prema drzavi',
                    type: 'bar',
                    color: '#ffaa66',
                    showInLegend: false
                },

                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: 45
                    }
                },
                title: {
                    text: di('Ukupno prema državi'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                legend: {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='amount'><span class='caption'>" + di('Trošak') + "</span>: </div>",
                            "<div class='date'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.amount').append(document.createTextNode(info.value + " " + info.point.data.currency));
                        content.find('.date').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )
}

var costsbyCurrency = function (params) {
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/web/costs/byCurrency').then(

        function (result) {

            chartCostsByDay = $("#chartWebbyCurrency").dxChart({
                dataSource: _getChartData(result),

                series:
                {

                    argumentField: 'currencyName',
                    valueField: 'currencyTotal',
                    name: 'Prema drzavi',
                    type: 'bar',
                    color: '#ffaa66',
                    showInLegend: false
                },

                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: 45
                    }
                },
                title: {
                    text: di('Ukupno prema valuti'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                legend: {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='amount'><span class='caption'>" + di('Trošak') + "</span>: </div>",
                            "<div class='date'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.amount').append(document.createTextNode(info.value + " " + info.point.data.currency));
                        content.find('.date').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )
}

var costsbyUser = function (params) {
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/web/costs/byUser').then(

        function (result) {
            console.log(result);

            var polje = formatByUser(result);
            console.log(polje);

            console.log(ReduceData(result, "userName"));
            chartCostsByDay = $("#chartWebbyUser").dxChart({
                dataSource: polje,
                commonSeriesSettings: {
                    argumentField: 'userName',
                    type: 'stackedBar',
                },

                series: [
                    { valueField: 'AD blue', name: 'AD blue', },
                    { valueField: 'Cestarina', name: 'Cestarina', },
                    { valueField: 'Gorivo', name: 'Gorivo', },
                    { valueField: 'Ostalo', name: 'Ostalo', },],

                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: 45
                    }
                },
                title: {
                    text: di('Ukupno prema korisniku'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                legend: {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='amount'><span class='caption'>" + di('Trošak') + "</span>: </div>",
                            "<div class='date'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.amount').append(document.createTextNode(info.value + " " + info.point.data.currency));
                        content.find('.date').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )
}

var costsbyVehicle = function (params) {
    callWebApiPost(params, null, AppConfig.TravelOrderAPIUrl + '/v1/web/costs/byVehicle').then(



        function (result) {
            console.log(result);

            var polje = formatByVehicle(result);
            console.log(polje);



            chartCostsByDay = $("#chartWebbyVehicle").dxChart({
                dataSource: polje,
                commonSeriesSettings: {
                    argumentField: 'objectName',
                    type: 'stackedBar',
                },

                series: [
                    { valueField: 'AD blue', name: 'AD blue', },
                    { valueField: 'Cestarina', name: 'Cestarina', },
                    { valueField: 'Gorivo', name: 'Gorivo', },
                    { valueField: 'Ostalo', name: 'Ostalo', },],

                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: 45
                    }
                },
                title: {
                    text: di('Ukupno prema vozilu'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                legend: {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='amount'><span class='caption'>" + di('Trošak') + "</span>: </div>",
                            "<div class='date'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.amount').append(document.createTextNode(info.value + " " + info.point.data.currency));
                        content.find('.date').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )
}

function callCostAPIs(params) {

    costsByType(params);

    costsbyPaymentType(params);

    costsbyExpenseAccount(params);

    costsBySupplier(params);

    costsbyCountry(params);

    costsbyCurrency(params);

    costsbyUser(params);

    costsbyVehicle(params);
}