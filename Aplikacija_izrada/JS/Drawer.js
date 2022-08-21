
const drawer = $('#drawer').dxDrawer({
    opened: true,
    height: "100%",
    closeOnOutsideClick: false,
    template() {
        const $list = $('<div>', { id: "nesto" }).css("height", "100%").addClass('panel-list');

        return $list.dxTreeView({
            //hideSubmenuOnMouseLeave: false,
            //orientation: 'vertical',
            selectionMode: "single",
            selectByClick: true,
            expandEvent: "click",
            dataSource: navigation,
            onItemClick: function (e) {

                if (e.itemData.id != 41 && e.itemData.id != 4 || e.itemData.id != 8)
                    $("#content").empty();

                if (e.itemData.id == 2 || e.itemData.id == 4 || e.itemData.id == 3 || e.itemData.id == 42 || e.itemData.id == 43 || e.itemData.id == 44
                    || e.itemData.id == 45 || e.itemData.id == 46 || e.itemData.id == 6 || e.itemData.id == 7 || e.itemData.id == 8) {
                    $("#datumi").addClass("sakri");
                }

                if (e.itemData.id == 2 || e.itemData.id == 4 || e.itemData.id == 43 || e.itemData.id == 44 || e.itemData.id == 45 || e.itemData.id == 46 ||
                    e.itemData.id == 6 || e.itemData.id == 7 || e.itemData.id == 8) {
                    $("#generiraj_grid").addClass("sakri");
                }

                if (e.itemData.id == 2 || e.itemData.id == 3 || e.itemData.id == 4 || e.itemData.id == 46 || e.itemData == 5 || e.itemData.id == 51 || e.itemData.id == 6
                    || e.itemData.id == 7 || e.itemData.id == 8) {
                    $("#unesi_vozilo").addClass("sakri");
                }

                switch (e.itemData.id) {

                    case 1: {
                        console.log("Kreiraj putni racun");
                        $(".nadzorna_ploca").html("Kreiranje putnog računa");

                        break;
                    }


                    case 2: {
                        console.log("Druga opcija je pritisnuta");
                        $(".nadzorna_ploca").html("Nadzorna ploča");

                        $("#content").show();
                        $('#content').html(sadrzaj);

                        CreateDashboardGraphs();
                        break;
                    }

                    case 3: {
                        console.log("Popis putnih racuna");

                        $("#content").show();

                        $(".nadzorna_ploca").html("Popis putnih računa");
                        $("#generiraj_grid").removeClass("sakri");

                        datum_from = $("#date").dxDateBox('instance').option('value');

                        datum_to = $("#date2").dxDateBox('instance').option('value');
                        $("#datumi").removeClass("sakri");

                        break;
                    }

                    case 4: {
                        $(".nadzorna_ploca").html("Postavke");

                        $("#APIheader").addClass("sakri");
                        $("#PlanHeaderMain").addClass("sakri");

                        break;
                    }

                    case 41: {

                        break;
                    }
                    case 42: {
                        $(".nadzorna_ploca").html("Popis svih vozila");

                        $("#content").show();


                        $("#unesi_vozilo").removeClass("sakri");
                        $("#popup").removeClass("sakri");

                        break;
                    }
                    case 43: {
                        $(".nadzorna_ploca").html("Popis svih korisnika");
                        $("#content").show();

                        $("#unesi_vozilo").removeClass("sakri");

                        break;
                    }
                    case 44: {
                        $(".nadzorna_ploca").html("Popis svih vrsta troškova");
                        $("#content").show();
                        $("#unesi_vozilo").removeClass("sakri");



                        break;
                    }
                    case 45: {
                        $(".nadzorna_ploca").html("Popis svih vrsta plaćanja");
                        $("#content").show();
                        $("#unesi_vozilo").removeClass("sakri");


                        break;
                    }
                    case 46: {
                        $(".nadzorna_ploca").html("Popis svih valuta");
                        $("#content").show();


                        break;
                    }

                    case 5: {
                        $(".nadzorna_ploca").html("Troškovi");

                        $("#content").show();

                        console.log("Peta opcija");

                        $("#datumi").removeClass("sakri");
                        $("#generiraj_grid").removeClass("sakri");

                        break;
                    }

                    case 51: {
                        $(".nadzorna_ploca").html("Grafički prikaz troškova");

                        $('#content').html(sadrzaj_graficki);

                        datum_from = $("#date").dxDateBox('instance').option('value');

                        datum_to = $("#date2").dxDateBox('instance').option('value');

                        $("#content").show();

                        let contentInnerDiv = $("<div>").appendTo($('#content'));
                        $('#content').dxScrollView({

                        });

                        $('#svi_grafovi').dxScrollView({

                        });

                        /*$("#chartWebCosts").appendTo(contentInnerDiv);
                        $("#chartWebPaymentType").appendTo(contentInnerDiv);
                        $("#chartWebExpenseAccount").appendTo(contentInnerDiv);
                        $("#chartWebbySupplier").appendTo(contentInnerDiv);
                        $("#chartWebbyCountry").appendTo(contentInnerDiv);
                        $("#chartWebbyCurrency").appendTo(contentInnerDiv);
                        $("#chartWebbyUser").appendTo(contentInnerDiv);
                        $("#chartWebbyVehicle").appendTo(contentInnerDiv);*/



                        $("#svi_grafovi").appendTo("#content");

                        $('#content').dxScrollView({

                        });
                        $("#datumi").removeClass("sakri");



                        break;
                    }

                    case 6: {
                        $(".nadzorna_ploca").html("API");
                        $("#content").hide();
                        $("#APImain").show();
                        $("#content51").hide();
                        $("#APIheader").removeClass("sakri");
                        $("#APImain").show();
                        $("#APIheader").show();
                        $("#PlanHeader").addClass("sakri");
                        $("#PlanHeader").hide();
                        $("#PlanHeaderMain").hide();
                        $(".info-div").hide();

                        break;
                    }

                    case 7: {

                        $(".nadzorna_ploca").html("Poslovni plan");

                        $("#content51").hide();
                        $("#APImain").hide();
                        $("#APIheader").hide();

                        $("#PlanHeaderMain").removeClass("sakri");

                        $("#PlanHeader").removeClass("sakri");
                        debugger;
                        $('#content').html(sadrzaj_plans);
                        $("#content").show(); //poradi na tome nakon code reviewa (obrisi divove)

                        break;
                    }


                    case 8: {
                        alert("Ova opcija još nije dostupna!!");

                        break;
                    }

                    default:
                        '';
                }

                if (typeof e.itemData.onClickFunc === "function") e.itemData.onClickFunc();
            },
            hoverStateEnabled: true,
            focusStateEnabled: false,
            activeStateEnabled: false,
            elementAttr: { class: 'dx-theme-accent-as-background-color' },
        });
    },
}).dxDrawer('instance');