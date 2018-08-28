// Code your solution in this file.

// function lowerCaseDrivers(drivers) {
//   let result = drivers.map((driver, i, drivers) => {
//     return driver.toLowerCase();
//   });
//   return result;
//
// }

function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    var result = {};
    var fName = driver.split(' ')[0];
    var lName = driver.split(' ')[1];
    result.firstName = fName;
    result.lastName = lName;
    return result;
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}
