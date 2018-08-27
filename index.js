// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) { return name.toLowerCase()})
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    let nameSplit = driver.split(' ')
    return {firstName: nameSplit[0], lastName: nameSplit[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
