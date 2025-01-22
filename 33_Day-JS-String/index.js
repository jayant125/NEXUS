


// non premetive datatype


// String in js
let str1 = "Hello coder army"
let str2 = 'Hello sir'
let str3 = `Aur kise hoo`

let price = 80;
 
console.log(`Price of the tamoto is $  ${price}, get is asp`);
console.log("price of the fresh tamato is", price, "get is asp");
console.log(str1, str2, str3);

// String Concatentaion
let s1 = "hello";
let s2 = " Coder Army";
let s3 = s1 + s2;
console.log(s3.length);

// "hello coder army"
console.log("'hello coder army'");

let message = "Internship lene hai Before Holi";

// eScape Character
let comment = "Internship lene hai Before Holi. \\n Internship lene hai Before Holi. \\n Internship lene hai Before Holi.";
console.log(comment)

let special = "Jayant";
console.log(special[1]);
console.log(special.charAt(3));

// to lowercase
// to uppercase
console.log(special.toLowerCase());
let strtemp = special.toUpperCase();
console.log(strtemp);
console.log(special);

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf(""));
console.log(hero.substring("kumar"));
console.log(hero.lastIndexOf("Coder"))
console.log(hero.includes("Coder"));

let newstring = "HelloDon";
console.log(newstring.slice(0,3));
// slice can also take negative index also;
console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5))

let str10 = "Hello ji kaise ho ji";
console.log(str10.replace("ji","Money"));
console.log(str10.replaceAll("ji","Money"));

let str11 = "Money! honey! sunny! funny";
console.log(str11.split("! "));

let str12 = " Hello, how are you?  ";
console.log(str12);
console.log(str12.trim());

// New way to create string
let lateststring = new String("Hello Coder Army");
console.log(lateststring);
console.log(typeof lateststring);