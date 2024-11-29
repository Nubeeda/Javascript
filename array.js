// let name =["asad","ahsan","mohsin","zain"];
// console.log(name);
// console.log(name.length);
// looping over array

// let heries = ["bilal","danish","asad","humayo","salman"];
// for(idx=0;idx<heries.length;idx++){
//     console.log(heries[idx]);
// }

// find average of aray

// let marks =[86,78,98,78,67,57,67]
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avarage of array is ${avg}`);

// 10% offer of items price
// using for of loop
// let items= [250,300,350,600,500];
// let i= 0;
// for (let val of items){
//     let offer = val /10;
//     items[i] = items[i] - offer;
//     console.log(`value after price =${items[i]}`);
//     i++;
// }
// using for loop
// let items= [250,300,350,600,500];
// for(i=0;i<items.length;i++){
//     offer = items[i] /10;
//     items[i] -= offer;
// }
// console.log(items);

// Methods
// push=>add to last , pop=>delete from last, to string,concat=>join arrays, unshift=>add to start
// shif=>delete frm start, slice=>returns a piece of array,splice=>change original array(add,remove,replace)

let companies =["bloomberg","Microsoft","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(2,1,"ola");
companies.push("Amazon");
console.log(companies);
