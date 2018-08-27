// Code your solution in this file.



function lowerCaseDrivers(array){

  return array.map(function(element){

    return element.toLowerCase()
  })

}

function nameToAttributes(array){

  return array.map(function(element){

    let name = (element.split(' '))
    let obj = {firstName : name[0], lastName : name[1]}

    console.log(obj)

    return obj

  })

}

function attributesToPhrase(array){

  return array.map(function(element){

    return `${element.name} is from ${element.hometown}`
    console.log(element)

  })
}
