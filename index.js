// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver) {return driver.revenue > revenue}); 
}

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, attributeValue){  
    return drivers.filter(function (driver) {
    let doesMatch = false;
    for (const key in attributeValue) {
      doesMatch = driver[key] === attributeValue[key];
    }
    return doesMatch;
  });
}

function exactMatchToList (drivers, attributeValue) {
    return exactMatch(drivers, attributeValue)
      .map(function (driver) {
        return driver.name;
      });
  }