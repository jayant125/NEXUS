const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
// Event Bubbling and Capturing
child.addEventListener('click',()=>{
    console.log('Child clicked');
},false)

parent.addEventListener('click',()=>{
    console.log('parent clicked');
},false)

grandParent.addEventListener('click',(Event)=>{
    console.log('grandParent clicked');
    console.log(Event.currentTarget);
    Event.stopPropagation();
},false)

// addEventListener(first_event, Callback, rollback);
