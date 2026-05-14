# Web APIs in JavaScript

## 📌 Introduction

JavaScript is a **single-threaded programming language**, meaning it can execute only **one task at a time**.

But modern websites can:
- fetch data from servers
- wait for timers
- respond to button clicks
- access device location
- store data in browser

How is this possible if JavaScript can do only one thing at a time?

The answer is:

# ✅ Web APIs

Web APIs allow JavaScript to perform asynchronous and browser-related operations without blocking the main thread.

---

# 🧠 What are Web APIs?

Web APIs are features provided by the **browser environment**.

They are NOT part of JavaScript itself.

Browsers like:
- Chrome
- Firefox
- Edge
- Safari

provide these APIs so JavaScript can interact with the browser and perform asynchronous tasks.

---

# ✅ Simple Definition

```txt
Web APIs are browser-provided features that allow JavaScript
to perform asynchronous and browser-related tasks.
```

---

# ⚠ Important Point

Many beginners think:

```txt
setTimeout() and fetch() are JavaScript features
```

❌ This is WRONG.

These are actually:

```txt
Browser Web APIs
```

JavaScript alone does NOT contain:
- `setTimeout`
- `fetch`
- DOM methods
- localStorage

The browser provides them.

---

# 🏗 Browser Architecture

JavaScript works together with:
- JavaScript Engine
- Web APIs
- Callback Queues
- Event Loop

---

# 🧩 Common Web APIs

| Web API | Purpose |
|---|---|
| `setTimeout()` | Run code later |
| `setInterval()` | Run code repeatedly |
| `fetch()` | Fetch data from internet |
| DOM API | Access HTML elements |
| `localStorage` | Store data in browser |
| Geolocation API | Get user location |
| Notification API | Show notifications |
| WebSocket API | Real-time communication |

---

# 1️⃣ setTimeout() Web API

`setTimeout()` allows code to execute after a delay.

---

# Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```

---

# Step-by-Step Execution

## Step 1

```js
console.log("Start");
```

Output:

```txt
Start
```

---

## Step 2

`setTimeout()` enters the Call Stack.

The browser sends timer handling to Web API.

```txt
Browser starts 2-second timer
```

JavaScript continues execution immediately.

---

## Step 3

```js
console.log("End");
```

Output:

```txt
End
```

---

## Step 4

After 2 seconds:
- callback moves to Task Queue
- Event Loop pushes it into Call Stack

Output:

```txt
Hello
```

---

# Final Output

```txt
Start
End
Hello
```

---

# 📌 Important Concept

JavaScript does NOT wait for the timer.

The browser handles the timer separately using Web APIs.

---

# 2️⃣ fetch() Web API

`fetch()` is used to get data from servers.

---

# Example

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

---

# What Happens Internally?

## Step 1
Browser sends HTTP request.

## Step 2
JavaScript continues running other code.

## Step 3
When data arrives:
- Promise callback goes to Microtask Queue

## Step 4
Event Loop executes callback.

---

# Why This Is Important

Without Web APIs:
- JavaScript would freeze while waiting for server response
- websites would become slow and unresponsive

---

# 3️⃣ DOM APIs

DOM APIs allow JavaScript to interact with HTML elements.

---

# Example HTML

```html
<button id="btn">Click Me</button>
```

---

# Example JavaScript

```js
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log("Button Clicked");
});
```

---

# Explanation

These are Web APIs:
- `document.getElementById()`
- `addEventListener()`

JavaScript alone cannot access HTML.

Browser provides DOM APIs.

---

# 4️⃣ localStorage API

Used to store data in browser.

---

# Example

```js
localStorage.setItem("name", "Ananya");

console.log(localStorage.getItem("name"));
```

Output:

```txt
Ananya
```

---

# 5️⃣ Geolocation API

Gets user location.

---

# Example

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
});
```

Browser accesses device GPS/location service.

---

# 🔄 How Web APIs Work with Event Loop

Flow:

```txt
Call Stack
    ↓
Web APIs
    ↓
Queues
(Task Queue / Microtask Queue)
    ↓
Event Loop
    ↓
Call Stack
```

---

# 📌 Web APIs and Queues

Different Web APIs send callbacks to different queues.

| API | Queue Type |
|---|---|
| `setTimeout` | Task Queue |
| `setInterval` | Task Queue |
| DOM Events | Task Queue |
| Promise `.then()` | Microtask Queue |
| `fetch().then()` | Microtask Queue |

---

# 🧠 Microtask Queue vs Task Queue

Microtask Queue has HIGHER priority.

---

# Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

---

# Output

```txt
Start
End
Promise
Timeout
```

---

# Why?

Because:
- Promise callback → Microtask Queue
- setTimeout callback → Task Queue

Microtasks execute first.

---

# ⚠ Important Beginner Confusions

---

# ❓ Are Web APIs part of JavaScript?

❌ No.

They are provided by browser environments.

---

# ❓ Does JavaScript itself handle timers?

❌ No.

Browser Web APIs handle timers.

---

# ❓ Why does JavaScript not freeze during API calls?

Because browser handles async work outside JavaScript Engine.

---

# ❓ Is fetch synchronous?

❌ No.

`fetch()` is asynchronous.

---

# 🧠 Real Life Analogy

Imagine:

- JavaScript = Chef 👨‍🍳
- Web APIs = Kitchen assistants 🧑‍🍳
- Event Loop = Manager 🔄

The chef can cook only one dish at a time.

Assistants help by:
- waiting for timers
- fetching ingredients
- taking customer orders

When work completes:
- assistants notify the manager
- manager gives task back to chef

This is exactly how Web APIs work.

---

# 📌 Browser vs JavaScript

| Feature | JavaScript | Browser |
|---|---|
| Variables | ✅ | ❌ |
| Functions | ✅ | ❌ |
| Objects | ✅ | ❌ |
| setTimeout | ❌ | ✅ |
| fetch | ❌ | ✅ |
| DOM APIs | ❌ | ✅ |

---

# 🚀 Why Web APIs Are Important

Web APIs are essential for:
- Frontend Development
- React Applications
- Backend API calls
- Real-time apps
- User interaction
- Browser storage
- Notifications
- Async programming

---

# 🏁 Conclusion

Web APIs are browser-provided features that make JavaScript powerful.

They help JavaScript:
- perform asynchronous tasks
- interact with web pages
- fetch server data
- handle timers and events

Without Web APIs:
- websites would block
- applications would freeze
- modern web apps would not exist

Understanding Web APIs is one of the most important steps toward mastering JavaScript and asynchronous programming.