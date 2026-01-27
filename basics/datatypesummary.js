//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);



console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
    // 1.Number:
    //     Represents both integers and floating-point numbers.
    //     Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
    //     Smallest Increment: 2^(-52).

    // 2.String:
    //     Represents a sequence of characters.
    //     No specific range limit, but practical limits depend on memory and system resources.

    // 3.Boolean:
    //     Represents true or false.
    //     Only two possible values: true and false.

    // 4.Undefined:
    //     Represents a variable that has been declared but hasn't been assigned a value.
    //     It has only one possible value: undefined.

    // 5.Null:
    //     Represents the intentional absence of any object or value.
    //     It has only one possible value: null.

    // 6.Symbol (ES6):
    //     Represents a unique and immutable value.
    //     No specific range limit.

    // 7.BigInt (ES11):
    //     Represents large integers that cannot be represented by the Number type.
    //     The range is practically unlimited and depends on available memory.