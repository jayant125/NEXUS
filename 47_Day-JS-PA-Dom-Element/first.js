// function timing(){
//     const time = document.getElementById("root");
//     const now = new Date();
//     const indian_time = now.toLocaleTimeString();
//     time.innerHTML = indian_time;
// }
// setInterval(timing,1000);

// const time = document.getElementById("root");
// time.style.fontSize = "200PX";
// time.style.display = "flex";
// time.style.height = "100vh";
// time.style.justifyContent = "center";
// time.style.alignItems = "center";
// time.style.backgroundColor = "orange";

//*******************2nd File*************************** //

// const id = document.querySelector('#first');
// id.innerHTML = "Hello Money";

// const id2 = document.querySelector('.header2');
// id2.style.backgroundColor = "pink"

// const obj = document.querySelectorAll('.header1')


// // Access All Elements same class
// for (let index = 0; index < obj.length; index++) {
//     console.log(obj[index]);
// }
// // Change BackGround color
// for (let index = 0; index < obj.length; index++) {
//     obj[index].style.backgroundColor = "pink";
// }
// // Access through for of loop
// for(let val of obj){
//     console.log(val);
// }
// // Access through for each
// obj.forEach((val)=>{
//     console.log(val)
// })

// // Convert NodeL: into array
// Array.from(obj)

// // List Selector
// const obj1 = document.querySelectorAll('li');


// **************************************************** //

// const obj_tag = document.getElementsByTagName('h1');
// console.log(obj_tag);

// let team = document.getElementsByTagName('li');
// console.log(team[1]);
// // Change color
// for (let index = 0; index < team.length; index++) {
//     team[index].style.color = 'white';
// }


// ******************************************************** //
// const list = document.querySelector('li');
// console.log(list.parentElement);
// console.log(list.parentNode)

// const par = document.querySelector('ul');
// console.log(par);
// console.log(par.childNodes);
// console.log(par.firstChild);
// console.log(par.lastChild);
// console.log(par.firstElementChild)
// console.log(par.lastChild);
// console.log(par.lastElementChild);


// Inner HTML
document.getElementById('first').innerHTML
// Text Content
document.getElementById('first').textContent
// Outer HTML
document.getElementById('first').outerHTML
