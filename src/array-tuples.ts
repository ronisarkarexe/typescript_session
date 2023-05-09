// Normal Array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5,"uiu", true];

//console.log(arr) //[ 1, 2, 3, 4, 5, 'uiu', true ]

// typescript array

const num:number[] = [1, 2, 3, 4, 5, 6, 7]
const s:string[] = ['hello', 'world', 'good']

const dif:(string | boolean |number)[] = [1, 2, 3, 4, "hello", "world", true]
console.log(dif)

const dif2:(number | null | string | boolean | undefined)[] = [1, 2, 3, 4, "hello", "world",, true, null, undefined, 123,];


// tuple
/* 
In TypeScript, a tuple is an ordered list of elements of a specific type. Tuples allow you to store multiple values of different types in a single variable, and they preserve the order of the elements.

Here's an example of a tuple in TypeScript:


let myTuple: [string, number];
myTuple = ["hello", 42];


In this example, we declare a variable `myTuple` of type `[string, number]`, which means it's a tuple containing a string and a number in that order. We then assign a tuple value to the variable with the values `"hello"` and `42`.

We can access the individual elements of the tuple using array-like syntax:


let myString: string = myTuple[0]; // "hello"
let myNumber: number = myTuple[1]; // 42


We can also use destructuring to assign the elements of the tuple to separate variables:


let [myString, myNumber] = myTuple;


Now `myString` has the value `"hello"` and `myNumber` has the value `42`. Note that the order of the variables in the destructuring assignment must match the order of the elements in the tuple.
*/

//const tupleType:[string, number] = [1,'number'];

const tupleType:[number, string, string] = [1, 'string', 'number'];

const tupleType2:[number, number, number, number, string, string, boolean, null, undefined, number] = [1, 2, 3, 4, "hello", "world", true, null, undefined, 123];

