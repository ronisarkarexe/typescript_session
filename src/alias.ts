/* 
What i learn
1. type alias
2. function with alias
3. string with alias
4. boolean with alias
5. type signuture
*/
// type alias
type personeType = {
    name: string;
    job: string;
    age: number;
    address: string;
    isMarried?: boolean;
}

const people1: personeType = {
    name: 'John',
    job: "Developer",
    age: 23,
    address: 'Kolkata',
    isMarried: false
}
const people2: personeType = {
    name: 'John',
    job: "Web Developer",
    age: 23,
    address: 'Kolkata',
    isMarried: false
}
const people4: personeType = {
    name: 'John',
    job: "Backend Developer",
    age: 23,
    address: 'Kolkata'
}

/*
const people1: { 
    name: string;
    job: string;
    age: number;
    address: string;
    isMarried: boolean;
} = {
    name: 'John',
    job: "Developer",
    age: 23,
    address: 'Kolkata',
    isMarried: false
}
const people2: { 
    name: string;
    job: string;
    age: number;
    address: string;
    isMarried: boolean;
} = {
    name: 'John',
    job: "Web Developer",
    age: 23,
    address: 'Kolkata',
    isMarried: false
}
const people3: { 
    name: string;
    job: string;
    age: number;
    address: string;
    isMarried: boolean;
} = {
    name: 'John',
    job: "Backend Developer",
    age: 23,
    address: 'Kolkata',
    isMarried: false
}*/



// boolean

type singleType = boolean;
const isSingle:singleType = false 


type stringType = string;
const yourName:stringType = "Riye Sing" 


// withoute type alias with function

const calculate = (num1:number, num2:number, operation:(x:number, y:number)=> number): number => {
    return operation(num1, num2);
}

const cal1 = calculate(15, 8, (x,y)=> x + y)
const cal2 = calculate(15, 8, (x,y)=> x - y)


// with type alias
type OperationType1 = ( x: number, y: number ) => number;

// type OperationType2 = ( 
//     x: number, 
//     y: number 
// ) => number;

const calculate2 = (num1:number, num2:number, operation:OperationType1): number => {
    return operation(num1, num2);
}

const ca = calculate2(15, 8, (x,y)=> x + y)


// type signuture
type addNumbersType = (num1:number, num2:number) => number

const addNUmber: addNumbersType = (num1, num2) => num1 + num2;