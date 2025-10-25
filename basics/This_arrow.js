// window object is a global object
// const user={
//     username:"Adyasish",
//     price:199,
//     welcomemsg:function () {
//         console.log(`${this.username},welcome to website`);
//         // console.log(this);
//     }
// }
// user.welcomemsg();
// user.username="sam";
// user.welcomemsg();
// console.log(this);
// function chai(){
//     let username="alok";
//     console.log(this.username);
// }
// chai();
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();
// arrow function
// const chai=()=>{
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()
// const sum=(a,b)=>{
//     return a+b;
// }//explicit return
// console.log(sum(2,3));
// const sum=(a,b) => a+b;// without curlybraces implicit return
// console.log(sum(2,3));
const obj = () => ({username:"hitesh"})
console.log(obj());
