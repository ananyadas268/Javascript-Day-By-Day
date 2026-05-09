// ============================================
// WHILE LOOP IN JAVASCRIPT
// ============================================

// A while loop runs code
// as long as condition is true.

// Syntax:

let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

/*
Output:
1
2
3
4
5
*/


// ============================================
// HOW WHILE LOOP WORKS
// ============================================

/*

Step 1:
Condition checked

Step 2:
If true → code runs

Step 3:
Increment/decrement happens

Step 4:
Condition checked again

This repeats until condition becomes false.

*/


// ============================================
// PRINT NUMBERS 1 TO 10
// ============================================

let num = 1;

while(num <= 10){
    console.log(num);
    num++;
}


// ============================================
// PRINT EVEN NUMBERS
// ============================================

let even = 2;

while(even <= 10){
    console.log(even);
    even += 2;
}

/*
Output:
2
4
6
8
10
*/


// ============================================
// INFINITE WHILE LOOP
// ============================================

// Be careful.

let x = 1;

while(x <= 5){
    console.log(x);
}

/*
Infinite loop happens because
x is never increasing.
*/


// ============================================
// BREAK IN WHILE LOOP
// ============================================

let a = 1;

while(a <= 10){

    if(a === 5){
        break;
    }

    console.log(a);

    a++;
}

/*
Output:
1
2
3
4

Loop stops completely at 5.
*/


// ============================================
// CONTINUE IN WHILE LOOP
// ============================================

let b = 0;

while(b < 5){

    b++;

    if(b === 3){
        continue;
    }

    console.log(b);
}

/*
Output:
1
2
4
5

3 is skipped.
*/


// ============================================
// DO WHILE LOOP
// ============================================

// do while executes code FIRST
// then checks condition.

// Syntax:

let c = 1;

do{
    console.log(c);
    c++;
}
while(c <= 5);

/*
Output:
1
2
3
4
5
*/


// ============================================
// MAIN DIFFERENCE
// ============================================

/*

while loop:
------------
First checks condition
then runs code.

do while loop:
---------------
First runs code
then checks condition.

*/


// ============================================
// IMPORTANT EXAMPLE
// ============================================

let d = 10;

while(d < 5){
    console.log("While Loop");
}

/*
Nothing prints because
condition is false initially.
*/


let e = 10;

do{
    console.log("Do While Loop");
}
while(e < 5);

/*
Output:
Do While Loop

Runs once even though
condition is false.
*/


// ============================================
// REAL LIFE ANALOGY
// ============================================

/*

while loop:
------------
Before entering exam hall,
security checks admit card.

Condition checked first.

do while loop:
---------------
You enter restaurant first,
then payment checked later.

Code runs first.

*/


// ============================================
// NESTED WHILE LOOP
// ============================================

let i = 1;

while(i <= 3){

    let j = 1;

    while(j <= 2){

        console.log(i, j);

        j++;
    }

    i++;
}

/*
Output:
1 1
1 2
2 1
2 2
3 1
3 2
*/


// ============================================
// COMMON BEGINNER MISTAKES
// ============================================

// Mistake 1:
// Forgetting increment

let p = 1;

while(p <= 5){
    console.log(p);
}

/*
Infinite loop
because p never changes.
*/


// Mistake 2:
// Wrong condition

let q = 10;

while(q < 5){
    console.log(q);
}

/*
Loop never runs
because condition is false.
*/


// ============================================
// WHEN TO USE WHICH LOOP?
// ============================================

/*

for loop:
----------
When number of iterations is known.

while loop:
------------
When iterations are unknown.

do while:
----------
When code must run at least once.

*/


// ============================================
// FINAL SUMMARY
// ============================================

/*

while loop:
------------
Checks condition first.

do while loop:
---------------
Runs code first.

break:
-------
Stops loop completely.

continue:
----------
Skips current iteration.

*/