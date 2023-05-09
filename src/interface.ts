/* 
what i learn
1. interface
2. interface extends
3. interface signuture
*/



// interface work with object and class
// alias work with primitive data


// Object, Function, Array


// alias
type MySelfType = {
    name: string;
    age: number;
    address: string;
}

// interface
interface IMySelf {
    name: string;
    age: number;
    address: string;
}

const mySelf:IMySelf = {
    name: "John",
    age: 12,
    address: "Hello",
}

// in interface we can extends the value
interface IUser {
    name: string;
    age: number;
}

interface IUserTwo extends IUser {
    role: string;
}

const Iuser: IUserTwo = {
    name: "John",
    age: 12,
    role: "Admin"
}

// type alias
type addNumbersType2 = (num1:number, num2:number) => number
const addNUmber5: addNumbersType = (num1, num2) => num1 + num2;



// interface signuture , in function we will use type alias
interface IAddNumbersType {
    (num1: number, num2: number): number
}

const addNumber: IAddNumbersType = (num1, num2) => num1 + num2;


// Array is also a onject

// alise
type rollType = number[];
const rollNumbers:rollType = [1, 2, 3, 4, 5];



// interface
interface IRoll {
    [index: number]: number
}
interface IRoll2 {
    [index: number]: string
}
const rollNumbersI:IRoll = [1, 2, 3, 4, 5];
