function moveZerosToEnd(arr)
{
    let slow=0;
    let fast=0;
    while(fast<arr.length)
    {
        if(arr[fast]!=0){
            arr[slow]=arr[fast];
            slow++;
        }
        fast++;
    }
    while(slow<arr.length)
    {
        arr[slow]=0;
        slow++;
    }
    return arr;
}
let arr=[1,3,0,5,0,4,0,45,0,66]
console.log(moveZerosToEnd(arr));
