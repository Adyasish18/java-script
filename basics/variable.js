// What is comment?
// The part of the code which is not executed

// Variable Rules

// Variable names are case sensitive; "a" and "A" are different.

// Only letters, digits, underscore (_), and $ are allowed (no spaces).

// The first character must be a letter, underscore (_), or $.

// Reserved words cannot be used as variable names.
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;//if we dont assign any value to the variable then js declare it to undefined
// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);//console.log() is a JavaScript method used to print/output data to the console 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// console.table() is a JavaScript console method used to display arrays or objects in a table format in the browser console or Node.js