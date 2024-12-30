// Reduce
// const arr = [10,20,30,42,50];
// // arr.reduce(callback function, initial value)

// const result = arr.reduce((acc,curr) => {
//     console.log(acc,curr);
//     acc += curr;
//     return acc;
// },0)

// console.log("Break Line");
// const result1 = arr.reduce((acc,curr) => acc+=curr,0);
// console.log(result1);

let arr = ["orange","Apple","Banana","Kiwi","Watermelon","Strawberry","Guava","Cherry","Orange","Apple","Apple",10,20,30,42,50];
// Final result ek object ka form me return karta hai, orange ka count 2, apple ka count 1, banana ka count 1
const result = arr.reduce((acc,curr) => {
    if(acc.hasOwnProperty(curr)){
        acc[curr]++;
    }
    else{
        acc[curr] = 1;
    }
    return acc;
},{})
