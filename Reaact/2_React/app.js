const element = React.createElement("h1",{id:"first",className:"Jayant",style:{color:"black",backgroundColor:"red"}},"Hello Coder Army");
const element2 = React.createElement("h1",{id:"second",className:"Jayant",style:{color:"red",backgroundColor:"blue"}},"Namskar");
// If you Want to add both element
const div1 = React.createElement('div',{},[element,element2]);
const ReactRot = ReactDOM.createRoot(document.getElementById('root'));
ReactRot.render(div1);
// ReactRot.render(element);
// ReactRot.render(element2);

{/* <div>
    <div>
        <h1>Hello</h1>
    </div>
</div> */}
// JSX


