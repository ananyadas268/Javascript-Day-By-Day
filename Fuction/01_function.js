let name="Ananya";
//1.Function with parameters
function greet(name){
    console.log(`Hello ${name}`);
}
greet(name)

//2.Function with return value
function add(a,b){
    return a+b
}
console.log(add(5,10));

//3.Arrow Function (Modern JavaScript)
const mult=(a,b)=>{
    return a*b;
}
console.log(mult(5,10));

const square=(num)=>num*num;
console.log(square(5));

const checkEven=(num)=>num%2===0;
console.log(checkEven(4));

//arrays plus arrow function
const numbers=[1,2,3,4,5];
const squares=numbers.map(num=>num*num);
console.log(squares);
let sum=0;
sum=numbers.reduce((total,num)=>total+num,0);
console.log(sum);

//4.Function with default parameters
function greet(name="Guest"){
    console.log(`Hello ${name}`);
}
greet();
greet("Ananya");

//rest parameters
function add(...numbers){
    let total=0;
    for(let num of numbers){
        total+=num;
    }
    return total;
}
const ans=add(2,3,4,5,6);
console.log(ans);