// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(Object.keys(JsUser));

// an object is a collection of key-value pairs — where each key (also called a property name) is a string (or Symbol), and the value can be anything (string, number, array, function, or even another object).

// console.log( JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//Makes an object immutable
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(JsUser);

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());