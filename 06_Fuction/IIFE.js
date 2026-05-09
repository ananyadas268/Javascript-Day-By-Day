//IIFE- Immediately Invoked Function Expression
//It is a function that runs as soon as it is defined
//developers used IIFE to avoid polluting global scope.
//Normal function
function desc(){
    console.log("This is an IIFE");
}
//desc()
//Example of IIFE
(
    function(){
        console.log("This is an IIFE");
    }
)();
//IIFE with Arrow function
(()=>{
    console.log("This is an IIFE with Arrow function");
})();
//IIFE with parameters
((name)=>{
    console.log(`Hello ${name}, This is an IIFE with parameters`);
}

)("Ananya");
