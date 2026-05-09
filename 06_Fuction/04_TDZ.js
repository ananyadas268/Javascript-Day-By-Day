
//function print(){
//    console.log(num);
//}
//print();
//let num=10; 
//Reference error
function print(){
    console.log(num);
}
print();
var num=50;
//but here it is showing undefined
// ==========================================
// JAVASCRIPT EXECUTION PHASES
// ==========================================

// JavaScript works in 2 phases:

// 1. Memory Creation Phase
// 2. Execution Phase



// ==========================================
// MEMORY CREATION PHASE
// ==========================================

// Before executing code,
// JavaScript scans variables and functions.

// ------------------------------------------
// With var
// ------------------------------------------

var a = 10;

// During Memory Creation Phase:
// JavaScript stores:

// a → undefined

// So memory already exists before execution.

// During Execution Phase:

console.log(a);

// Output:
// undefined

// Then:
a = 10;



// ==========================================
// WITH let / const
// ==========================================

let b = 20;

// JavaScript DOES create memory for b.

// BUT:

// It keeps the variable inside a special state called:

// TEMPORAL DEAD ZONE (TDZ)

// Meaning:

// Variable exists internally
// BUT cannot be accessed yet

// until execution reaches declaration line.


// Example:

// console.log(b);  ReferenceError

let c = 30;

console.log(c);



// ==========================================
// VISUAL UNDERSTANDING
// ==========================================


// ---------- var ----------

// Memory Phase:
// a = undefined

// Execution Phase:
// console.log(a) → undefined
// a = 10



// ---------- let ----------

// Memory Phase:
// b = TDZ

// Execution Phase:
// console.log(b) → ERROR
// b = 20



// ==========================================
// WHAT IS TEMPORAL DEAD ZONE?
// ==========================================

// TDZ is the time between:

// Variable creation
//        ↓
// Actual declaration line execution

// During this period:
// Variable exists
// BUT cannot be used



// ==========================================
// TDZ EXAMPLE
// ==========================================

{
    // x exists internally
    // but is inside TDZ

    // console.log(x);  Error

    let x = 5;

    console.log(x);
}



// ==========================================
// IMPORTANT DIFFERENCE
// ==========================================

// var:
// Accessible before declaration
// because it stores undefined

// let / const:
// Not accessible before declaration
// because of TDZ



// ==========================================
// WHY TDZ EXISTS
// ==========================================

// TDZ helps prevent bugs
// and forces safer code writing.

// This is one reason modern JavaScript
// prefers let and const over var.