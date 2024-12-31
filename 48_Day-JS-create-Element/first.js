// <li>TS</li>

//***************Create an element******************//
// function attach(content){
//       let element = document.createElement('li');
//       element.innerHTML = content;

//       let element2 = document.createElement('li');
//       element2.innerHTML = content+"V2.0";

//       const parent = document.getElementById("root");
//     //   parent.appendChild(element);
//     parent.append(element,element2); // use multiple arguments to append multiple elements at once
// }
// attach("TS");
// attach("React.js");
// attach("Node");

//*****************Create Text Node*****************//
// const text_Node = document.createTextNode("Hello Jayant");
// const parent = document.getElementById("root");
// parent.append(text_Node);

//*****************Create Attribute Node*************/
// const element = document.createAttribute("id");
// element.value = "first";
// const current_list = document.querySelector("li");
// current_list.setAttributeNode(element);
// // access to second list
// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);

//***********Access attribute of Element***********/
// const element = document.getElementById("root");
// console.log(element.getAttribute("id"));
// element.setAttribute("custom","20");
// element.setAttribute("class","Roahn");
// element.removeAttribute("custom");


//||************************Add Node to the Dom**************||

// const parent = document.getElementById("root");
// const element = document.createElement('li');
// element.innerHTML = "TS";
// parent.prepend(element);
// parent.append(element);

// const child2 = parent.children[1];
// // parent.insertBefore(element,child2);
// parent.replaceChild(element,child2);


// const parent = document.getElementById("root");
// // parent.innerHTML += "<li>TS</li>";
// // parent.innerHTML += "<li>React.js</li>";

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";
// // parent.insertAdjacentElement("beforebegin",element);
// // parent.insertAdjacentElement("afterend",element);

//************************Delete Node or Element*****************/
// document.querySelector('li').remove();
// Remove Child Node

