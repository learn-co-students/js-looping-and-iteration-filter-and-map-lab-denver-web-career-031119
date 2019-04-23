// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return (drivers.filter( function(elem){ return elem.revenue > revenue; }));
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const driversRevenue = (drivers.filter( function(elem){ return elem.revenue > revenue; }));
    const result = driversRevenue.map(function(elem) {return elem.name})
    return result;
    }

function exactMatch(driver, matchObject) {
    const result = driver.filter( function(elem) { return(elem.name === matchObject.name || elem.revenue === matchObject.revenue) } )
    return result;
}

function exactMatchToList(driver, matchObject) {
    let matchArray = exactMatch(driver, matchObject);
    const result = matchArray.map(function(elem) { return elem.name});
    return result; 
}