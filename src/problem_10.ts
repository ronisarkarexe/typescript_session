/*Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase. */ 

function upp(arr:  string | string[]):string | string[]{
    if(typeof arr === "string"){
        return arr.toUpperCase();
    } else {
        return arr.map(a => a.toUpperCase())
    }
}

console.log(upp(["hello", "roni"]))