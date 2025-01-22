// Advance loop in js
let obj = {
    name: "Jayant",
    age: 21,
    gender: "Male",
    city: "Delhi"
}
// // for in loop , I can access the property name using obj.propertyName
// for(let key in obj){
//     console.log(key,obj[key]);
// }

// // Objext.keys(obj)
// // Object.values(obj)
// // Object.entries(obj)

let obj2 = Object.create(obj);
obj2.money = 10000;
obj2.id = 2;
// console.log(obj2);
// // console.log(obj2.id);

for(let key in obj2){
    console.log(key, obj2[key]);
}
