"use strict";
;
// function in Ts
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Jayant Kumar", 4);
// Default Parameter
function neet(msg = "Jayant Kumar") {
    console.log(msg);
}
neet();
neet("Jayant Kumar");
// Optional Parameter
function Gate(params) {
    console.log(params || "Jayant");
}
Gate("Jayant Kumar");
Gate();
// Arrow Function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 2));
