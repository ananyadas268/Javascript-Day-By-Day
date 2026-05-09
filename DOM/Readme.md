# DOM (Document Object Model) in JavaScript

## Introduction

DOM stands for **Document Object Model**.

When a webpage loads in the browser, the browser converts HTML into a tree-like structure called the DOM.

JavaScript uses the DOM to:

- Access HTML elements
- Change content
- Change styles
- Handle events
- Create and remove elements dynamically

---

# Simple Understanding

HTML page:

```html
<h1>Hello</h1>
```

Browser converts it into:

```text
Document
   |
  html
   |
  body
   |
   h1
```

JavaScript can access and manipulate these elements.

---

# Why DOM is Important

Without DOM:

- JavaScript cannot interact with webpage elements
- No button clicks
- No dynamic updates
- No interactive websites

DOM is the bridge between:

```text
HTML ↔ JavaScript
```

---

# Selecting Elements

JavaScript first needs to select elements.

---

# 1. `getElementById()`

Selects element using `id`.

## HTML

```html
<h1 id="title">Hello</h1>
```

## JavaScript

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

---

# 2. `getElementsByClassName()`

Selects elements using class name.

## HTML

```html
<p class="text">One</p>
<p class="text">Two</p>
```

## JavaScript

```javascript
const para = document.getElementsByClassName("text");

console.log(para);
```

Returns HTMLCollection.

---

# 3. `getElementsByTagName()`

Selects elements using tag name.

```javascript
const headings = document.getElementsByTagName("h1");
```

---

# 4. `querySelector()`

Selects FIRST matching element.

```javascript
const element = document.querySelector(".text");
```

Can use:

- class → `.class`
- id → `#id`
- tag → `h1`

---

# 5. `querySelectorAll()`

Selects ALL matching elements.

```javascript
const elements = document.querySelectorAll(".text");
```

Returns NodeList.

---

# Changing Content

---

# `innerText`

Changes visible text.

```javascript
const heading = document.getElementById("title");

heading.innerText = "Welcome";
```

---

# `innerHTML`

Changes HTML content.

```javascript
heading.innerHTML = "<span>Hello</span>";
```

---

# Difference

| `innerText` | `innerHTML` |
|---|---|
| Text only | Supports HTML tags |

---

# Changing Styles

```javascript
const heading = document.getElementById("title");

heading.style.color = "red";

heading.style.backgroundColor = "yellow";

heading.style.fontSize = "40px";
```

---

# Changing Attributes

---

# `getAttribute()`

```javascript
const link = document.querySelector("a");

console.log(link.getAttribute("href"));
```

---

# `setAttribute()`

```javascript
link.setAttribute("href", "https://google.com");
```

---

# Creating Elements

---

# `createElement()`

```javascript
const newElement = document.createElement("h1");

newElement.innerText = "New Heading";
```

---

# Adding Elements

---

# `appendChild()`

```javascript
document.body.appendChild(newElement);
```

Adds element at end.

---

# Removing Elements

---

# `remove()`

```javascript
newElement.remove();
```

---

# Event Handling

Events mean:

```text
Something user does
```

Examples:

- click
- mouseover
- keypress
- submit

---

# `onclick`

## HTML

```html
<button id="btn">Click</button>
```

## JavaScript

```javascript
const button = document.getElementById("btn");

button.onclick = function(){
    console.log("Button Clicked");
}
```

---

# Better Way → `addEventListener()`

```javascript
button.addEventListener("click", function(){

    console.log("Clicked");

});
```

---

# Why Better?

Because multiple events can be added.

---

# Example → Change Text on Button Click

## HTML

```html
<h1 id="heading">Hello</h1>

<button id="btn">Change</button>
```

## JavaScript

```javascript
const heading = document.getElementById("heading");

const button = document.getElementById("btn");

button.addEventListener("click", function(){

    heading.innerText = "Welcome";

});
```

---

# Traversing the DOM

Moving between elements.

---

# Parent Element

```javascript
const child = document.querySelector("h1");

console.log(child.parentElement);
```

---

# Children

```javascript
const parent = document.querySelector("body");

console.log(parent.children);
```

---

# First and Last Child

```javascript
parent.firstElementChild;

parent.lastElementChild;
```

---

# DOM Tree Structure

```text
document
   |
  html
 /   \
head  body
        |
       div
        |
        p
```

---

# Difference Between HTMLCollection and NodeList

| HTMLCollection | NodeList |
|---|---|
| Returned by getElements methods | Returned by querySelectorAll |
| Live collection | Static collection |

---

# Common Beginner Mistakes

---

# 1. Forgetting `#` in `querySelector`

Wrong:

```javascript
document.querySelector("title");
```

Correct:

```javascript
document.querySelector("#title");
```

---

# 2. Accessing Element Before HTML Loads

Wrong:

```javascript
const btn = document.getElementById("btn");
```

if script loads before HTML.

---

# Solution

Place script at bottom:

```html
<body>

<script src="script.js"></script>

</body>
```

---

# 3. Using `innerHTML` Carelessly

Can create security issues like XSS attacks.

Avoid inserting user input directly.

---

# Real Life Analogy

| DOM Concept | Real Life |
|---|---|
| HTML | House structure |
| DOM | House blueprint |
| JavaScript | Person modifying house |

---

# Mini DOM Project Example

## HTML

```html
<h1 id="text">Hello</h1>

<button id="btn">Change Color</button>
```

---

## JavaScript

```javascript
const text = document.getElementById("text");

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    text.style.color = "red";

});
```

---

# Output

When button clicked:

```text
Text color changes to red
```

---

# Final Summary

| Concept | Purpose |
|---|---|
| DOM | Connects HTML and JavaScript |
| getElementById | Select by id |
| querySelector | Select first matching element |
| innerText | Change text |
| innerHTML | Change HTML |
| style | Change CSS |
| createElement | Create new element |
| appendChild | Add element |
| remove | Delete element |
| addEventListener | Handle events |

---

# Most Important Thing to Remember

DOM is not a separate language.

It is:

```text
Browser's representation of HTML
```

JavaScript simply manipulates it.