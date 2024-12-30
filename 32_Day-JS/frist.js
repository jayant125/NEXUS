

// Premetive datatype  vs non premetive datatype
// primitive datatype Immutible
// non primitive datatype mutable
// primitive datatype 1 byte 2 byte 4 byte 8 byte
// non primitive datatype object reference
// primitive datatype : byte, short, int, long, float, double, boolean, char,symbol, string, biginteger
// non primitive datatype : string, array, object

let obj1 = {
    id: 1,
    name: "jayant",
    age: 20
}

let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.id = 2;
console.log(obj1);
console.log(obj2);

