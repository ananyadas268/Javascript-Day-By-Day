# DOM Selection Methods in JavaScript

## Introduction

JavaScript uses DOM selection methods to access HTML elements.

Once elements are selected, we can:

- change text
- change styles
- add events
- remove elements
- create elements dynamically

The most important thing in DOM is understanding:

```text
What type of data each method returns
```

Because that decides:

- whether loops work
- whether `forEach()` works
- whether `map()` works
- whether conversion to array is needed

---

# Example HTML

```html
<h1 id="title">Hello</h1>

<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>

<h2>Heading</h2>
```

---

# 1. getElementById()

## Purpose

Used to select ONE element using id.

---

# Syntax

```javascript
document.getElementById("title")
```

---

# Example

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

---

# Returns

```text
Single HTML Element
```

---

# Why We Use It

Because id should be unique.

Example use cases:

- buttons
- navbar
- forms
- unique sections

---

# Example

```javascript
const btn = document.getElementById("btn");

btn.style.color = "red";
```

---

# Important Point

No loop needed because only one element is returned.

---

# 2. getElementsByClassName()

## Purpose

Used to select multiple elements having same class.

---

# Example HTML

```html
<p class="text">One</p>
<p class="text">Two</p>
<p class="text">Three</p>
```

---

# JavaScript

```javascript
const items = document.getElementsByClassName("text");

console.log(items);
```

---

# Returns

```text
HTMLCollection
```

NOT an array.

---

# What is HTMLCollection?

A collection of HTML elements.

Looks like array:

```javascript
items[0]
items[1]
```

But it is NOT a real array.

---

# Problem

Array methods do not work directly.

Example:

```javascript
items.map(item => item)
```

Error:

```text
items.map is not a function
```

---

# How To Loop HTMLCollection

## Using for loop

```javascript
for(let i = 0; i < items.length; i++){

    console.log(items[i]);

}
```

---

# Convert Into Array

```javascript
const arr = Array.from(items);

arr.map(item => console.log(item));
```

---

# Why Convert To Array?

Because arrays support:

- map()
- filter()
- reduce()

---

# 3. getElementsByTagName()

## Purpose

Selects elements using HTML tag.

---

# Example

```javascript
const headings = document.getElementsByTagName("h1");
```

---

# Returns

```text
HTMLCollection
```

---

# Example HTML

```html
<h1>One</h1>
<h1>Two</h1>
```

---

# Access Elements

```javascript
console.log(headings[0]);
```

---

# 4. querySelector()

## Purpose

Returns FIRST matching element.

---

# Syntax

```javascript
document.querySelector(selector)
```

---

# Select By ID

```javascript
document.querySelector("#title")
```

---

# Select By Class

```javascript
document.querySelector(".text")
```

---

# Select By Tag

```javascript
document.querySelector("h1")
```

---

# Why querySelector() Is Popular

Because one method can handle:

- id
- class
- tag

using CSS selectors.

---

# Returns

```text
First matching element only
```

---

# Example

```html
<p class="text">One</p>
<p class="text">Two</p>
```

```javascript
document.querySelector(".text")
```

Returns:

```text
Only first paragraph
```

---

# 5. querySelectorAll()

## Purpose

Returns ALL matching elements.

---

# Example

```javascript
const paras = document.querySelectorAll(".text");
```

---

# Returns

```text
NodeList
```

---

# Important Point

NodeList is not exactly an array.

But modern NodeList supports:

```javascript
forEach()
```

---

# Example

```javascript
paras.forEach(function(item){

    console.log(item);

});
```

---

# But map() Does Not Work Directly

```javascript
paras.map(item => item)
```

Error occurs.

---

# Convert NodeList Into Array

```javascript
const arr = Array.from(paras);

arr.map(item => console.log(item));
```

---

# HTMLCollection vs NodeList

| HTMLCollection | NodeList |
|---|---|
| Returned by getElements methods | Returned by querySelectorAll |
| Not real array | Not real array |
| Does not support forEach directly | Supports forEach |
| Does not support map | Does not support map |

---

# Why querySelectorAll() Is Preferred

Because it supports powerful CSS selectors.

Example:

```javascript
document.querySelectorAll("div p")
```

Selects:

```text
all p tags inside div
```

---

# When To Use forEach()

Use `forEach()` when:

```text
You simply want to loop through elements
```

---

# Example

```javascript
paras.forEach(function(item){

    item.style.color = "red";

});
```

---

# When To Convert Into Array

Convert into array when you need:

- map()
- filter()
- reduce()

---

# Example

```javascript
const arr = Array.from(paras);

const texts = arr.map(item => item.innerText);

console.log(texts);
```

---

# Difference Between forEach() and map()

| forEach() | map() |
|---|---|
| Used for looping | Used for transformation |
| Returns undefined | Returns new array |
| Mostly used for DOM changes | Used for data manipulation |

---

# Example of forEach()

```javascript
paras.forEach(item => {

    item.style.color = "blue";

});
```

---

# Example of map()

```javascript
const arr = Array.from(paras);

const texts = arr.map(item => item.innerText);

console.log(texts);
```

---

# Modern Developer Preference

Most developers prefer:

```javascript
querySelector()
querySelectorAll()
```

Because:

- cleaner
- flexible
- supports CSS selectors
- easier to scale

---

# Best Mental Model

## Use getElementById()

When:

```text
One unique element is needed
```

---

## Use querySelector()

When:

```text
Need first matching element
```

---

## Use querySelectorAll()

When:

```text
Need multiple elements
```

---

## Use forEach()

When:

```text
Just looping through elements
```

---

## Convert Into Array

When:

```text
Need map/filter/reduce
```

---

# Final Summary

| Method | Returns |
|---|---|
| getElementById() | Single element |
| getElementsByClassName() | HTMLCollection |
| getElementsByTagName() | HTMLCollection |
| querySelector() | First matching element |
| querySelectorAll() | NodeList |

---

# Most Important Thing To Remember

DOM becomes easy once you understand:

```text
What type each method returns
```

That is the core idea behind:

- loops
- forEach
- map
- array conversion
- DOM manipulation