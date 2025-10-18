// Dates
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// JavaScript does not have a date data type. However, you can use the Date object and its methods to work with dates and times in your applications. The Date object has a large number of methods for setting, getting, and manipulating dates. 
// It does not have any properties.
// let myDate = new Date()
// console.log(myDate);//Creates a new Date object representing the current date and time.
// console.log(myDate.setDate(23));
// console.log(myDate.setTime(19))
// console.log(myDate)
// console.log(myDate.toString());//Converts the Date object into a human-readable string.
// console.log(myDate.toDateString());//Returns only the date part, not the time
// console.log(myDate.toLocaleString());//Converts to local date and time format 
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
//Date.now() is a static method of the Date object.
// It returns the current timestamp — that is, the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (the Unix Epoch).

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})