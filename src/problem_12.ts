/*Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type. */

function roni(arr:unknown):void{
    if(typeof arr === "string"){
        console.log("It is string")
    }
    if(typeof arr === "number"){
        console.log("It is number")
    }
}

roni('2')