/* 
what i learn
1. null type
2. unknown type
3. never type
*/
// null type
const searchName = (value: string | null): void => {
    if(value === null){
        console.log("No search name")
    } else {
        console.log(value)
    }
}

searchName("hello");
searchName(null)

// unknown type
const gessSomething = (guess: unknown) => {
    console.log(guess)
}
gessSomething(10) // 10
gessSomething("hello") //hello


// another example
// kmh^-1 --> ms^-1

const getMySpeed = (speed: unknown) => {
    if(typeof speed === "number"){
        const convert = (speed * 1000)/3600;
        console.log(`My speed is ${convert.toFixed(2)}`)
    } else if(typeof speed === "string"){
        const con = speed.split(' ')[0];
        const convert = (parseInt(con) * 1000)/3600;
        console.log(`My speed is ${convert.toFixed(2)}`)
    } else {
        console.log(`There are unknown type`)
    }
}
getMySpeed(15);
getMySpeed('15 kmh^-1')


// never type
// if any function does not return anything ever then then we can assign never type in our program
function throwError(message: string):never{ // like this coz this function does not return anything in future
    throw new Error(message)
}

throwError("Hello Error World")