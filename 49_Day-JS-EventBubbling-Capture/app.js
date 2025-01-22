//************************************************************ */
// const red    = document.getElementById('red');
// const blue   = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green  = document.getElementById('green');
// const purple = document.getElementById('purple');
// const violet = document.getElementById('violet');
// const body = document.body;   // document.querySelector('body')

//*********************/
// red.addEventListener('click', ()=>{
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click', ()=>{
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click', ()=>{
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click', ()=>{
//     body.style.backgroundColor = 'purple';
// })

// violet.addEventListener('click',()=>{
//     body.style.backgroundColor = 'violet';
// })

//******************************************************************** */
// const buttons = document.querySelectorAll('button'); // Select all buttons
// const body = document.body;

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         body.style.backgroundColor = button.id; // Set background color to button id
//     });
// });
const root = document.getElementById('root');
root.addEventListener('click', (event)=>{
    console.log(event.target);
    if(event.target.tagName == 'BUTTON'){
        document.body.style.backgroundColor = event.target.id;
    }

})
