// substr() is a string method  that extracts a substring from a string.
// str.substr(start, length)
// let text = "Hello World";

// console.log(text.substr(-5, 5)); // "World"
// console.log(text.substr(-11, 5)); // "Hello"
// console.log(text.substr(-6));    // "World" (length omitted, takes till end)
let str = "JavaScript";
console.log(str.slice(4, 10));
console.log(str.slice(-4, -1));
console.log(str.slice(3, -3));
console.log(str.slice(4));
console.log(str.slice(-3, 3));//startidx>endidx