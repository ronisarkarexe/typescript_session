/*
Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length. 
*/

let checkAss:string | null = null;
checkAss = "Hello world"
console.log((checkAss as string).length)