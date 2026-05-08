//singleton
// object constructor
//Object.create() method

// object literals
const person ={
    name: "John",
    age: 30,
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
}
//console.log(person.name)
//console.log(person["name"])
//person.greet();
//Interview question 
//how to use symbol in object
let mysym=Symbol("key1");

const jsuser={
    [mysym]:"value1"
}
//console.log(typeof mysym)
//console.log(typeof person);
//console.log(person)

//freeze object
/*lock an object so nobody can change it.

After freezing:

cannot add properties
cannot delete properties
cannot modify existing properties*/
const user={
    name:"Ananya",
    age: 21
};
Object.freeze(user);
//turns object into read-only mode.
//user.name="Rohit Sharma";
//console.log(user.name) // Ananya
jsuser.greeting=function(){
    console.log("Hello");
}
console.log(jsuser.greeting) //undefined
console.log(jsuser.greeting())

