# JavaScript Execution Context (Super Easy README)

# What Is Execution Context?

Execution Context means:

> The environment where JavaScript runs your code.

Before JavaScript executes your code:

* it prepares memory
* stores variables
* stores functions
* creates a workspace

That workspace is called:

# Execution Context

---

# Real Life Analogy

Imagine JavaScript is a chef.

Before cooking:

* chef arranges ingredients
* keeps utensils ready
* prepares workspace

THEN cooking starts.

Same in JavaScript:

Before code runs:

* memory gets prepared
* variables are stored
* functions are stored

THEN execution starts.

---

# Types of Execution Context

There are mainly 2 types:

| Type                             | Meaning                             |
| -------------------------------- | ----------------------------------- |
| Global Execution Context (GEC)   | Created when JS starts running file |
| Function Execution Context (FEC) | Created every time a function runs  |

---

# 1. Global Execution Context (GEC)

When JavaScript starts a file:

```javascript
console.log("Hello");
```

JavaScript FIRST creates:

# Global Execution Context

Only ONE global execution context exists for one JS program.

---

# Every Execution Context Has 2 Phases

This is the MOST IMPORTANT PART.

Every execution context works in 2 phases:

1. Memory Creation Phase
2. Execution Phase

---

# PHASE 1 → Memory Creation Phase

JavaScript scans the whole code first.

It allocates memory for:

* variables
* functions

---

# Example 1

```javascript
var a = 10;

function greet(){
    console.log("Hello");
}

console.log(a);

greet();
```

---

# Step 1 → Memory Creation Phase

JavaScript scans entire code.

Internally memory becomes:

| Name  | Stored Value             |
| ----- | ------------------------ |
| a     | undefined                |
| greet | full function definition |

So internally:

```javascript
a → undefined

greet → function(){...}
```

---

# Important Rule

## Variables with `var`

During memory phase:

```javascript
var a = 10;
```

becomes:

```javascript
a → undefined
```

---

## Functions

Functions are stored COMPLETELY in memory.

Example:

```javascript
function greet(){
    console.log("Hello");
}
```

Stored fully.

That is why functions can be called before declaration.

---

# PHASE 2 → Execution Phase

Now JavaScript starts executing code line by line.

---

# Line-by-Line Execution

## Line 1

```javascript
var a = 10;
```

Earlier:

```javascript
a → undefined
```

Now:

```javascript
a → 10
```

---

## Function Declaration

```javascript
function greet(){
    console.log("Hello");
}
```

Already stored in memory.

So JS skips it during execution.

---

## Next Line

```javascript
console.log(a);
```

Output:

```javascript
10
```

---

## Next Line

```javascript
greet();
```

Now JavaScript creates:

# Function Execution Context

because a function is being called.

---

# Function Execution Context (FEC)

Every time a function runs:

```javascript
hello();
```

JavaScript creates:

* new memory
* new execution phase
* separate environment

This is called:

# Function Execution Context

---

# Call Stack

Execution contexts are managed using:

# Call Stack

Think of it as:

> A stack that stores currently running execution contexts.

JavaScript uses:

# LIFO

Last In First Out

---

# Example 2

```javascript
function one(){
    two();
}

function two(){
    console.log("Two");
}

one();
```

---

# Step-by-Step Call Stack

## Step 1

Global Execution Context enters stack.

```text
[GEC]
```

---

## Step 2

```javascript
one();
```

Now new execution context added.

```text
[one()]
[GEC]
```

---

## Step 3

Inside `one()`:

```javascript
two();
```

New execution context created.

```text
[two()]
[one()]
[GEC]
```

---

## Step 4

`two()` finishes.

Removed from stack.

```text
[one()]
[GEC]
```

---

## Step 5

`one()` finishes.

```text
[GEC]
```

---

## Step 6

Global execution finishes.

Stack becomes empty.

---

# Visual Representation

```text
| two() |
| one() |
| GEC   |
```

Top executes first.

---

# Hoisting

Execution context explains hoisting.

---

# Example 3

```javascript
console.log(a);

var a = 5;
```

Output:

```javascript
undefined
```

---

# Why?

During memory phase:

```javascript
a → undefined
```

So variable already exists before execution.

This behavior is called:

# Hoisting

---

# Important Point

Hoisting does NOT mean:

> variable physically moves upward.

Wrong understanding.

Real meaning:

> Memory is allocated before execution.

---

# `let` and `const`

Many beginners think:

> let and const are not hoisted

Wrong.

They ARE hoisted.

BUT:

They stay inside:

# Temporal Dead Zone (TDZ)

until initialization.

---

# Example 4

```javascript
console.log(a);

let a = 10;
```

Output:

```javascript
ReferenceError
```

---

# Why Error Happens?

During memory phase:

Memory is allocated.

BUT variable cannot be accessed yet.

That inaccessible time is:

# Temporal Dead Zone

---

# Difference Between `var`, `let`, and `const`

| Keyword | Memory Phase               |
| ------- | -------------------------- |
| var     | initialized as undefined   |
| let     | allocated but inaccessible |
| const   | allocated but inaccessible |

---

# Function Declaration vs Function Expression

VERY IMPORTANT interview topic.

---

# Function Declaration

```javascript
hello();

function hello(){
    console.log("Hi");
}
```

Works perfectly.

---

# Why?

Because during memory phase:

```javascript
hello → full function
```

So function already exists before execution.

---

# Function Expression

```javascript
hello();

var hello = function(){
    console.log("Hi");
}
```

Output:

```javascript
TypeError: hello is not a function
```

---

# Why?

During memory phase:

```javascript
hello → undefined
```

NOT the function.

Function assignment happens later during execution.

---

# Important Internal Structure

Each execution context contains:

1. Memory Component
2. Code Component

---

# Memory Component

Stores:

* variables
* functions

---

# Code Component

Executes code line-by-line.

---

# JavaScript Is Single Threaded

JavaScript executes:

# One thing at a time

Only ONE command runs at a moment.

Only ONE call stack exists.

---

# Example 5

```javascript
while(true){}
```

Browser freezes.

Why?

Because call stack never becomes empty.

JavaScript keeps running infinite loop.

---

# Full Flow of JavaScript Execution

## Step 1

Global Execution Context created.

---

## Step 2

Memory Creation Phase runs.

* variables get memory
* functions stored

---

## Step 3

Execution Phase starts.

Code runs line-by-line.

---

## Step 4

Whenever function called:

New Function Execution Context created.

---

## Step 5

Function pushed into Call Stack.

---

## Step 6

After function finishes:

Execution context removed from stack.

---

# Super Important Beginner Mistake

Beginners try to memorize separately:

* hoisting
* closures
* scope
* TDZ
* call stack

Bad approach.

All these concepts are connected to:

# Execution Context

If execution context becomes clear:

* hoisting becomes easy
* closures become easier
* scope becomes easier
* async JS becomes easier later

---

# Quick Revision

## Execution Context

Environment where JavaScript runs code.

---

## Types

1. Global Execution Context
2. Function Execution Context

---

## Two Phases

### Memory Creation Phase

* variables stored
* functions stored

### Execution Phase

* code executes line-by-line

---

# `var`

During memory phase:

```javascript
undefined
```

---

# Functions

Stored fully in memory.

---

# `let` and `const`

Hoisted BUT inside TDZ.

---

# Call Stack

Manages execution contexts.

Uses:

# LIFO

Last In First Out.

---

# Final Mental Model

JavaScript always does:

```text
1. Create execution context
2. Allocate memory
3. Execute code
4. Create new contexts for functions
5. Manage everything using call stack
```

Once you deeply understand this, JavaScript stops looking magical.

A lot of confusing behavior suddenly starts making sense.
