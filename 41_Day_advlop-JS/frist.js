// let obj = {

// };
// obj.name = "Jayant";
// obj.age = 25;
// // key Value writable enumerable configurable
// // console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// // Writable  = True , value ko kaya change kar skte hai
// obj.name = "Anshul";
// console.log(obj);

// // Configurable = False , not change writable and enumerable


// let obj = {};

// Object.defineProperty(obj,'name',{
//     value: "Jayant",
//     writable: false,
//     enumerable: true,
//     configurable: true,
// })

// Object.defineProperty(obj,'name',{
//     value: "Anshul",
//     writable: true,
//     enumerable: true,
//     configurable: false,
// })

// Object.defineProperty(obj,'name',{
//     writable: true,
// })
// obj.name = "Anshul";
// console.log(obj);

// const obj1 = {
//     name: "Jayant",
//     age: 20,
//     account_no: "1234567890",
//     account_balance: 10000
// }

// Object.defineProperty(obj1, 'account_no', {
//     writable: false,
// })

// obj1.account_no = "1234567890";
// console.log(obj1.account_no);


// const customer = {
//     name: "Jayant",
//     age: 21,
//     city: "Delhi",
//     account_no: "1234567890",
//     account_balance: 10000
// }

// Name , account_no, age | Change nahi Hona Caheya hai

// Object.defineProperty(customer, 'name', {
//     writable: false,
// })
// customer.name = "Anshul";
// console.log(customer.name);

const customer = {
    name: "Jayant",
    age: 21,
    city: "Delhi",
    account_no: "1234567890",
    account_balance: 10000
}

let customer2 = Object.create(customer);
customer2.city = "Pune",
customer2.plce = "Noida"

Object.defineProperty(customer, 'name', {
    enumerable: false,
})

// enumerable : jis bhi key ka enumeration true hoga un he print hoga or acces hoga
// Inherit hoke bhi koi bhi property or key aati hai kuska enumerbale true hua toh wo bhio print hga
for(let key in customer2){
    console.log(key);
}

console.log("<br>");

console.log(Object.getOwnPropertyDescriptor(customer, 'name'));
console.log("<br>New line</br>")
console.log(Object.getOwnPropertyDescriptors(Object.prototype, 'toString'));

Object.defineProperty(Object.prototype, 'tostring', {
    enumerable: true,
})

for(let key in customer){
    console.log(key);
}