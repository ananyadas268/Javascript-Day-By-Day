// ==============================
// ARRAY BASICS
// ==============================

let arr = [10, 20, 30, 40];

console.log(arr);           // [10,20,30,40]
console.log(arr.length);    // 4
console.log(arr[0]);        // 10

// modify
arr[1] = 50;
console.log(arr);           // [10,50,30,40]


// ==============================
// LOOPING THROUGH ARRAY
// ==============================

// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for...of (cleaner)
for (let value of arr) {
    console.log(value);
}


// ==============================
// ADD / REMOVE ELEMENTS
// ==============================

let nums = [1, 2, 3];

// add at end
nums.push(4);

// remove from end
nums.pop();

// add at beginning
nums.unshift(0);//[1,2,3] => [0,1,2,3]

// remove from beginning
nums.shift();//[0,1,2,3] => [1,2,3]

console.log(nums);


// ==============================
// SLICE vs SPLICE (IMPORTANT)
// ==============================

let data = [1, 2, 3, 4, 5];

// slice → no change in original
let sliced = data.slice(1, 4);
console.log(sliced); // [2,3,4]

// splice → modifies original
data.splice(1, 2); // remove 2 elements
console.log(data); // [1,4,5]


// ==============================
// MAP (transform)
// ==============================

let numbers = [1, 2, 3];

let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2,4,6]


// ==============================
// FILTER (select)
// ==============================

let even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2]


// ==============================
// REDUCE (combine)
// ==============================

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6


// ==============================
//FIND / FINDINDEX
// ==============================

let found = numbers.find(n => n > 1);
console.log(found); // 2

let index = numbers.findIndex(n => n === 2);
console.log(index); // 1


// ==============================
// INCLUDES
// ==============================

console.log(numbers.includes(2)); // true


// ==============================
//SORT (IMPORTANT)
// ==============================

let arr2 = [5, 2, 9, 1];

// ascending
arr2.sort((a, b) => a - b);

// descending
arr2.sort((a, b) => b - a);

console.log(arr2);


// ==============================
// REVERSE
// ==============================

arr2.reverse();
console.log(arr2);


// ==============================
// FLATTEN ARRAY
// ==============================

let nested = [1, [2, [3, 4]]];

let flat = nested.flat(Infinity);
console.log(flat); // [1,2,3,4]


// ==============================
// REMOVE DUPLICATES
// ==============================

let dup = [1, 2, 2, 3, 3, 4];

let unique = [...new Set(dup)];
console.log(unique); // [1,2,3,4]


// ==============================
// PRACTICAL FUNCTIONS
// ==============================

// Reverse array (manual)
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseArray([1,2,3]));


// Find max
function findMax(arr) {
    let max = -Infinity;

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

console.log(findMax([10, 50, 30]));


// Count frequency
function countFreq(arr) {
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return freq;
}

console.log(countFreq([1,2,2,3]));


// Move zeros to end
function moveZeros(arr) {
    let nonZero = arr.filter(n => n !== 0);
    let zeros = arr.filter(n => n === 0);

    return [...nonZero, ...zeros];
}

console.log(moveZeros([0,1,0,3,12]));


// ==============================
// IMPORTANT NOTES
// ==============================

// Arrays are NON-PRIMITIVE (reference type)

let a = [1,2];
let b = a;

b.push(3);

console.log(a); // [1,2,3] 


// To copy array properly:
let c = [...a];
c.push(4);

console.log(a); // [1,2,3]
console.log(c); // [1,2,3,4]