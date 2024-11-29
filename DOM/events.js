// Events
// The change in the state of an object is known as an event
// Events are fired ti notify code of "interesting changes" that may affact code execution.
// .Mouse events(click,double click etc).
// . Keyboard events(keypress,keyup,keydown)
// .Form events(submit etc)
// .Print event & many more
// let btn1= document.querySelector("#btn1");
// btn1.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// console.log("hello btn");
// a = 10;
// a++;
// console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you'r inside of box")
// }
// Event object
// It is special object that has details abhout the event.
// All event handlers have access t the event object properties and mmethods.
// node.event = (e)=>{
    // handle here
    // }
    // e.target,e.type,e.clientX,e.clientY
    // 
    // Event listeners
    // node.addEventListener(event,callback)
    // node.removeEventListener(event,callback)
    let modeb = document.querySelector("#mode");
    let body = document.querySelector("body");
    let currmode = "light";
    modeb.addEventListener("click",()=>{
        if(currmode==="light"){
            currmode= "dark";
            body.classList.add("dark");
            body.classList.remove("light");
        }else{
            currmode= "light";
            body.classList.add("light");
            body.classList.remove("dark");
        }
        console.log(currmode);
    })
