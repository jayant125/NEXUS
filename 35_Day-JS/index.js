const arr = [2,34,5,69,"rohit",true];
console.log(arr);
console.log(arr.length); // length
console.log(arr[0]); // index its dont take negative index
console.log(arr.at(0)); // at latest hai its also use negative index
const newarr = arr;
console.log(newarr);
// structure clone use for different 
const newarr1 = structuredClone(arr);
console.log(newarr1);

// push
arr.push(69);
console.log(arr);

// pop last elemnt from array
arr.pop();
console.log(arr);

// unshift , add element at first
arr.unshift(69);
console.log(arr);

// shift , remove element from first
arr.shift();
console.log(arr);

// delete operation
delete arr[2];
console.log(arr);

// indexOf
console.log(arr.indexOf("rohit"));
console.log(arr.indexOf("rohit",2));

// includes
console.log(arr.includes("rohit"));
console.log(arr.includes("rohit",2));

// slice
console.log(arr);
console.log(arr.slice(1,3));
console.log(arr);

// splice  change in original array
// splice(starting_index, total_element_to_delete, add_value)
console.log(arr);
console.log(arr.splice(1,3));
console.log(arr);

// toString or join 
console.log(arr.toString());
console.log(arr.join("-")); 

// concat
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr1.concat(arr2));

// flat
let arr4 = [1,2,[3,4,[5,6]]];
console.log(arr4.flat(Infinity));