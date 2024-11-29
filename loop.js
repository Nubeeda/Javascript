// for loop

for(let i= 1;i<=5;i++){
    console.log("Javascript");
}
// ex 2
let a = 50;
let sum=0;
for(let n=1 ;n <=a ; n++){
    sum= sum+n;
}
console.log(sum);
// infinite loop=>never end

// while loop

// let count = 1;
// while(count <=5){
//     console.log("i love programming");
//     count++;
// }

// Do while loop=> at least one time run
let count = 10;
do{
    console.log("i love programming");
    count++;
}while(count <=5);

// for of loop=>use for string and arrays

// let str = "flutter code";
// let size = 0;
// for(let i of str){
//     console.log("i =",i);// iterator->characters
//     size++;
// }console.log("size =",size);

// for in loop =>use for object and arrays

// let student ={
//     name : "Arham",
//     age : 22,
//     cgpa : 4,
//     ispass : true
// };
// for (let key in student){
//     console.log("key =",key,"value =",student[key] );
// }

// practice 1
// print even number 0 to 100
// for(let num = 0;num<=100;num++){
//     if(num%2===0){
//         console.log("num =",num)
//     }
// }

// print odd 

// for(let n = 0;n<=100;n++){
//     if(n%2!==0){
//         console.log("num =",n);
//     }
// }

// practice 2
// game
// let gameNum = 39;
// let usernum = prompt("you entered the gussed number");
// while(userNum != gameNum){
//     userNum = prompt(" wrong number : guess again"); 
// }
// console.log("congratulations: you entered the right number");

// String

// 1.Template literials
// A way to have embadded expression in string
let obj={
    item : "Laptop",
    price : 50000,
}
console.log("The cost of",obj.item,"is",obj.price,"rupees");//simple way
// 1. string interpolation=> ${expression} to create string
//  by doing subsituation of plcehlolders
let output = (`The cost of ${obj.item} is ${obj.price} rupees`);//Template way
console.log(output);
// escape character=>\n use for next line

// String methods
// string are immutable in javascript could't change the original 
// value create a new variables for changing
// uppercase
let str ="i love programming";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);
// toLowercase
let low = "PROGRAMMING";
low = low.toLowerCase();
console.log(low);
// str.trim =>remove whitespace
let val = "     collage   ";
val=val.trim();
console.log(val);
// str.slice(start,end?)=>returns part of string
// str1.concat(str2)=>join str2 with str1
// str.replace(searchVal,newVal)
// str.charAt(idx)



