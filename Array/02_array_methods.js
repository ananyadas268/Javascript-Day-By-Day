let arr=[1,2,3,4,5];
//map-tranfer each elemnt
let doubled=arr.map(num=>num*2);
console.log(doubled)
//filter=fitered according to the condition
let even=arr.filter(num=>num%2==0);
console.log(even)
//reduce->single value
let sum=arr.reduce((acc,curr)=>acc+curr,0);
console.log(sum)
//find->firstmatch
let found=arr.find(num=>num>3)
console.log(found)
