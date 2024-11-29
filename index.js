console.log("wellcome to javascript")

//variables
age=23;
//know it's empty called null
x=null;
//don't know called undefined
y=undefined;
//bolean value true and false
isFollow= true;
isfalse = false;
console.log(isFollow)
// = means assignment operator
/*Variable Rules
1.variable means case sensitive a and A is different.
2. Only letters,digits,underscore_,and $ is allowed.(not even space)
3.Only letters, underscore_ and $ should be first characters
4.Reserved name can't be variables names.*/
//camel case 
//first letter small and 2nd letter is capital called camel case.
// let, const, var=>
//these key words define variables
let fullName = "Amar";
console.log(fullName);


//Data type
//1.primitive data type
//String, Bolean,nmber,undefined,null,BigInt,Symbol
//2. Non premitive
//objects=>it is a collection of value
const Student={
fullName :"Ahmad",
age : 23,
cgpa : 3.3,
ispass: true,

};
console.log(Student);
//obj[""]
//obj.name ya
console.log(Student["age"]);
//or
console.log(Student.age);
//update object values
Student["age"] = Student["age"]+ 1;
console.log(Student.age);
 

