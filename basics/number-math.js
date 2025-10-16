// const score = 400
// console.log(score);

// console.log(score.toFixed(1));


// const balance = new Number(100);
// when you use new Number(100), you are creating a Number object, not a primitive.
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//return type string
// toFixed() formats a number to a fixed number of decimal places
// and returns the result as a string.
// number.toFixed(digits)

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// toLocaleString() formats a number according to a locale (language-region).

// 'en-IN' means English (India) → it uses Indian numbering system
// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2999));//👉 Rounds a number to the nearest integer.
// If decimal ≥ 0.5, round up
// If decimal < 0.5, round down
// console.log(Math.ceil(4.2));
// Rounds a number up to the next integer, regardless of decimal.Always round upward (toward +∞)
// console.log(Math.floor(4.9));
// Rounds a number down to the previous integer, ignoring decimal.
// console.log(Math.min(4, 3, 6, 8));
// Scans all numbers and returns the miniimum.
// console.log(Math.max(4, 3, 6, 8));
// Scans all numbers and returns the maximum.
// console.log(Math.random());
// Math.random() → generates a random decimal between 0 (inclusive) and 1 (exclusive).
// console.log((Math.random()*10) + 1);
// 2️⃣ Multiply by 10 → scales it to 1 ≤ x < 10
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min);
