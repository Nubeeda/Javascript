//Arthimatic operator

// let a = 4;
// let b = 6;
// console.log("a+b =",a+b);
// console.log("a - b =",a-b);
// console.log("a/b =",a/b);

//Modulus
// console.log("a%b =",a%b);

//Exponentiation
// console.log("a**b =",a**b);

//Uniary operator

//increment
// let a = 4;
// let b = 6;
// console.log("a =",4,"b =",6);
// a = a+1;
// //or
// a++;//post
// ++a;//pre
// console.log(a);

//decrement
// let c = 4;
// let v= 6;
// console.log("c =",4,"v =",6);
// c = a-1;
//or
// c--;
// console.log(c);

//Assingment operator
//=, +=, -=,*=
// let a = 4;
// let b = 6;
// a +=5;//a=a+5
// console.log("a +=",a);

// Comparison operator
// == , != ,=!,===,!==, <=,<,>+
// let a = 4;
// let b = 6;
// console.log("a=!b =",a=!b);

// Logical operator

//and,or,isnot
// let a = 4;
// let b = 6;
// let cond1=a>b;
// let cond2 = a===b;
// console.log("a>b =",cond1 && cond2);
// console.log(a>b || a===b);
// console.log(!(a>b));

// Conditional statements

// let age = 15;

// if(age>18){
//     console.log("You can eligible");
// }
// if(age<18){
//     console.log("You can't eligible");
// }

// Example 2
// let mode = "dark";
// let color;
// if(mode==="dark"){
//     color = "dark";
// }
// if(mode==="light"){
//     color = "white";
// }
// console.log(color);

// Even odd nmber

let num = 15;
if(num%3===0){
    console.log("even");
}else{
    console.log("odd");
}

// else if statement
let mode = "dark";
let color;
if(mode==="dark"){
    color = "black";
}else if(mode==="light"){
    color = "light";
}else{
    color= "blue";
}
console.log(color);
// ternary operators

let age = 20;
let result= age > 18? "adult" : "not adult";
console.log(result);

