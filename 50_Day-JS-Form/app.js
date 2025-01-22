//||***************EventListener************************||
const form = document.querySelector('form')
// //*****************input*********************||
// form.addEventListener('input',(Event) => {
//     console.log(Event.target.value);
// })
// //*****************change*********************||                                                  //****||
// form.addEventListener('change', (Event)=>{
//     console.log(Event.target.value);
// })
// //*****************focus***********************||
// form.addEventListener('focus',(Event)=>{
//     console.log(Event.target.value);
// })
// //*****************focusin**********************||
// form.addEventListener('focusin',(Event)=>{
//     console.log(Event.target.value);
// })
// //******************focusout********************||
// form.addeventListener('focusout',(Event)=>{
//     console.log(Event.target.value);
// })
// //*****************submit***********************||
// form.addEventListener('submit',(Event)=>{
//     console.log(Event.target.value);
//     console.log("FORM SUBMITTED");
// })
// //****************reset***********************||
// form.addEventListener('reset',(Event)=>{
//     console.log(Event.target.value);
// })
//*****************submit***********************||

// form.addEventListener('submit',(Event)=>{
//     Event.preventDefault();
//     const name = document.getElementById('name');
//     console.log(name.value);
//     const LastName = document.getElementById('LastName');
//     console.log(LastName.value);
//     const age = document.getElementById('age');
//     console.log(age.value);
//     // // Result
//     // const result = document.getElementById('result');
//     // result.innerText = `Hello , ${name.value} ${LastName.value} , you are ${age.value} years old.`;
//     // document.body.append(result);
// })

//*****************formdata***********************||
form.addEventListener('submit',(Event)=>{
    Event.preventDefault();
    const data = new FormData(form);
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));
    for (const [keys,values] of data.entries()) {
        console.log(keys,values);
    }
})
