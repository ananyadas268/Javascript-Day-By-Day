// ============================================
// JAVASCRIPT FOR LOOP
// ============================================

// A for loop is used to run code multiple times.

// Syntax:

for(let i = 1; i <= 5; i++){
    console.log(i);
}

/*
Explanation:

let i = 1      -> starting value
i <= 5         -> condition
i++            -> increment

Output:
1
2
3
4
5
*/


// ============================================
// PRINT NUMBERS 1 TO 10
// ============================================

for(let i = 1; i <= 10; i++){
    console.log(i);
}


// ============================================
// PRINT EVEN NUMBERS
// ============================================

for(let i = 2; i <= 10; i += 2){
    console.log(i);
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
// BREAK STATEMENT
// ============================================

// break stops the loop completely.

for(let i = 1; i <= 10; i++){

    if(i === 5){
        break;
    }

    console.log(i);
}

/*
Output:
1
2
3
4

When i becomes 5,
loop stops immediately.
*/


// ============================================
// CONTINUE STATEMENT
// ============================================

// continue skips current iteration only.

for(let i = 1; i <= 5; i++){

    if(i === 3){
        continue;
    }

    console.log(i);
}

/*
Output:
1
2
4
5

3 is skipped.
Loop continues normally.
*/


// ============================================
// DIFFERENCE BETWEEN BREAK AND CONTINUE
// ============================================

/*

break:
-------
Stops entire loop.

continue:
----------
Skips current iteration only.

*/


// ============================================
// USING BREAK AND CONTINUE TOGETHER
// ============================================

for(let i = 1; i <= 10; i++){

    if(i === 3){
        continue;
    }

    if(i === 7){
        break;
    }

    console.log(i);
}

/*
Output:
1
2
4
5
6

3 skipped because of continue
Loop stopped at 7 because of break
*/


// ============================================
// INFINITE LOOP
// ============================================

// Be careful with this.

for(;;){
    console.log("Hello");
}

/*
This runs forever because
there is no stopping condition.
*/


// ============================================
// NESTED FOR LOOP
// ============================================

// Loop inside another loop.

for(let i = 1; i <= 3; i++){

    for(let j = 1; j <= 2; j++){

        console.log(i, j);

    }

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
// COMMON MISTAKE 1
// ============================================

// Forgetting increment

for(let i = 1; i <= 5; ){
    console.log(i);
}

/*
Infinite loop happens because
i never changes.
*/


// ============================================
// COMMON MISTAKE 2
// ============================================

for(let i = 1; i >= 5; i++){
    console.log(i);
}

/*
Loop never runs because
condition is false initially.
*/


// ============================================
// REAL LIFE ANALOGY
// ============================================

/*

break:
------
Searching friend in class.
Friend found?
STOP searching.

continue:
---------
Teacher taking attendance.
One student absent?
Skip and move to next student.

*/


// ============================================
// FINAL SUMMARY
// ============================================

/*

for loop:
----------
Used to repeat code.

break:
-------
Stops loop completely.

continue:
----------
Skips current iteration.

nested loop:
-------------
Loop inside another loop.

infinite loop:
--------------
Loop that never ends.

*/