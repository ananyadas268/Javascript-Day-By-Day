let inputBox = document.querySelector("#inputBox");//You are grabbing the input field from DOM
//Now you can read/write its value
let buttons = document.querySelectorAll(".button");
//You are grabbing all the buttons from DOM and storing them in a variable called buttons
//This gives a NodeList (like array of buttons)
let string="";
//This is your calculator memory, where you will store the current input as a string. 
// You will update this string as the user clicks on the buttons, and when they click "=", you will evaluate this string as a mathematical expression.
let arr=Array.from(buttons);
//You are converting the NodeList of buttons into an actual array so that you can use array methods on it.
arr.forEach(button=>{
    //You are adding a click event listener to each button. When a button is clicked, 
    // the function inside will be executed.
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){    //Take full expression (e.g. "2+3")
            string=eval(string);                            //eval() calculates → 5
            inputBox.value=string;                            //Show result
        }
        else if(e.target.innerHTML=="AC"){                     //Clear everything
            string="";
            inputBox.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){ //Remove last character
            string = string.substring(0, string.length-1);
            inputBox.value = string;
        }
         else{
            string += e.target.innerHTML;
            inputBox.value = string;
        }
    })
})