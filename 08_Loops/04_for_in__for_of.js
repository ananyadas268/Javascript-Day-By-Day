//for of
const arr = [10, 20, 30, 40, 50];
for(let num of arr){
    //console.log(num);
}
const greetings="Namaste";
for (const greet of greetings){
    //console.log(greet);
}

//maps

const map = new Map();
map.set("name", "Ananya");
map.set("age", 20);
map.set("city", "Delhi");
//console.log(map);
for(const[key,value]of map){
    //console.log(key, value);
}
//for( const key in map){
//  console.log(key, map[key]);
//we can not use for in loop in case of map}
const myObject={
    name:"Ananya",
    age:20,
    city:"Delhi"
};
//for(const[key,value]of  myObject){
    //console.log(key, value);
//}//we can  not use for of loop in case of object


//for in loop is used for objects
for(const key in myObject){
    console.log(key, myObject[key]);
}


const programmingLanguages = ["JavaScript", "Python", "Java", "C++","Ruby","Go","Swift","Kotlin","PHP","TypeScript"];
for (const index in programmingLanguages){
    console.log(index, programmingLanguages[index]);
}

// ============================================
// for...in vs for...of vs map()
// ============================================


// ============================================
// for...of LOOP
// ============================================

// for...of is used for ITERABLES.

// Works with:
// Arrays
// Strings
// Maps
// Sets

const arr = [10,20,30];

for(let value of arr){
    console.log(value);
}

/*
Output:
10
20
30
*/


// ============================================
// WHY for...of DOES NOT WORK ON OBJECTS
// ============================================

const user = {
    name: "Ananya",
    age: 21
};

// This gives error

/*
for(let value of user){
    console.log(value);
}
*/

/*
Error:
TypeError: user is not iterable
*/


// ============================================
// OBJECTS ARE NOT ITERABLE
// ============================================

// Objects store data as:

/*

key : value

*/

// Example:

const student = {
    name: "Rahul",
    age: 20
};


// ============================================
// for...in LOOP
// ============================================

// for...in is mainly used for OBJECTS.

for(let key in student){
    console.log(key);
}

/*
Output:
name
age
*/


// ============================================
// GETTING VALUES FROM OBJECT
// ============================================

for(let key in student){
    console.log(student[key]);
}

/*
Output:
Rahul
20
*/


// ============================================
// for...in WITH ARRAYS
// ============================================

// Technically works
// but not recommended.

const nums = [1,2,3];

for(let index in nums){
    console.log(index);
}

/*
Output:
0
1
2

It gives indexes,
NOT values.
*/


// ============================================
// BETTER WAY FOR ARRAYS
// ============================================

for(let value of nums){
    console.log(value);
}

/*
Output:
1
2
3
*/


// ============================================
// map() METHOD
// ============================================

// map() works only on arrays.

// It creates a NEW array.

const numbers = [1,2,3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

/*
Output:
[2,4,6]
*/


// ============================================
// WHY map() DOES NOT WORK ON OBJECTS
// ============================================

const person = {
    name: "Ananya",
    age: 21
};

// This gives error

/*
person.map(value => value);
*/

/*
Error:
person.map is not a function
*/


// ============================================
// HOW TO USE map() WITH OBJECTS
// ============================================

// Convert object into array first.

Object.keys(person).map(key => {
    console.log(key);
});

/*
Output:
name
age
*/


// ============================================
// Object.values()
// ============================================

Object.values(person).map(value => {
    console.log(value);
});

/*
Output:
Ananya
21
*/


// ============================================
// Object.entries()
// ============================================

Object.entries(person).map(entry => {
    console.log(entry);
});

/*
Output:
["name", "Ananya"]
["age", 21]
*/


// ============================================
// FINAL SUMMARY
// ============================================

/*

for...of
---------
Used for iterable values
(mainly arrays)

for...in
---------
Used for object keys

map()
-----
Works only on arrays
and returns new array

Objects are NOT iterable
so for...of does not work directly.

Objects do NOT have map()
because map() is an array method.

*/