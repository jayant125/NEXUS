// A Set in JavaScript is a collection of unique values, It allows
// you to store values without duplicates, which makes it
// different from arrays, The values Jn a Set can be of any type,
// such as primitives (numbers, strings, etc,) or objects,


// Add
// Delete
// Has
// Size
// clear

// // Set is a collection of unique values
// let arr = [10,10,20,20,30,10,20,15];
// const set1  = new Set([10,20,30,40]);
// console.log(set1);
// console.log(typeof set1);
// const set2 = new Set;
// set2.add(10);
// set2.add(20);
// set2.add("Jayant");
// console.log(set2.size);

// insta:id
// const user_id = new Set(["jayant_0p","Anshul_0p","Rohit_0p"]);
// let new_user = "jayant_0p";
// console.log(user_id.has(new_user));

// if(user_id.has(new_user)){
//     console.log("User Already Exists");
// }
// user_id.clear();
// console.log(user_id);

// let arr = [10,20,10,20,30,30,40,50,40];
// let set3 = new Set(arr);
// console.log(set3);
// arr = [...set3];
// console.log(arr);


let set1 = new Set([10,20,30,40]);
let set2 = new Set([30,40,50,60]);
let union = new Set([...set1, ...set2]);
console.log(union);
let intersection = [...set1].filter((value) => set2.has(value));
console.log(intersection);

// Itterators
// for of loop
for( let value of set1){
    console.log(value);
}

set1.forEach((value) => console.log(value));