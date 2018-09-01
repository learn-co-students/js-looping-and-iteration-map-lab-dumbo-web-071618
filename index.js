// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(word => word.toLowerCase())
}

function nameToAttributes(array) {
  return array.map(function (driver) {
    let splitName = driver.split(" ")
    return {firstName: splitName[0], lastName: splitName[1]}
  })
}

function attributesToPhrase(array) {
  return array.map(function (obj_driver) {
    return `${obj_driver.name} is from ${obj_driver.hometown}`
  })
}
