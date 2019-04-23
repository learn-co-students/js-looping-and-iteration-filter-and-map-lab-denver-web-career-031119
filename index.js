function driversWithRevenueOver (drivers, num) {
  return drivers.filter (function (driver) {return driver.revenue > num;});
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers,num).map(function(driver){return driver.name;});
}

function exactMatch (drivers, obj) {
  return drivers.filter (function (driver) {return driver.name === obj.name || driver.revenue === obj.revenue;});
}

function exactMatchToList (drivers, obj) {
  return exactMatch (drivers, obj).map(function (driver) {return driver.name;});
}
