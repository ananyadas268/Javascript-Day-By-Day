//primitive
//7 types:string,Number,boolean,null,undefined,symbol,bigint
let name = "John";
let age = 30;
let isStudent = true;
let x = null;
let y; //undefined

//non primitive
// reference //object,array,function
let person = {
    name: "Alice",
    age: 25
};
let student={
    name: "ANanya",
    age: 23
}
console.log(student.name)
let arr = [1, 2, 3, 4, 5];
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId) //false
const nigNumber=BigInt(1234567890123456789012345678901234567890);
const myFunction=function(){
    console.log("JOGI");
}
myFunction();
console.log(typeof(myFunction))


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//difference between primitive and non primitive
//1.primitive data types are stored in stack memory and non primitive data types are stored in heap memory
//2.primitive data types are immutable and non primitive data types are mutable
//3.primitive data types are passed by value and non primitive data types are passed by reference
//javascript is a dynamically typed language which means we don't need to specify the data type of a variable while declaring it. The data type of a variable is determined at runtime based on the value assigned to it.
let a = 5;
let b = a;
b = 10;
console.log(a);
//a → 5
//b → 5 (separate copy)
//then b=10
//a->5
//b->10
//console.log(a); // 5  
//👉 Primitive = copy of value
//👉 So variables become independent
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1,2,3,4] 
let obj1 = { name: "Ananya" };
let obj2 = obj1;

obj2.name = "Das";

console.log(obj1.name); // DAS
//Objects are non-primitive data types and are assigned by reference.
//  When we do b = a, both variables point to the same memory location. So modifying one object affects the other.