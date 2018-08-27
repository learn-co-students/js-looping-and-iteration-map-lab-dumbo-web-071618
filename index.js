// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(name => name.toLowerCase())
}

function nameToAttributes(array){
  return array.map(n=> n.split(" ")).map(n=> {
    return {firstName:n[0], lastName:n[1]}})
}

function attributesToPhrase(array){
  return array.map(n=> `${n.name} is from ${n.hometown}`)
}
