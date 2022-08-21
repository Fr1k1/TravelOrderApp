$('.toolbar').dxToolbar({

    items: [{
        location: 'before',
        template: function () {
            return $("<div><img src='../Slike/mobilisis.png' class='logo' alt='logo'></img> </div>");
        }

    },

    {

        template: function () {
            return $("<div class='nadzorna_ploca'>Nadzorna ploča</div>");
        },

    },

    {

        template: function () {
            return $("<div id='datumi' class='sakri'> <div id='date' ></div> <div id='date2' ></div></div>");
        },

    },

    {

        location: 'center',
        widget: 'dxButton',
        options: {
            text: "GENERIRAJ",
            type: "default",
            onClick() {

                if ($(".nadzorna_ploca").html() == "Troškovi")
                    changeDateCosts();

                if ($(".nadzorna_ploca").html() == "Popis putnih računa")
                    changeDatePutni(true);


                else if ($(".nadzorna_ploca").html() == "Grafički prikaz troškova") {

                    var params = {

                        dateFrom: moment(datum_from).format("YYYYMMDDhhmmss"),
                        dateTo: moment(datum_to).format("YYYYMMDDhhmmss"),
                        num: 1

                    };

                    callCostAPIs(params);

                }

            },
            elementAttr: { class: 'sakri', id: "generiraj_grid" },
        },

    },

    {

        location: 'after',
        widget: 'dxButton',
        options: {
            text: "UNOS",
            type: "default",
            onClick() {
                if ($(".nadzorna_ploca").html() == "Popis svih vozila") {
                    vehiclePopup();

                }

                if ($(".nadzorna_ploca").html() == "Popis svih korisnika") {
                    usersPopup();
                }

                if ($(".nadzorna_ploca").html() == "Popis svih vrsta troškova") {

                    groupsPopup();

                }

                if ($(".nadzorna_ploca").html() == "Popis svih vrsta plaćanja") {
                    paymentTypePopup();

                }


            },
            elementAttr: { class: 'sakri', id: "unesi_vozilo" },
        }
    },





    {
        location: 'after',
        widget: 'dxButton',
        options: {
            icon: 'fal fa-message',
            onClick() {

                DevExpress.ui.notify('Settings option has been clicked!');

            },
            elementAttr: { class: 'chat_traka' },
        },
    },
    {
        location: 'after',
        widget: 'dxButton',
        options: {
            icon: 'fal fa-plus',
            onClick() {
                DevExpress.ui.notify('Settings option has been clicked!');
            },
            elementAttr: { class: 'gumb_traka' },
        },
    },
    {
        location: 'after',
        widget: 'dxButton',
        options: {


            onClick() {
                DevExpress.ui.notify('Settings option has been clicked!');

            },
            elementAttr: { class: 'gumb_traka' },

            text: "M"
        },
    },]

})