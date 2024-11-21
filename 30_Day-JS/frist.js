// Number, String, Boolean, Null. Undefined, Symbol, Bigint


let arr = [10,20,3,0,4,0,1,"Jayant","Kumar",true];
console.log(arr);
console.log(typeof arr);

// Object
let obj = {
    user_name: "Jayant Kumar",
    age: 20,
    account_number: "1234567890",
    account_balance: 10000,
    is_married: true
}

console.log(obj);

// Function
let fun  = function(){
    console.log("Hello Coder Army")
}

console.log(typeof fun);

// TypeConversion
let account_balances = "10000";
let num = Number(account_balances);
console.log(num);
console.log(typeof num);

// Boolean to Number Conversion
let x = false;
let y = Number(x);
console.log(y);
console.log(typeof y);

// Null
let x1 = null;
console.log(x1);
console.log(typeof x1);

// Undefined
let x2;
console.log(x2);
console.log(typeof x2);

// String Conversion
let x3 = 10;
let y3 = String(x3);
console.log(y3);
console.log(typeof y3);

let s1 = String(obj);
console.log(s1);



// Arthmetic Operator in JS
// +, -, *, /, %
// Division multiple left to right
// Add Sub left to right

let a = 10;
let b = 20;
let c = a + b;
console.log(c);

// Modlus Give in Reminder
console.log(a % b);

// ++ INcrement -- Decrement
let sum = 10;
console.log(sum++);
console.log(sum--);
// sum++ post increment ++sum pre increment