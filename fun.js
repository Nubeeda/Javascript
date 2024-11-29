// Function
// Block of code that perform specific task,can be invoked whenever neede
// Function defination
// 1.function Functionname(){
// do some work
// }
// Example 1
// function myFunction(){
//     console.log("l love js");
// }
// // function call
// myFunction();

// Example2

// function jsFunction(msg){
// console.log(msg);
// }
// jsFunction("i love programming");// arguments

// Example 3
// sum 2 nmbers 1 and 3
// function sum(a , b){
//     console.log(a+b);
// }
// sum(30 , 390);
// return value
// function plus(y,x){
//     s = y+x;
//     return s;
// }
// let val = plus(3,5);
// console.log(val);
// function parameter=>like local variables->block scope of function
// Arrow function

// compact way of writting function
// const arrowMul= (a,v)=>{
//     console.log(a*v);
// }

// pactice count vowels in string using function
// function countVowal(str){
//     let count =0;
//     for(let char of str){
// if(char==="a" 
//     ||char==="e"
//      ||char==="i" 
//      ||char==="o" 
//      ||char==="u" ){
//     count++;
// }
//     }
//     return count;
   
// }
// for each over array

// arr.foreach(call backfunction);
// callbackfunction:Here it is a function to execute for each element in the array
// A call back is a function passed as an argument for another function.
// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// }) ;
// higher order function/method
// ans : for each function called higher order function.as a parameter or other function return.

// more method array
// 1.Map
// creates a new array with the results of some operation.the value it's callback
// returns are used to form new arrays.
// 2.filter
// creates a new array of elements that given true for a condition/filter.
// 3.Reduce
// Perform some operations/reduces the array to a single value.It returns to a simgle value
let ar = [1,2,3,4,5];
 const output =ar.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);
// find largest number
let num =[4,5,6];
const reslt= num.reduce((pre,cur)=>{
    return pre > cur ? pre : cur;
});
console.log(reslt);