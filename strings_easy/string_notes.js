console.log`Hello`  // --> This is something we can also do to print strings

// How to convert the object to string and back
let obj = {name: "Sushmita"}
let stringObj = JSON.stringify(obj)
let objBack = JSON.parse(stringObj)



// tp get the ascii code value

let s = "Hullo"
s.charCodeAt(0)


// from acii to character code

String.fromCharCode(65) // --> should print "A"


// String comparision
let str1 = "apple"
let str2 = "apple"

console.log(str1.localeCompare(str2)) // --> will return 0 if true -1 if not true

