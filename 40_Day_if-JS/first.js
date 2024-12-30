// Scope ke baare mein
// Global Scope, Local Scope(Functional Scope), block scope
// let a = 10;
// var b = 20;
// const c = 30;
// Global Scope Wale

// console.log(a)
// console.log(b)
// console.log(c)


// function greet() {
//     let a = 10;
//     var b = 20;
//     const c = 30;
//     console.log("Hello Function");
//     console.log(a,b,c);
// }

// greet();
// greet(a);

// var amount = 400;
// var amount = 500;
// // Var is not follw block scope
// if(true){
//     let a = 10;
//     var b = 20;
//     const c = 30;
// }
// console.log(b);


// for(var i=0; i<20; i++){
//     console.log(i);
// }
// // Acces i bcoz var is not block scope
// console.log(i);

// // console.log(amount);
// let amount = 400;
// console.log(b);
// // let const b = 500;
// console.log(c);
// var c = 600;
// if(true){
//     let amount = 500;
//     console.log(amount);
// }
// console.log(amount);


// greet();
// function greet(){
//     console.log("Hello Coder Army");
// }

// greet();
// meet();
// const meet = function(){
//     console.log("Hello Coder Army");
// }

// meet();


// // While Loop
// let i = 0;
// while(i<10){
//     console.log(i),
//     i++
// }

let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

const obj = {
    name: "Coder Army",
    age: 20,
    amount: 1000,
    city: "Delhi"
}

const keys = Object.values(obj);
['name', 'age', 'amount', 'city']
for(let i=0; i<keys.length; i++){
    console.log(keys[i]);
}