// stack(primitive),heap(non-primitive)
// //datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
let username="adyasish";
let anothername=username;
console.log(anothername);
anothername="Alok";
console.log(anothername);
console.log(username);
//it will send a copy i.e, username copy is stored in anothername
let obj={
    name :"alok",
    email:"satapthyalok23@gmai.com"
}
console.log(obj);
let obj1=obj;
//it will send a reference
obj1.email="adyasish";
console.log(obj);
console.log(obj1);

