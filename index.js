// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map((driver) => {
    return driver.toLowerCase();
  });
}

function nameToAttributes(driversFullName){
  return driversFullName.map((name) => {
    const fullNameArr = name.split(" ");
    //console.log(fullNameArr);
    return  Object.assign({},
      { firstName: fullNameArr[0],
        lastName: fullNameArr[1]});
  });
}

function attributesToPhrase(drivers){
  return drivers.map((driver) => {
    return `${driver.name} is from ${driver.hometown}`;

  })
}
