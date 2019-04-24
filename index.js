// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  // console.log(drivers)
  const result = drivers.filter(driver => driver.revenue > revenue);
  return result;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const result = driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
  return result;
}

function exactMatch(drivers, attribute) {
  const result = drivers.filter(driver => driver[Object.keys(attribute)] == Object.values(attribute) )
  console.log(result)
  return result;
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(driver => driver.name);
}
