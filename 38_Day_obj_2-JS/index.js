let obj1 = {
    a: 1,
    b:2
}

let obj2 = obj1;
// Shallow copy
obj2.a = 10;
console.log(obj2, obj1);

// Deep Copy
let obj3 = structuredClone(obj1);
obj3.a = 20;
console.log(obj3, obj1);

// Nested Object
const user = {
    name:"Jayant",
    balance:1233,
    address:{
        PinCode:824245,
        city:"Delhi"
    }
}

const {name, balance, age} = obj;
const {name:full_name, balance:amount, age:Anshul} = obj;

const user2 = Object.assign({},user);
console.log(user2)
user2.address.PinCode = 457896;
console.log(user.address.PinCode);

const arr = [3,2,1,4,5];
const [first,second] = arr;

const {address:adds} = obj;
console.log(adds);


let use = {
    name: "Jayant",
    amount: 340,
    greet: function () {
        console.log("Hello Coder Army");
    },
    meet: function(){
        return 20;
    }
}
