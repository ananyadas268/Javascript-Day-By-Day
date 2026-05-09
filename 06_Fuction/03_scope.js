// ==========================================
// GLOBAL SCOPE
// ==========================================

// Variables declared outside functions or blocks
// are called GLOBAL variables.

let globalName = "Ananya";

function showGlobal() {
    console.log("Inside Function:", globalName);
}

showGlobal();

console.log("Outside Function:", globalName);



// ==========================================
// LOCAL SCOPE (FUNCTION SCOPE)
// ==========================================

// Variables declared inside a function
// can only be accessed inside that function.

function localExample() {

    let localAge = 21;

    console.log("Inside Function:", localAge);
}

localExample();

//  Error because localAge only exists inside function
// console.log(localAge);



// ==========================================
// BLOCK SCOPE
// ==========================================

// let and const are block scoped.
// They only exist inside {}.

{
    let city = "Kolkata";
    const country = "India";

    console.log(city);
    console.log(country);
}
// Error because variables are outside block
// console.log(city);
// console.log(country);



// ==========================================
// VAR VS LET
// ==========================================

// var ignores block scope.

{
    var x = 100;
}

console.log("var x:", x); // works



// let follows block scope

{
    let y = 200;

    console.log("Inside Block y:", y);
}

// ❌ Error
// console.log(y);



// ==========================================
// VARIABLE SHADOWING
// ==========================================

// Local variable hides global variable.

let username = "Global User";

function shadowExample() {

    let username = "Local User";

    console.log("Inside Function:", username);
}

shadowExample();

console.log("Outside Function:", username);



// ==========================================
// NESTED SCOPE
// ==========================================

// Inner function can access outer variable.

function outerFunction() {

    let message = "Hello JavaScript";

    function innerFunction() {

        console.log(message);
    }

    innerFunction();
}

outerFunction();



// ==========================================
// SCOPE CHAIN
// ==========================================

// JavaScript searches variable from
// current scope → outer scope → global scope

let a = 10;

function first() {

    let b = 20;

    function second() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    second();
}

first();



// ==========================================
// TEMPORAL DEAD ZONE (IMPORTANT)
// ==========================================

// let and const cannot be accessed
// before initialization.

let num = 50;

function testTDZ() {

    //  Error
    // console.log(num);

    let num = 100;

    console.log(num);
}

testTDZ();



// ==========================================
// GLOBAL POLLUTION EXAMPLE
// ==========================================

// Too many global variables are bad practice.

let data = [];
let total = 0;
let currentUser = "Ananya";

console.log(data);
console.log(total);
console.log(currentUser);



// ==========================================
// BEST PRACTICES
// ==========================================

//  Use const whenever possible
const pi = 3.14;

//  Use let when value changes
let score = 0;

score++;

console.log(score);

//  Avoid var in modern JavaScript



// ==========================================
// PRACTICE QUESTIONS
// ==========================================

// Q1
let q1 = 5;

function question1() {
    console.log(q1);
}

question1();//5



// Q2
function question2() {

    let q2 = 10;

    console.log(q2);
}

question2();//10

// Error
// console.log(q2);



// Q3
{
    const q3 = 50;

    console.log(q3);
}

//  Error
// console.log(q3);



// Q4
var q4 = 100;

{
    var q4 = 200;
}

console.log(q4);



// ==========================================
// FINAL NOTE
// ==========================================

// Global Scope
// → Accessible everywhere

// Local Scope
// → Accessible only inside function

// Block Scope
// → Accessible only inside {}

// let and const follow block scope
// var does not follow block scope