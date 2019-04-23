// Code your solution
function driversWithRevenueOver(driversArray, revenue) {
    return driversArray.filter(function(driver) {
        return driver.revenue > revenue;
    });
};

function driverNamesWithRevenueOver(driversArray, revenue) {
    return driversWithRevenueOver(driversArray, revenue).map(function(driver) {
        return driver.name;
    });
};

function exactMatch(driversArray, revenueObject) {
    return driversArray.filter(function(driver) {
        let matcher;
        for (const item in revenueObject) {
            if (driver[item] == revenueObject[item]) {
                matcher = driver[item];
            }
        }
        return matcher;
    })
}

function exactMatchToList(driversArray, revenueObject) {
    return exactMatch(driversArray, revenueObject).map(function(driver) {
        return driver.name;
    })
}