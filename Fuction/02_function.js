//passing arrays in function;
const prices=[10,2,35,40,55,6];
function calculatePrice(newarr){
    let total=0;
    for (num of newarr)
        total+=num;
    return total;
}
console.log(calculatePrice(prices));

//passing object to function
const user={
    name:"Ananya",
    roll:108
}
function showUser(obj){
    console.log(obj.name);
}

showUser(user);

//Passing Object Directly
const printInfo = (obj) => {
    console.log(obj.name);
    console.log(obj.city);
};

printInfo({
    name: "Rahul",
    city: "Kolkata"
});

//Using Object Destructuring in Function
const newuser = {
    name: "Ananya",
    age: 21
};

const showDetails = ({name, age}) => {
    console.log(name);
    console.log(age);
};

showDetails(newuser);


//Objects Are Passed by Reference
function nameChange(obj){
    obj.name="Rahul";
}
nameChange(newuser);
console.log(newuser.name);