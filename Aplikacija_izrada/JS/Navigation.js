const navigation = [
    { id: 1, text: 'Kreiraj putni račun', icon: 'far fa-pen' },
    { id: 2, text: 'Nadzorna ploča', icon: 'far fa-analytics' },
    { id: 3, text: 'Popis putnih računa', icon: 'far fa-th-list', onClickFunc: function () { changeDatePutni(); } },
    {
        id: 4, text: 'Postavke', icon: 'far fa-cog',
        items: [
            {
                id: 41, text: 'Podaci za putni račun', icon: 'far fa-cog', parentId: 4, onClickFunc: function () {
                    TravelOrderPopup();
                }
            },
            {
                id: 42, text: 'Popis svih vozila', icon: 'dx-icon dx-icon-car', parentId: 4, onClickFunc: function (



                ) { getAllVehicles() }
            },
            { id: 43, text: 'Popis svih korisnika', icon: 'dx-icon dx-icon-user', parentId: 4, onClickFunc: function () { getAllUsers() } },
            { id: 44, text: 'Popis svih vrsta troškova', icon: 'dx-icon far fa-dollar-sign', parentId: 4, onClickFunc: function () { getAllCostTypes() } },
            { id: 45, text: 'Popis svih vrsta plaćanja', icon: 'dx-icon far fa-file-invoice-dollar', parentId: 4, onClickFunc: function () { getAllPaymentTypes() } },
            { id: 46, text: 'Popis svih valuta', icon: 'dx-icon far fa-euro-sign', parentId: 4, onClickFunc: function () { getAllCurrencies() } },
        ], onClickFunc: function () { }
    },
    {
        id: 5, text: 'Troškovi', icon: 'far fa-dollar-sign', onClickFunc: function () { changeDateCostsOnLoad(); },
        items: [
            {
                id: 51, text: 'Grafički prikaz troškova', icon: 'fas fa-chart-column', parentId: 5, onClickFunc: function () {


                    var params = {

                        dateFrom: moment(datum_from).format("YYYYMMDDhhmmss"),
                        dateTo: moment(datum_to).format("YYYYMMDDhhmmss"),
                        num: 1

                    };
                    callCostAPIs(params);
                }
            }],



    },
    {
        id: 6, text: 'API', icon: 'far fa-chart-network', onClickFunc: function () {
            getAllAPIAccounts()

        }
    },
    {
        id: 7, text: 'Poslovni plan', icon: 'fa-solid fa-briefcase-blank', onClickFunc: function () {
            // getAllPlans()

            callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/pricePlan/currentPlan').then(function (resultData) {
                /*  var polje = $("#nesto").dxTreeView('instance').option('dataSource')
                  for (let i = 0; i <= polje.length; i++) {
                      if (polje[i].id == 5) {
                          polje[i].visible = false
                          $("#nesto").dxTreeView('instance').repaint();
                      }
  
  
                  }*/
                getAllPlans();

            });
        }
    },
    { id: 8, text: 'Automatski unos putnog računa', icon: ' dx-icon dx-icon-product' },
];
