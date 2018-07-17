// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  const newArr = [...drivers]
  return newArr.sort(function functionName(a, b) {
      return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  const newArr = [...drivers]
  return newArr.sort(function functionName(a, b) {
      return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(sum, driver){
    return sum + driver.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
