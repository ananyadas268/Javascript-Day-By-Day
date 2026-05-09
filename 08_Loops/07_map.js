//Transforms every element of an array and returns a NEW array.
const nums=[1,2,3,4,5,6,7,8,9,10];
const multBy20=nums.map((nums)=>nums*20);
//console.log(multBy20)

//map() ALWAYS returns a new array.

//Original array remains unchanged.

const newNums = nums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums)
