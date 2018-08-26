// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (element) {
    return element.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function (element) {
    // If I do not use "const"/"let", why does not adding an "s" to the end of "name" break the test?
    const name = element.split(' ');
    return { firstName: name[0], lastName: name[1] };
  });
}

function attributesToPhrase(array) {
  return array.map(function (element) {
    return `${element.name} is from ${element.hometown}`;
  });
}
