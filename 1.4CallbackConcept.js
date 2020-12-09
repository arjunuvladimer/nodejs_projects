// // Callback 
// // // 1. Blocking Code Example
var fs = require('fs')
// var data = fs.readFileSync('input.txt')
// console.log(data.toString())
// console.log("Program Ended")

// 2. Non Blocking Code Example
// In an async function you always have call back function as last parameter and also
// the call back function first parameter would be an error object
fs.readFile('input.txt',
    // Call Back Functions
    function(err, data){
        if(err) return console.log(err)
        console.log(data.toString())
    }
)
console.log("Program Ended")


