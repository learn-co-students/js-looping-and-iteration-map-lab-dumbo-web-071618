function lowerCaseDrivers(drivers){
  const newArray = drivers.map(function(name){
    return name.toLowerCase();
  });
  return newArray;
}

function nameToAttributes(drivers) {
  const newArray =
  drivers.map(function(name) {
    const twoNames = name.split(" ");
    return { firstName: twoNames[0], lastName: twoNames[1] };
  });
  return newArray;
}

function attributesToPhrase(drivers){
  let newArray = drivers.map(function(object) {
     const name = object.name;
     const town = object.hometown;
  return `${name} is from ${town}`;
  });
  return newArray;
}
