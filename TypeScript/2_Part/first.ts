let var2:unknown;
var2 = "Jayant";
var2 = 10;
console.log(var2);


// Non Premative Data Types

let arr:number[] = [1,2,3,4,5];
let arr1 = [1,2,3,4,5,6];
let arr3:(string | Number)[] = ["Jayant",12,34];
arr3.push(10);
let arr4:(string | Number | Boolean)[] = ["Jayant",1,2,3,4,true];
let tuple:[string|number|boolean] = [123,"jayant",true]

// object
let obj1:{name:string,age:number,marred:boolean} = {
    name: "jayant",
    age: 20,
    marred: true
}
let person:{name:string,age:number,marred:boolean};
person = {
    name: "Jayant",
    age: 21,
    marred: false
}

type customer = {
    name: string,
    age: number,
    marred: boolean
    }

    let customer1:customer = {
        name: "Jayant",
        age: 21,
        marred: false
    }
