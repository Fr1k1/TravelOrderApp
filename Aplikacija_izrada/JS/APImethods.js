getAllAPIAccounts = (newApiUser) => {

    MobCommon.showInitialLoadPanel();
    //debugger;
    callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/web/api/get/apiAccounts').then(function (result) {



        for (let i = 0; i < result.length; i++) {
            let nekiDiv = $("<div class='apiTabs container-fluid'>").attr('id', "ID_korisnika" + i).appendTo($("#APImainContent"));
            let formData = {
                usr_name: result[i].usr_name,
                usr_id: result[i].usr_id,
                password: newApiUser && newApiUser.usr_login == result[i].usr_login ? newApiUser.usr_password : null,
                usr_dt_modified: ''
            };

            nekiDiv.dxForm({
                formData: formData,
                items: [
                    {
                        caption: "Naziv korisničkog računa " + result[i].usr_name,
                        itemType: "group",
                        items: [
                            {
                                label: {
                                    text: "Korisničko ime"
                                },
                                dataField: "usr_name",
                                editorType: "dxTextBox",
                                editorOptions: {
                                    readOnly: true,
                                    helpText: "Korisničko ime za korištenje API-ja"
                                }
                            },

                            {
                                label: {
                                    text: "Lozinka",

                                },


                                dataField: "password",

                                visible: true,
                                editorType: "dxTextBox",
                                editorOptions: {
                                    visible: formData.password ? true : false,
                                    //value:usr_password,
                                    // icon: ""


                                }

                            },
                            {
                                itemType: 'button',
                                horizontalAlignment: 'right',
                                buttonOptions: {
                                    icon: 'fa-solid fa-arrows-rotate',
                                    type: 'default',
                                    stylingMode: 'contained',
                                    text: di("Resetiraj lozinku"),
                                    onClick: function (e) {

                                        Swal.fire({
                                            title: 'Resetiranjem lozinke potrebno je ažurirati sve postojeće sustave koji koriste ovaj korisnički račun jer u suprotnom autorizacija neće biti moguća. Jeste li sigurni da želite resetirati lozinku?',
                                            showDenyButton: true,
                                            showCancelButton: false,
                                            confirmButtonText: 'DA',
                                            denyButtonText: `NE`,
                                            toast: true,
                                        }).then((result) => {

                                            if (result.isConfirmed) {
                                                callWebApiGet(null, AppConfig.TravelOrderAPIUrl + '/v1/web/api/updateAccount/' + formData.usr_id).then(function (result) {

                                                    passwordData = result;


                                                    if (passwordData) {
                                                        dateModified = moment(passwordData.usr_dt_modified).format("DD.MM.YYYY. HH:mm:ss");
                                                        formData.usr_password = passwordData.usr_password;


                                                        /* form.itemOption("passGroup.passwordInfo", "visible", true);
                                                         form.itemOption("apiGroup.infoGroup.userCreatedInfo", "visible", false);
                                                         form.itemOption("apiGroup.infoGroup.userModifiedInfo", "visible", true);
                                                         form.getEditor("password").option("visible", true);
                                                         form.getEditor("password").option("value", formData.usr_password);*/

                                                        console.log(formData.usr_password);

                                                        //  $("#ID_korisnika" + i).dxForm("instance").getEditor("password").option("visible", true);

                                                        $("#ID_korisnika" + i).dxForm("instance").getEditor("password").option("value", formData.usr_password);

                                                        $("#ID_korisnika" + i).dxForm("instance").getEditor("password").option("visible", true);

                                                    }
                                                });

                                            } else if (result.isDenied) {

                                            }
                                        })

                                    }
                                }
                            },
                            {
                                template: function () {
                                    if (result[i].usr_dt_modified)
                                        return ("Lozinku promijenio " + result[i].editor_name + " u " + moment(result[i].usr_dt_modified).format("DD.MM.YYYY. HH:mm:ss"));
                                    else
                                        return ("Kreirao " + result[i].creator_name + " u " + moment(result[i].usr_created).format("DD.MM.YYYY. HH:mm:ss"));
                                }
                            },
                            {
                                itemType: 'button',
                                horizontalAlignment: 'left',
                                buttonOptions: {
                                    icon: 'fa-solid fa-trash-alt',
                                    type: 'danger',
                                    stylingMode: 'contained',
                                    text: di("Obriši"),
                                    onClick: function (e) {

                                        Swal.fire({
                                            title: 'Brisanjem korisničkog računa više nećete imati pristup određenim funckionalnostima. Jeste li sigurni da želite obrisati korisnički račun?',
                                            showDenyButton: true,
                                            showCancelButton: false,
                                            confirmButtonText: 'DA',
                                            denyButtonText: `NE`,
                                            toast: true,
                                        }).then((result) => {

                                            if (result.isConfirmed) {
                                                callWebApiDelete(null, AppConfig.TravelOrderAPIUrl + "/v1/web/api/deleteAccount/" + formData.usr_id).then(function (result) {

                                                    if (result != 1) {

                                                        return;
                                                    };

                                                })


                                                $("#APImainContent").empty();
                                                getAllAPIAccounts();

                                            } else if (result.isDenied) {

                                            }
                                        })



                                    }
                                }
                            }
                        ]
                    },
                ]
            }).dxForm("instance");
        }
        MobCommon.hideInitialLoadPanel();



        $("#APImain").dxScrollView({});
    });
};