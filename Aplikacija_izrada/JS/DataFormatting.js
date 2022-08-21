function ReduceData(result, name) {
    const groups = result.reduce((groups, name) => {
        const group = (groups[name.userName] || []);
        group.push(name);
        groups[name.userName] = group;
        return groups;
    }, {});

    console.log(groups);
}


function formatByUser(result) {
    var field = [];

    //group array of object by object propperty
    function groupArrayOfObjects(list, key) {
        return list.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    var users = groupArrayOfObjects(result, "userName")

    for (const key in users) {
        var x = new Object();
        x.userName = key;
        for (const key2 in users[key]) {
            x.costTotalUser = users[key][key2].costTotalUser
            x.costTotalOther = users[key][key2].costTotalOther
            x[users[key][key2].groupName] = users[key][key2].costTypeTotal
        }
        field.push(x);
    }
    return field
}

function formatByVehicle(result) {
    var field = [];

    //group array of object by object propperty
    function groupArrayOfObjects(list, key) {
        return list.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    var users = groupArrayOfObjects(result, "objectName")

    for (const key in users) {
        var x = new Object();
        x.objectName = key;
        for (const key2 in users[key]) {
            x.costTotalUser = users[key][key2].costTotalUser
            x.costTotalOther = users[key][key2].costTotalOther
            x[users[key][key2].groupName] = users[key][key2].costTypeTotal
        }
        field.push(x);
    }
    return field
}


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

