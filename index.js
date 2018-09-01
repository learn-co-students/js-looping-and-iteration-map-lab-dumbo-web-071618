// Code your solution in this file.
const lowerCaseDrivers = (drivers) => {
  return drivers.map(function (e) {
    return e.toLowerCase()
  })
}

const nameToAttributes = (drivers) => {
  return drivers.map(function (e) {
    let splitAttr = e.split(" ")
    return {firstName: splitAttr[0], lastName: splitAttr[1]}
 })
}

const attributesToPhrase = (drivers) => {
  return drivers.map(obj => `${obj.name} is from ${obj.hometown}`)
}
