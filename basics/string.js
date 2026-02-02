const name="alok";
console.log(`hi my name is ${name}`);
console.log(typeof name);
const gamename=new String("Adyasishdotcom");
console.log(gamename);
console.log(typeof gamename);
console.log(gamename.__proto__);
console.log(gamename.length);
// console.log(gamename.charAt(2));//to access character
// console.log(gamename.indexOf("l"));//to find index of a character
// const newstring=gamename.substring(0,2);//substring(start, end) extracts characters from start index up to (but not including) end index.
// if you give negative index in substring it will start from 0
// console.log(newstring);
// const anotherstring=gamename.slice(-8,2);//if startidx>endidx then it return empty string
// If start < 0 → it becomes length + start
// console.log(anotherstring);
// const newstring="  happy  ";.trim() removes whitespace from both sides It does not remove spaces in the middle
// console.log(newstring.trim());
const str="alok";
console.log(str.substr(-1,2));
// console.log(str.replace('o','k'));//It replaces the first occurrence of the specified substring with the new value.
console.log(str.includes("hi"));
// This checks whether the string contains the substring "hi".

// "alok" → does not contain "hi", so it returns:false