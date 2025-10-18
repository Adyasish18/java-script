// array
// An array in JavaScript is a special object used to store multiple values in a single variable.
// Each value has an index (position) starting from 0.
// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies. 
const myArr = [0, 1, 2, 3, 4, 5]// array literal
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)//array constructor
// console.log(myArr[1]);

// Array methods
// myArr.push(6)//Adds elements to end
// myArr.push(7)
// myArr.pop()//delete elements to end

// myArr.unshift(9)//Adds elements to start
// myArr.shift()//delete elements to start

// console.log(myArr.includes(9));//Checks if value exists
// console.log(myArr.indexOf(3));//Returns first index of value
// console.log(myArr.lastIndexOf(7));//Returns last index of value
// const newArr = myArr.join()//It converts the array into a single string, where each element is separated by a separator.
// console.log(myArr);
// console.log(newArr);


// slice, splice
//slice:
// Original array is not modified.
// Returns a new array.
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);
//splice:
// Original array is modified.
// Returns an array of removed elements.

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);