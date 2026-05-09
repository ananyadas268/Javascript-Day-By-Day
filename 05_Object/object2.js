const tinderUser = new Object();
console.log(tinderUser) ;
tinderUser.id="123abc";
tinderUser.name="Ananya";
tinderUser.isLoggedIn=true;
//console.log(tinderUser)
const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ananya",
            lastname:"Das"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

const obj4={...obj1, ...obj2};
console.log(obj4);
//objects in array
const users=[
    {id:1, name:"Ananya"},
    {id:2, name:"Rohit"},
    {id:3, name:"Suresh"}
]
console.log(users[0].name);
console.log(Object.keys(users[0]));
console.log(Object.values(users[0]));
console.log(Object.entries(users[0]));

console.log(tinderUser.hasOwnProperty("isLoggedIn")) //true