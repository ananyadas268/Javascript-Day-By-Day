function findsecondLagest(arr){
        let second=-Infinity;
        let max=-Infinity;
    for (let num of arr){
        if(num>max)
        {
            second=max;
            max=num;
        }
        if(num>second && num!=max)
        {
            second=num;
        }
    }
    return second===-Infinity?null:second;
}
let arr=[5,3,7,1,9];

let secondlargest=findsecondLagest(arr);
console.log(secondlargest);
