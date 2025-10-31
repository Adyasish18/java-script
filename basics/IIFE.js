// Script 1
(function () {
    var userName = "Alok";
    console.log("Script 1 user:", userName);
})();

// Script 2
(function () {
    var userName = "Hitesh";
    console.log("Script 2 user:", userName);
})();

console.log(typeof userName); // undefined
//Global scope pollution
// // Script 1
// var userName = "Alok";

// // Script 2
// var userName = "Hitesh"; // accidentally redefined the same variable

// console.log(userName); // Output: Hitesh 😬
// (function () { ... }) → This is a function expression (not a declaration).
// Wrapping it in parentheses makes it an expression, so JavaScript doesn’t treat it as a normal function definition.

// (); → This pair of parentheses calls the function immediately.