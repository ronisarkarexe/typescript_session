/* 
What i learn
1. ternary operator
2. nullish operator with example
*/

const myAge:number = 22;
if(myAge > 20){
    console.log("Good")
} else {
    console.log("Bad")
}

const value:string = myAge > 20 ? "Good" : "Bad";
console.log(value);

// nullish coeslancing operator (??)
// null and undefined 
// nullish operator only work with null and undefined oprator
const isAdmin = null;
const users = isAdmin ?? "Guest"
console.log(users)

/**
 * null = Guest
 * undefined = Guest
 * hello = hello
 * 4 = 4
 * true = true
 * false = false
 * "" = ""
*/

// another example

type Home = {
    name: string;
    age: number;
    address: {
        city: string;
        road: string;
        home?: string;
    }
}

const p:Home = {
    name: "Home",
    age: 12,
    address: {
        city: "rajkot",
        road: "tramba"
    }
}

const h = p.address.home ?? "No Home" // default 'No Home'
console.log({h})