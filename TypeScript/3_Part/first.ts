// array of object
interface people {name:string,age:number};

// function in Ts

function greet(a:number):number {
        console.log(a);
        return a+5;
}
console.log(greet(10));

function meet(msg:string,val:number):void{
    console.log(msg,val);
}
meet("Jayant Kumar",4);
// Default Parameter
function neet(msg:string = "Jayant Kumar") {
    console.log(msg);
}
neet();
neet("Jayant Kumar");

// Optional Parameter
function Gate(params?:string) {
    console.log(params||"Jayant");
}
Gate("Jayant Kumar");
Gate()

// Arrow Function
const sum = (a:number,b:number):number =>{
    return a+b;
}
console.log(sum(3,2));

// Callback Function
function placeOrder(order:) {

}

// Rest Parameter
function total(...arr:number[]) {

}
