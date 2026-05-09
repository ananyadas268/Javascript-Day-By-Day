//JavaScript Beginner Guide: Object Destructuring 
// Object Destructuring

// What is Object Destructuring?

//Object destructuring is a JavaScript feature that allows you to take values from an object and store them into variables easily.

//Instead of writing:

```js
const user = {
  name: "Ananya",
  age: 21,
  city: "Kolkata"
};

const name = user.name;
const age = user.age;
const city = user.city;
```

//You can write:

```js
const user = {
  name: "Ananya",
  age: 21,
  city: "Kolkata"
};

const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

//This is called **object destructuring**.


//# Why Use Destructuring?

//Without destructuring:

```js
console.log(user.name);
console.log(user.age);
console.log(user.city);
```

//With destructuring:

```js
const { name, age, city } = user;
```

Advantages:

//* Less code
//* Cleaner code
//* Easier to read
//* Used heavily in React and APIs


//# Basic Syntax

```js
const { keyName } = objectName;
```

Example:

```js
const student = {
  name: "Rahul",
  roll: 12
};

const { name, roll } = student;

console.log(name);
console.log(roll);
```

Output:

```js
Rahul
12
```

//# How It Actually Works

This:

```js
const { name } = student;
```

//Internally means:

```js
const name = student.name;
```


//# Changing Variable Names

//Sometimes you want a different variable name.

Example:

```js
const user = {
  fullname: "Ananya Das"
};

const { fullname: name } = user;

console.log(name);
```

Output:

```js
Ananya Das
```

Explanation:

//* `fullname` → object key
//* `name` → variable name
 
//# Default Values

//If a property does not exist, you can set a default value.

Example:

```js
const user = {
  name: "Ananya"
};

const { name, age = 18 } = user;

console.log(name);
console.log(age);
```

Output:

```js
Ananya
18
```
/////////////////////////////////////////////////////

//# Nested Object Destructuring

//Objects can contain objects.

Example:

```js
const user = {
  name: "Ananya",
  address: {
    city: "Kolkata",
    pin: 700001
  }
};

const {
  address: { city, pin }
} = user;

console.log(city);
console.log(pin);
```

Output:

```js
Kolkata
700001
```

///////////////////////////////////////////////////////////////////////////////////

//# Destructuring in Function Parameters

//Very commonly used.

Example:

```js
const user = {
  name: "Ananya",
  age: 21
};

function printUser({ name, age }) {
  console.log(name);
  console.log(age);
}

printUser(user);
```

Output:

```js
Ananya
21
```

///////////////////////////////////////////////////////////////////////////////////
// =========================================
// OBJECT DESTRUCTURING COMPLETE PRACTICE
// =========================================

// Basic Object
const user = {
  name: "Ananya",
  age: 21,
  city: "Kolkata"
};

// Basic Destructuring
const { name, age, city } = user;

console.log("Basic Destructuring");
console.log(name);
console.log(age);
console.log(city);

console.log("-------------------");

// Changing Variable Names
const student = {
  fullname: "Rahul Das",
  roll: 12
};

const { fullname: studentName, roll } = student;

console.log("Changing Variable Names");
console.log(studentName);
console.log(roll);

console.log("-------------------");

// Default Values
const employee = {
  empName: "Riya"
};

const { empName, salary = 25000 } = employee;

console.log("Default Values");
console.log(empName);
console.log(salary);

console.log("-------------------");

// Nested Object Destructuring
const person = {
  username: "Ananya",
  address: {
    state: "West Bengal",
    pin: 713101
  }
};

const {
  address: { state, pin }
} = person;

console.log("Nested Destructuring");
console.log(state);
console.log(pin);

console.log("-------------------");

// Function Parameter Destructuring
const product = {
  title: "Laptop",
  price: 50000,
  brand: "HP"
};

function showProduct({ title, price, brand }) {
  console.log("Function Parameter Destructuring");
  console.log(title);
  console.log(price);
  console.log(brand);
}

showProduct(product);

console.log("-------------------");

// Real API-Like Object Example
const apiData = {
  id: 1,
  name: "Ananya",
  email: "ananya@gmail.com",
  company: {
    companyName: "Google",
    location: "Bangalore"
  }
};

const {
  id,
  email,
  company: { companyName, location }
} = apiData;

console.log("API Style Object Destructuring");
console.log(id);
console.log(email);
console.log(companyName);
console.log(location);

console.log("-------------------");

// Common Beginner Mistake Example
const car = {
  brand: "Toyota"
};

// Wrong key name gives undefined
const { model } = car;

console.log("Common Mistake");
console.log(model);

console.log("-------------------");

// Final Combined Example
const movie = {
  movieName: "Inception",
  rating: 9,
  director: {
    directorName: "Christopher Nolan"
  }
};

const {
  movieName,
  rating,
  director: { directorName }
} = movie;

console.log("Final Combined Example");
console.log(movieName);
console.log(rating);
console.log(directorName);