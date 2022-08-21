var MobCommon = {};


MobCommon.callWebApiGet = function (relativeUrl, absoluteUrl) {
    var deferred = new $.Deferred();
    $.ajax({
        url: absoluteUrl ? absoluteUrl : (MobAppNamespace.fleetWebApiUrl + relativeUrl) + ((MobAppNamespace.fleetWebApiUrl + relativeUrl).includes("?") ? "&" : "?") + "com_id=" + MobAppNamespace.currentUser.mainData.comId + "&usr_id=" + MobAppNamespace.currentUser.mainData.usrId,
        headers: {
            "Authorization": "Bearer " + MobAppNamespace.sessionKey
        },
        type: "GET",
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



MobCommon.createLoadPanel = function () {
    MobCommon.mobLoadPanel = $("#mobLoadPanel").dxLoadPanel({
        visible: true,
        showIndicator: true,
        showPane: true,
        shading: true,
        hideOnOutsideClick: false
    }).dxLoadPanel("instance");
}

MobCommon.createLoadExportData = function () {
    MobCommon.mobLoadExportData = $("#mobLoadPanelExportData").dxLoadPanel({
        showIndicator: true,
        showPane: true,
        shading: false,
        hideOnOutsideClick: false,
        message: di("Izvoz podataka") + "..."
    }).dxLoadPanel("instance");
}

MobCommon.hideInitialLoadPanel = function () {
    if (MobCommon.mobLoadPanel) MobCommon.mobLoadPanel.hide();
};

MobCommon.showInitialLoadPanel = function () {
    if (MobCommon.mobLoadPanel) MobCommon.mobLoadPanel.show();
    else {
        MobCommon.createLoadPanel();
        MobCommon.mobLoadPanel.show();
    }
};