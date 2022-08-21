function CreateDashboardGraphs() {

    MobCommon.showInitialLoadPanel();

    function _getChartData(result) {
        arr = [];
        let dateString = "";
        result.forEach((a, index, array) => {
            var tt = new moment(a.date);
            dateString = tt.format("L");
            array[index].dateString = dateString;
            if (a.wageCost == 1) {
                array[index].wage1 = a.amount;
            }
            if (a.wageCost == 0) {
                array[index].wage0 = a.amount
            }
        });
        return result;
    }

    function _getResults(result) {
        arr = [];
        result.forEach((a, index, array) => {
            if (a.fullWages != 0) {
                array[index].argument = a.country;
                array[index].image = "/PIC/FLAGS/4x3/" + a.iso2code.toLowerCase() + ".svg";
                array[index].data = $.extend({}, array.filter((d) => d.country === a.argument)[0]);
                arr.push(a);
            }
        });
        return arr;
    }

    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/dashboard/costs/byday').then(


        function (result) {


            chartCostsByDay = $("#chart").dxChart({
                dataSource: _getChartData(result),
                commonSeriesSettings: {
                    argumentField: 'dateString',
                    type: 'bar',
                    hoverMode: 'allArgumentPoints',
                    selectionMode: 'allArgumentPoints',
                    label: {
                        visible: false,
                    },
                },
                series: [
                    { valueField: 'wage0', name: di('Ostali troškovi') },
                    { valueField: 'wage1', name: di('Trošak dnevnice') }
                ],
                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: result.length > 10 && result.length < 20 ? 45 : 90
                    }
                },
                title: {
                    text: di('Troškovi po danu (u lokalnoj valuti)'),
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

            MobCommon.hideInitialLoadPanel();
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )

    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/dashboard/wages/bycountry').then(
        function (result) {
            var flagArray = [];
            pieChart = $("#pie").dxPieChart({

                /*size: { height: 400, width: 700 }*/
                palette: 'Pastel',
                dataSource: _getResults(result),
                legend: {
                    visible: false
                },
                resolveLabelOverlapping: 'shift',
                series: [{
                    argumentField: 'country',
                    valueField: 'fullWages',
                    label: {
                        customizeText: function (arg) {
                            if (arg.point.data.fullWages) {
                                var isInArray = flagArray.findIndex(function (element) {
                                    return element.country == arg.point.data.country;
                                });
                                if (isInArray === -1) {
                                    flagArray.push(arg.point.data);
                                }
                                return "           (" + arg.point.data.fullWages + "/" + arg.point.data.halfWages + ")"; //razmak je potreban jer se tu pozicionira zastavica
                            }
                        },
                        connector: {
                            visible: true,
                            width: 0.2,
                        },
                        position: 'outside',
                        visible: true,
                    },
                }],
                title: {
                    text: di('Ukupni broj dnevnica/poludnevnica po državi u proteklih 30 dana'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
            }).dxPieChart('instance');
            MobCommon.hideInitialLoadPanel();


            for (var i = 0; i < $(".dxc-labels-group").children().children().children('g').length; i++) {
                $(document.createElementNS('http://www.w3.org/2000/svg', 'image'))
                    .attr('width', 30)
                    .attr('height', $(".dxc-labels-group").children().children().children('g').children('rect')[0].height.baseVal.value)
                    .attr('href', flagArray[i].image)
                    .attr('x', $(".dxc-labels-group").children().children().children('g').children('rect')[0].x.baseVal.value)
                    .attr('y', $(".dxc-labels-group").children().children().children('g').children('rect')[0].y.baseVal.value)
                    .attr('id', flagArray[i].iso2code)
                    .appendTo($(".dxc-labels-group").children().children().children('g')[i]);

            }
        },

        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )


    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/dashboard/orders/numday').then(
        function (result) {
            chartNumDay = $("#chart2").dxChart({
                dataSource: _getChartData(result),
                series: {
                    argumentField: 'dateString',
                    valueField: 'count',
                    name: 'Broj kreiranih radnih naloga',
                    type: 'bar',
                    color: '#ffaa66',
                    showInLegend: false
                },
                argumentAxis: {
                    label: {
                        displayMode: result.length < 10 ? "stagger" : "rotate",
                        overlappingBehaviour: result.length < 10 ? "stagger" : "rotate",
                        rotationAngle: result.length > 10 && result.length < 20 ? 45 : 90
                    }
                },
                title: {
                    text: di("Broj kreiranih putnih računa u posljednjih 30 dana"),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                valueAxis: {
                    tickInterval: 1
                },
                tooltip: {
                    enabled: true,
                    location: 'edge',
                    contentTemplate(info, container) {

                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='numMonth'><span class='caption'>" + di('Broj putnih račun') + "</span>: </div>",
                            "<div class='month'><span class='caption'>" + di('Datum') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.numMonth').append(document.createTextNode(info.value));
                        content.find('.month').append(document.createTextNode(info.argument));

                        content.appendTo(container);
                    },
                },
            }).dxChart('instance');
            MobCommon.hideInitialLoadPanel();
        },
        function (error) {
            MobDX.uiNotifyServerConnectionLost();
        }
    )

    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/dashboard/orders/nummonth').then(
        function (result) {
            chartNumMonth = $("#chart3").dxChart({
                /*size: { height: 400, width: 700 }*/
                dataSource: result,
                title: {
                    text: di('Kreirani putni računi u zadnjih šest mjeseci'),
                    font: {
                        size: 14,
                        color: '#000000',
                        weight: 600,
                    },
                },
                series: {
                    valueField: 'count',
                    argumentField: 'date',

                },
                legend: {
                    visible: false,
                },
                argumentAxis: {
                    label: {
                        customizeText: function () {
                            var tt = new moment(this.value);
                            return tt.format('MM. yyyy.');
                        }
                    }
                },
                valueAxis: {
                    position: 'right',
                    tickInterval: 5,
                },
                tooltip: {
                    enabled: true,
                    contentTemplate(info, container) {
                        var tt = new moment(info.argument);
                        month = tt.format('MMMM');
                        const contentItems = ["<div class='numMonthTooltip'>",
                            "<div class='numMonth'><span class='caption'>" + di('Broj putnih računa') + "</span>: </div>",
                            "<div class='month'><span class='caption'>" + di('Mjesec') + "</span>: </div>",
                            "</div>"];

                        const content = $(contentItems.join(''));

                        content.find('.numMonth').append(document.createTextNode(info.value));
                        content.find('.month').append(document.createTextNode(month));

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