// let user = {
//     name: "Jayant",
//     age: 20,

// }

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', {
//     writable: false,
// })
// user.name = 'Anshul';
// // Hackig se bachna ke liye hume ye sab kiya hai 
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));



// // for of loop
// const arr = [10,20,11,18,13];
// for(let value of arr){
//     console.log(value);
// }


// const str = "My Name is Jayant Kumar";
// for(let value of str){
//     console.log(value);
// }

// dont't for of loop use in object

// const obj = {
//     name: "Jayant",
//     age: 20,
//     gender: "male"
// }

// // for(let value of obj){
// //     console.log(value);
// // }

// for(let value of Object.values(obj)){
//     console.log(value);
// }

// // For Each 
// let arr = [10,20,30,40];
// // Single argument: Number
// // Double Argument: Number, Index
// // Triple Argument: Number, Index, Array
// arr.forEach((num,index,arr) => {
//     arr[index] = num * 2;
//     console.log(num,index,arr) 
// });

// console.log(arr);

// // Filter
// let arr = [10,20,30,40];
// // const even = arr.filter((num) => {
// //     return num%2 == 0
// // })
// // console.log(even);

// const even = arr.filter((num) => num%2 == 0);
// console.log(even);

// const students = [
//     {
//         name: "Jayant",
//         age: 20,
//         gender: "male",
//         marks: 90
//     },
//     {
//         name: "Rahul",
//         age: 20,
//         gender: "male",
//         marks: 90
//     },
//     {
//         name: "Anshul",
//         age: 20,
//         gender: "male",
//         marks: 30
//     }
// ]

// const result = students.filter((obj) => {
//     return obj.marks > 35
// });
// console.log(result);
// const result1 = students.filter(({marks}) =>  marks > 35);
// console.log(result1);

// Map
const arr = [10,20,30,40];
const result = arr.map((num) => {
    return num = num * 2;
});
console.log(result);
