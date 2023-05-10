/*Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly. */


function reverseArray<T>(arr: T[]):T[]{
    return arr.reverse()
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9]))
console.log(reverseArray(['9','6','4']))
console.log(reverseArray([true, false]))