// for in loop : Isko array ka satha nahi leta hai
// arr is an object 

const arr = [10,20,30,2,4];
arr.name = "Jayant";
arr.age = 20;

// loop
for(let index=0; index<=arr.length-1; index++){
    console.log(index, arr[index]);
}

console.log("<br>");

for(let key in arr){
    console.log(key, arr[key]);
}
