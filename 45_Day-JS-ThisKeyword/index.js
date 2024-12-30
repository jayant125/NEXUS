
// 1. Global Context (Outside any Function)
// In Browser Window
// In Node.js: Module Exports Object

// let a = 10;
// let b = 20;
// var c = 2;
// console.log(this===window);
// console.log(this.c);

//
// "use strict";
// for less Bug
// function greet(){
//     console.log(this);
// }

// greet();

// 3. Inside a Method (Object Context)
// When This is used inside an object's method, it is refers to the object that

// const obj = {
//     name: "jayant",
//     age: 20,
//     greet: function(){
//         console.log(this.name);
//         // console.log(this);
//     }
// }
// obj.greet();

//  ||***************************************************|| //

// Arrow Function don't have their own this.
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj1 =  {
//     name: "jayant",
//     age: 22,
//     greet1: ()=> {
//         console.log(this);
//     }
// }
// obj1.geet1();

// let obj3 = {
//     name: "jayant",
//     age: 22,
//     greet: function(){
//         let ab = ()=>{
//             console.log(this);
//         };
//         ab();
//     }
// }
// obj3.greet();

//  ||***************************************************||
// Inside a Constructor or Class
// In Constructors or classes, this refers to the instance of the object being created.

// class person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let a = new person("Jayant",20);
// console.log(a);
"use strict";
// let greet = ()=>{
//     console.log(this);
// }
// greet();

let meet = function () {
    console.log(this);
}
meet();
