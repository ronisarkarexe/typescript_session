/* 
what i learn
1. assertion
2. assertion with function
3. assertion with try and catch function
*/

// what assertion in typescript
/* 
In TypeScript, an assertion is a way to tell the compiler that a value has a certain type, even if the compiler can't infer that type itself. You use assertions to override the compiler's default type inference behavior and provide more specific information about the type of a value.

There are two ways to make an assertion in TypeScript: using the `as` keyword or using angle brackets (`<>`). Here's an example of each:

Using the `as` keyword:

```
let myValue: any = "hello";
let myLength: number = (myValue as string).length;
```

In this example, we have a variable `myValue` that is of type `any`. We know that `myValue` is actually a string, so we use an assertion with the `as` keyword to tell the compiler that we want to treat `myValue` as a string. We then assign the result of calling the `length` property on the string to `myLength`.

Using angle brackets:

```
let myValue: any = "hello";
let myLength: number = (<string>myValue).length;
```

In this example, we use angle brackets to make the assertion. The code is otherwise the same as the previous example.

Note that you should only use assertions when you're sure that the value has the type you're asserting. If you're wrong, you could introduce runtime errors into your code. So it's important to use assertions judiciously and make sure you're confident in the types you're asserting.
*/

// when we know type batter then typescript this time we use type assertion,

// example
const asser:any = "hello world";
console.log((asser as string).length);
console.log((<string>asser).length);

// <string>asser it does not work in tsx file better to work (as)
// another example

function kgToGram(param: string | number): string | number | undefined{
    if(typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value}`
    }
    if(typeof param === "number"){
        const value = param * 1000;
        return value
    }
}

const result = kgToGram(10) as number;
const resultString = kgToGram("10") as string;

const result1 = <number>kgToGram(10);
const resultString2 = <string>kgToGram("10");




// another example
type CustomeType = {
    message: string
}

try{

} catch(err){
    console.log((err as CustomeType).message)
    console.log((<CustomeType>err).message)
}