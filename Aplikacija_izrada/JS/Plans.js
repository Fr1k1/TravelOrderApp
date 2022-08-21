function getFirstDayOfMonth(month) {
    date = new Date();
    var firstOfMonth = new Date(date.getFullYear(), date.getMonth() + month, 1);
    return firstOfMonth;
}


function checkIfValid(previousDataPlan, newDataPlan) {




    date = new Date();
    if (previousDataPlan > newDataPlan.tapp_id) {
        tacp_active_to = moment(getFirstDayOfMonth(0)).format('YYYYMMDDHHmmss');
        tacp_active_from = moment(getFirstDayOfMonth(0)).format('YYYYMMDDHHmmss');
    }

    if (!(previousDataPlan > newDataPlan.tapp_id)) {
        tacp_active_to = moment(new Date()).format("YYYYMMDDHHmmss");
        tacp_active_from = moment(getFirstDayOfMonth(0)).format('YYYYMMDDHHmmss');
    }

    callWebApiPut(null, AppConfig.TravelOrderAPIUrl + "/v1/pricePlan/updatePlan/" + newDataPlan.tapp_id + "/" + tacp_active_to).then(
        function (result) {
            allow_insert = result;
            if (allow_insert == 1) {
                callWebApiPost({ tacp_tapp_id: newDataPlan.tapp_id, tacp_active_from: tacp_active_from }, null, AppConfig.TravelOrderAPIUrl + "/v1/pricePlan/addPlan").then(
                    function (success, message) {
                        if ($(".planCanceled")) {
                            $(".planCanceled").remove();
                        }
                        if ($(".errorDiv") && setCurrentDate == true) {
                            $(".errorDiv").remove();
                        }
                        refreshPageNotification().show();
                        setTimeout(function () {
                            window.location = MobAppNamespace.redirectLocation;
                            refreshPageNotification().hide();
                        }, 15000);
                    })
            }

        })
}




getAllPlans = () => {



    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/pricePlan/currentPlan').then(function (resultData) {



        const promise1 = callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/pricePlan/get');
        const promise2 = callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/pricePlan/get/options');
        const promise3 = callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/pricePlan/canceledPlan');

        /* var datum_plan=*/

        Promise.all([promise1, promise2, promise3]).then(function (result) {

            dataResult = result[0];
            dataOptions = result[1];
            canceledPlan = result[2];

            $("#PlanHeaderMain").empty();

            for (let i = 0; i < dataResult.length; i++) {
                let planData = {
                    tapp_id: dataResult[i].tapp_id,
                    tapp_name: dataResult[i].tapp_name,
                    tapp_options: dataResult[i].tapp_options.split(';;'),
                    tapp_price: dataResult[i].tapp_price,
                    tapp_gratis: dataResult[i].tapp_gratis,
                    tapp_additional_options: dataResult[i].tapp_additional_options,
                    tapp_active_from: dataResult[i].tapp_active_from,
                    tapp_active_to: dataResult[i].tapp_active_to,
                };


                var currentButton = $("<div/>").dxButton({
                    text: "Odaberi",
                    elementAttr: {
                        id: "ID_gumba" + i,
                        class: "plan-select",
                        value: dataResult[i],
                    },
                    onClick: function (e) {
                        if ($("#ID_gumba" + i).text() == "Otkaži") {




                            Swal.fire({
                                title: 'Jeste li sigurni da želite otkazati trenutni plan?',
                                showDenyButton: true,
                                showCancelButton: false,
                                confirmButtonText: 'DA',
                                denyButtonText: `NE`,
                                toast: true,
                            }).then((result) => {

                                if (result.isConfirmed) {

                                    $("#ID_plana" + i).removeClass("featured");
                                    $("#ID_gumba" + i).html("Aktiviraj");
                                    $("#ID_gumba" + i).css("background-color", "green");



                                    $("#warning_plans").removeClass("sakri");

                                    function fade_out() {
                                        $("#warning_plans").fadeOut().empty();
                                        $(".alert-danger").fadeOut().empty();
                                    }

                                    setTimeout(fade_out, 3000);



                                    $("#ID_plana" + i).find(".snip1214").append("<div class='planCanceled container-fluid'><p>Otkazan</p></div>")

                                    callWebApiPut(null, AppConfig.TravelOrderAPIUrl + '/v1/pricePlan/cancelPlan/' + planData.tapp_id + '/20220801000000').then(function (canceledPlan) {


                                        callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/pricePlan/get')
                                    });
                                } else if (result.isDenied) {

                                }
                            })

                            return;
                        }

                        if ($("#ID_gumba" + i).text() == "Aktiviraj") {

                            Swal.fire({
                                title: 'Jeste li sigurni da želite aktivirati trenutni plan?',
                                showDenyButton: true,
                                showCancelButton: false,
                                confirmButtonText: 'DA',
                                denyButtonText: `NE`,
                                toast: true,
                            }).then((result) => {

                                if (result.isConfirmed) {


                                    callWebApiPut(null, AppConfig.TravelOrderAPIUrl + '/v1/pricePlan/activatePlan').then(function (reactivatedPlan) {

                                        console.log("Reaktivirani plan:" + reactivatedPlan);
                                    });
                                    $("#ID_plana" + i).addClass("featured");
                                    $("#ID_plana" + i).find(".planCanceled").removeClass("planCanceled");

                                    $("#ID_plana" + i).removeClass("planCanceled");
                                    $("#ID_gumba" + i).html("Otkaži");
                                    $("#ID_gumba" + i).css("background-color", "red");


                                } else if (result.isDenied) {

                                }
                            })





                            return;

                        }

                        if ($("#ID_gumba" + i).text() == "Odaberi") {


                            if ($("#ID_gumba" + i).hasClass("featured"))
                                var prethodni_plan = $(".featured").find(".dx-button").dxButton('instance').option('elementAttr.value');
                            var novi_plan = e.component.option('elementAttr.value');



                            /*      if ($("#ID_plana" + i).hasClass("featured")) {
                                      $("#ID_plana" + i).removeClass("featured");
                                  }  ovo trenutno ne dela bas dobro..tj nikak ne dela....F*/

                            Swal.fire({
                                title: 'Jeste li sigurni da želite odabrati trenutni plan?',
                                showDenyButton: true,
                                showCancelButton: false,
                                confirmButtonText: 'Da',
                                denyButtonText: `Ne`,
                                toast: true,
                            }).then((result) => {

                                if (result.isConfirmed) {
                                    checkIfValid(prethodni_plan, novi_plan);
                                    Swal.fire('Saved!', '', 'success');
                                    $(".featured").removeClass("featured");
                                    $(".gumb_otkazi").removeClass("gumb_otkazi");
                                    $("#ID_plana" + i).addClass("featured");
                                    $("#ID_gumba" + i).html("OTKAŽI");
                                    $("#ID_gumba" + i).addClass("gumb_otkazi");
                                } else if (result.isDenied) {

                                }
                            })

                            return;









                        }


                        e.element.parent().addClass("featured");
                        $("#ID_plana" + i).addClass("featured");
                        $("#ID_gumba" + i).html("Otkaži");
                        $("#ID_gumba" + i).css("background-color", "red");





                    }


                })


                let nekiDiv = $("<div class='pricePlanContent'><div class='plan pricePlanDiv'><div class='snip1214'> <h3 class='plan-title'>" + planData.tapp_name +
                    "</h3><div class='plan-cost'><span class='plan-price'>" + planData.tapp_price + "€" +
                    "</span><span class='plan-type'>/ mjesečno</span>" +
                    "</div><ul class='plan-features'> </div></div></div>").attr('id', "ID_plana" + i).appendTo($("#PlanHeaderMain"));



                nekiDiv.append(currentButton);

                if (resultData.planId == planData.tapp_id) {
                    $("#ID_plana" + i).addClass("featured");
                    $("#ID_gumba" + i).html("Otkaži");
                    $("#ID_gumba" + i).css("background-color", "red");
                }

                if (canceledPlan != null) {

                    if (planData.tapp_id == canceledPlan.tacp_tapp_id) {

                        $("#ID_plana" + i).removeClass("featured");
                        $("#ID_gumba" + i).html("Aktiviraj");
                        $("#ID_gumba" + i).css("background-color", "green");
                        $("#ID_plana" + i).find(".snip1214").append("<div class='planCanceled'><p>Otkazan</p></div>")
                    }

                }







                for (let j = 0; j < dataOptions.length; j++) {




                    if (planData.tapp_options[j] == dataOptions[j].tao_name) {

                        if (planData.tapp_id == 1) {
                            if (planData.tapp_options[i] == "Putni računi") {
                                planData.tapp_options[i] = "Neograničen broj putnih računa";
                            }




                            else planData.tapp_options[i] = result[0].tapp_options[i];
                            /* planPriceFeatureList.append($('<li>').addClass("planPriceFeature").text(data.tapp_options[i]));*/
                        }



                        else {


                            if (planData.tapp_options[j] == "Putni računi") {
                                planData.tapp_options[j] = planData.tapp_gratis + " " + " putnih računa";
                            }
                            /* planPriceFeatureList.append($('<li>').addClass("planPriceFeature").text(planData.tapp_options[i]));*/

                        }

                        $("#ID_plana" + i).find(".plan-features").append(
                            "<li><i class='ion-checkmark'> </i>" + planData.tapp_options[j] +
                            "</li>")

                    }

                    else {
                        $("#ID_plana" + i).find(".plan-features").append(
                            "<li><i class='ion-checkmark'> X </i> </li>");
                    }


                }

            }
            debugger;
            if (!$("#content").hasClass("dx-scrollable")) $("#planDiv").dxScrollView({});

            console.log("Rezultat PLANOVA:" + JSON.stringify(result));
            MobCommon.hideInitialLoadPanel();


        });
    });
};

const sadrzaj_plans = "<div id='planDiv'>" +
    "<div id = 'PlanHeader' class='dx-theme-background-color'>" +
    "<h1 id = 'naslov-poslovni-plan' > Odaberite svoj plan!</h1>" +
    "<h3 id = 'broj-racuna-poslovni-plan' > Broj kreiranih putnih računa: 42</h3> " +
    "</div >" +
    "<div id='PlanHeaderMain' class='container-fluid'></div>" +
    "<div class='error-div' > " +
    " <div class='alert alert-danger w-50 text-center center sakri' role='alert' id='warning_plans'>Otkazali ste trenutni plan.Aktivni plan se zatvara prvog dana idućeg mjeseca. Kako bi ste poništili otkazivanje kliknite na gumb Aktiviraj ispod otkazanog plana </div>" +
    " </div> " +
    "<div class='info-div container-fluid'> " +
    "<p class='deblji-tekst' > Dodatne informacije</p > " +
    "<p>    * Nakon iskorištenog limita svaki idući putni račun naplaćuje se 0,99€ / 10 putnih računa</p>" +
    "<p> ** Cijene su izražene bez PDV-a te se na njih dodatno obračunava PDV</p> " +
    "<p>   *** U planovima Basic i Standard modul 'Administracija troškova' plaća se zasebno po cijeni od 1.99€</p>" +
    "</div >" +
    " </div > ";
