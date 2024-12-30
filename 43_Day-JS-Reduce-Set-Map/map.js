// In JavaScript. a Map is a couoction of key-value pairs where both the keys
// and the values can be any data tm (primitive or object). Unlike regular
// JavaScript objects, a Map maintains tie order ot its elements based on
// insertion and anows keys of any typo (even objects, functions. and primitive
// types). whereas objects onty allow strings or symbols as keys.

// set(key, value)
// get(key)
// has(key)
// dolote(koy)
// clear()
// Size
// foe (Jot (key. valuo) Of map) { value); )
// key) { console.log(key, value);

// Key Value Pair : key Should be unique

// const map1 = new Map();
// map1.set("Name", "Jayant");
// map1.set("Age", 21);
// map1.set("Gender", "Male");
// map1.set("city", "Delhi");
// map1.set("Marraged", false);
// map1.set(20, "Twenty");
// // map1.set("Name", "Anshul"); Value koo update karegaa 
// // console.log(map1);
// // map1.delete(20);
// // console.log(map1);

// if(map1.has("Name")){
//     console.log("Name is Jayant");
// }
// console.log(map1.has("Name"));
// console.log(map1.size);
// map1.clear();
// console.log(map1);
// console.log(typeof map1);

const map1 = new Map([
    ["Name", "Jayant"],
    ["Age", 21],
    ["Gender", "Male"],
    ["city", "Delhi"],
    [4, "Four"],
    [5, "Five"]
]);
// console.log(map1)
// for of loop
for(let [key, value] of map1){
    console.log(key, value);
}

// Javascript ka code kaise execute hota hai
