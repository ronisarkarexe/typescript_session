/*Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value. */

function addSum(arr:number[]):number{
    let sum = 0;
    arr.map((a:number) => sum += a);
    return sum;
}

console.log(addSum([1,2,3,4,5,6,7,8,9]))