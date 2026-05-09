// ==============================
// STRING BASICS
// ==============================

let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello ${str2}`; // template literal

console.log(`${str1} ${str2}`); // Hello World



// ==============================
// STRING LENGTH
// ==============================

let name = "Ananya";
console.log(name.length); // 7


// ==============================
//ACCESS CHARACTERS
// ==============================

console.log(name[0]); // A
console.log(name.charAt(1)); // n


// ==============================
// toUpperCase / toLowerCase
// ==============================

let text = "JavaScript";

console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text.toLowerCase()); // javascript


// ==============================
// trim (IMPORTANT)
// ==============================

let userInput = "   hello   ";
console.log(userInput.trim()); // "hello"


// ==============================
// slice (MOST USED)
// ==============================

let word = "Programming";

console.log(word.slice(0, 6)); // "Progra"
console.log(word.slice(3));    // "gramming"
console.log(word.slice(-4));   // "ming"


// ==============================
// substring
// ==============================

console.log(word.substring(0, 6)); // "Progra"


// ==============================
// replace
// ==============================

let msg = "I love Java";

console.log(msg.replace("Java", "JavaScript"));
// I love JavaScript


// ==============================
// includes (VERY IMPORTANT)
// ==============================

let sentence = "Learning JavaScript is fun";

console.log(sentence.includes("JavaScript")); // true
console.log(sentence.includes("Python")); // false


// ==============================
// startsWith / endsWith
// ==============================

console.log(sentence.startsWith("Learning")); // true
console.log(sentence.endsWith("fun")); // true


// ==============================
// split (VERY IMPORTANT)
// ==============================

let data = "apple,banana,mango";

let arr = data.split(",");
console.log(arr); // ["apple", "banana", "mango"]


// ==============================
//join (array → string)
// ==============================

let fruits = ["apple", "banana", "mango"];

console.log(fruits.join("-")); // apple-banana-mango


// ==============================
// repeat
// ==============================

let star = "*";
console.log(star.repeat(5)); // *****


// ==============================
// concat (not commonly used)
// ==============================

let a = "Hello";
let b = "World";

console.log(a.concat(" ", b)); // Hello World


// ==============================
// TEMPLATE LITERALS (IMPORTANT)
// ==============================

let user = "Ananya";
let age = 21;

console.log(`My name is ${user} and I am ${age} years old`);



// Remove spaces
function removeSpaces(str) {
    return str.split(" ").join("");
}

console.log(removeSpaces("hello world")); // helloworld