const user = {
    username: "Ananya",
    price: 108,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function welcome(){
//     let username = "Ananya"
//     console.log(this.username);
// }

// welcome()

// const welcome = function () {
//     let username = "Ananya"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Ananya"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Ananya"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()