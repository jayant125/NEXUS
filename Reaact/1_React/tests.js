// Create element through js

// For Render
const ReactDom = {
    render: function (element, root){
        root.append(element);
    }
}

// For Create Element
const React = {
    createElement: function (tag,style,childern) {
        const element = document.createElement(tag);
        
        element.innerText = childern;

        for(let key in style){
            element.style[key] = style[key];
        }
        return element;
    }
}

const header1 = React.createElement('h1',{fontsize:'20px',color:'white',backgroundColor:'blue'},"Hello Coder Army");


// const header1 = document.createElement('h1');
// header1.innerText = "Hello coder army";
// header1.style.backgroundColor = 'blue';
// header1.style.fontSize = '20px'
// header1.style.color = 'white';
