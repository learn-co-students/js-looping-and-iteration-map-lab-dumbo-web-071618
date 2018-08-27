function lowerCaseDrivers(arr)    {
    return arr.map(name => name.toLowerCase())
}

function nameToAttributes(arr) {
    console.log(arr)
    return arr.map(function (obj) {
        let separatedAttr = obj.split(" ")
        return {firstName: separatedAttr[0], lastName: separatedAttr[1]}
    })
}

function attributesToPhrase(arr)   {
    return arr.map(obj => `${obj.name} is from ${obj.hometown}`)
}