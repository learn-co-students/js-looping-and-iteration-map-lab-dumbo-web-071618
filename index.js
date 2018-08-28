const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

lowerCaseDrivers = (drivers) => {
  const lowerCaseDrivers = drivers.map(driver => {
    return driver.toLowerCase()
  })
  return lowerCaseDrivers
}

nameToAttributes = (drivers) => {

  const names = drivers.map(driver => {
    let splitName = driver.split(' ')
    return Object.assign({},{firstName: splitName[0], lastName: splitName[1]})
  })
  return names
}

attributesToPhrase = (drivers) => {
  const phrases = drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
  })
  return phrases
}
