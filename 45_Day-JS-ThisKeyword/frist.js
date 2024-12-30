//  Global Object
//  Chrome Browser: Window
//  Node.js: Global
// globalthis
//  =======================

// console.log("Hello World");
// console.log(Math.random());
// // Set Interval
// // new Object
// // new String("Jayant")

// let obj1 = {
//     name: "Jayant",
// }

// console.log(globalThis.Math.random());
"use strict"
a = 10;
console.log(a);

let obj1 = {
    name: "Jayant",
    age: 25,
}
Object.freeze(obj1);
obj1.age = 40;
console.log(obj1);
