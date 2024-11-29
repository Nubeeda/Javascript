console.log("hello");
//1. starter code
// 2.window object
// The window object represents an open indow in a brower.
//  it is browser object(not javascript)& is automatically 
// creared by browser
// It is global object with lots of properties & methosds. 

// What is DOM?
// When a web page is loaded, the browser creares a Documents Object Model(DOM) of
// the page
// console.log()=>print
// console.dir=>used for object
// console.dir=>documents->properties/methods
console.dir(document.body);
// 1.DOM menipulation
// selecting using Id
let Heading =document.getElementById("heading");
console.dir(Heading);
// Selecting using class
let Headings =document.getElementsByClassName("heading1");
console.dir(Headings);
// Selecting with tags
let para =document.getElementsByTagName("p");
console.dir(para);
// selecting with query selecter=>return node list
// query selecter all

// DOM manipulation properties
// 1.tag name->return tag for element nodes
// 2.innerText:returns the text content of the element and all its children
// 3.textContent:return textual content even for hidden elements.
// 4.innerHTML:reurns the plan text orHTML content in the element.
// Nodes
// 1.text
// 2.comments
// 3.elements
// DOM tree 
// firstchild
// lastchild
// children
// DOM attributes
// 1.getAttribute(attr)
// 2.setAttribute(attr,value)

// Style
// node.style

// Insert elements
// let btn = documents.createElemnts("");
// 1.node.append(el):adds at the end of node(inside)
// 2.node.prepend(el):adds at the start of node(insode)
// 3.node.before(el):adds before the node(ooutside)
// 4.node.after(el):adds after the node(outside)

// Delete elemnts
// node.remove
// appendChild
// removeChild
