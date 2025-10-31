// for of
// The for...of loop is used to iterate (loop) through iterable objects — like arrays, strings, maps, sets, etc.

// It gives you the values (not the indexes or keys) of the iterable.
// ["", "", ""]
// [{}, {}, {}]//objects entry in arrary

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps
// A Map is a built-in JavaScript object that stores key–value pairs — similar to an object ({}), but more powerful and flexible.

// Each key in a Map must be unique, and it can be any type — string, number, object, or even a function.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }