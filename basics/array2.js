const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)//Combine arrays
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]//The spread operator (...) takes an array (or iterable) and expands it into individual elements.

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)//The .flat() method flattens (i.e., removes nesting from) arrays.

// It returns a new array with all sub-array elements concatenated into it.
//depth defines how deep to flatten nested arrays.
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))//Checks whether a given value is an array or not.
// console.log(Array.from("Hitesh"))//Array.from() converts each character into an array element.
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));//Array.of() is a static method of the Array class that creates a new array from the given arguments.