/*
What i learn
1. keyof guard
2. in guard
3. instaceof guard
*/

// keyof guard, ata sob somoy runtime e kag korbe

type typeCheck = string | number;

function add(a: typeCheck, b: typeCheck):typeCheck {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    } else {
        return `String can not be sum`
    }
}

const check = add(2,3);
console.log(check);

console.log(add('2','2'))


// in guard. it is used in object
type userType = {
    name: string;
}

type admin = {
    name: string;
    roll: "admin"
}

function getValidation(user: userType | admin): string{
    if('roll' in user){
        return `This is user of ${user.roll}`
    } else {
        return `This is ${user.name}`
    }
}

const normalUser:userType = {name: "hello"}
const adminRoll:admin = {roll: "admin", name: "user"}

const checkV = getValidation(normalUser)
console.log(checkV)

const checkA = getValidation(adminRoll)
console.log(checkA)


// instaceof guard
class Animals{
    name: string;
    color: string;
    constructor(name:string, color:string){
        this.name = name
        this.color = color;
    }

    makeSound(){
        console.log("I am maing sound")
    }
}

class Dog extends Animals{
    constructor(name:string, color: string){
        super(name, color)
    }
    getDog(){
        console.log("Hey I am dog")
    }
}

class Cat extends Animals{
    constructor(name:string, coloe:string){
        super(name, coloe)
    }
    getCat(){
        console.log("Hey I am cat")
    }
}

function isDog(obj:Animals): obj is Dog{
    return obj instanceof Dog
}

function instaceOfGuard(obj: Animals){
    
    if( isDog(obj) ){
        obj.getDog()
    }else if(obj instanceof Cat){
        obj.getCat()
    } else {
        obj.makeSound()
    }
}

const dogh = new Dog('monto',"black");
const cath = new Cat('meaw',"white");

instaceOfGuard(dogh)
instaceOfGuard(cath)