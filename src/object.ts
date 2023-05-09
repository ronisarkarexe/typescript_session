/* 
ki ki siksi:-
1. create object with type
2. optional type (?)
3. literal type
4. readonly (it is batter version of literal type)
*/


const demo1:object = {
    myName: "hello",
    roll: 12,
    isMarried: false,
    isStudy: false,
    div: "C",
    phone: null,
    sec: true
}


// it is declear object type syntex with value
const demo: {
    myName: string,
    roll: number,
    isMarried: boolean,
    isStudy: boolean,
    div: string,
    phone: null,
    sec: string
} = {
    myName: "hello",
    roll: 12,
    isMarried: false,
    isStudy: false,
    div: "C",
    phone: null,
    sec: "D"
}

const {myName, roll} = demo;

console.log(myName, roll)


const person: {
    mame: string,
    age: number,
    gender?: string // optional type
} = {
    mame: "Alice",
    age: 30,
    gender: "Male"
}

// do not to assign type during destructuring time, coz it will not take type ,it will take as a type alias, we if assign type then (we assign value another parameter like bellow this code)
const {mame, age, gender} = person;
console.log(mame, age, gender)

// it call name aliase (name: personeName), name value store in the personeName
// 
const {mame: string, age: personeAge, gender: personeGender} = person;
console.log(string, personeAge, personeGender)


const person2: {
    mame: string,
    age: number,
    gender?: string
} = {
    mame: "Alice",
    age: 30,
}


// Literal Type
const user: {
    company: "Google" // it is literal type cozz, boz when we need to assign spacic type with value then we can use this way
    roll: number;
    wife?: boolean // optional type
    age: number
} = {
    company: "Google",
    roll: 10,
    age: 30
}

//user.roll
//user.company = "Roni Sarkar"
console.log(user)


// using readonly we can ont change object value from outside of the object
const user4: {
    readonly company: string
    roll: number;
    wife?: boolean // optional type
    age: number
} = {
    company: "Google",
    roll: 10,
    age: 30
}
