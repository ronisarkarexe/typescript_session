

// generic mean generilise
type my = Array<number>;

// make generic
type myArray<T> = Array<T>;

const rollNumber1:number[] = [1, 2, 3, 4, 5, 6]
const rollNumber2:myArray<number> = [1, 2, 3, 4, 5, 6]

const rollNumber3: string[] = ['1', '2', '3', '4', '5', '6']
const rollNumber4: myArray<string> = ['1', '2', '3', '4', '5', '6']

type dataType = {name: string, roll:number}

const userNameAndRoll: myArray<dataType> = [
    {
        name: 'John',
        roll: 1,
    },
    {
        name: 'John Smith',
        roll: 2,
    }
]

// tuple in generic
type GenericTuple<X, Y> = [X, Y]

const A: GenericTuple<string, number> = ['hero', 34];
const B: GenericTuple<number, number> = [45, 34];
const C: GenericTuple<number, string> = [45, 'khan'];


const r:GenericTuple<string, string> = ['roi','hello']

type genericT = {
    name:string;
    salary: number
}

const c:GenericTuple<genericT, string> = [
    {
        name: "roni",
        salary: 12345
    },
    "Hello"
]

const cd:GenericTuple<genericT, string> = [
    {
        name: "robin",
        salary: 987456
    },
    "hello5"
]


// generic interface
interface IGeneric<T> {
    name: string;
    salary: number;
    isSingle: T
}

const single: IGeneric<boolean> = {
    name: "single",
    salary: 12345,
    isSingle: false
}

const single2: IGeneric<string> = {
    name: "single",
    salary: 12345,
    isSingle: "Good"
}

interface ISingle {
    good: boolean;
    name: string;
}

const single3: IGeneric<ISingle> = {
    name: "single",
    salary: 12345,
    isSingle: {
        good: false,
        name: "2 persone"
    }
}

// multi value with interface
interface IGenericA<T, U> {
    name: string;
    salary: T;
    isSingle: U
}

const single4: IGenericA<number, ISingle> = {
    name: "single",
    salary: 12345,
    isSingle: {
        good: false,
        name: "2 persone"
    }
}


interface IGenericAB<T, U, V> {
    name: T;
    salary: U;
    isSingle: V
}

interface ISingeName {
    fullName: string;
    lastName: string;
    phone: number
}

const single5: IGenericAB<ISingeName, number, ISingle> = {
    name: {
        fullName: "Hello2",
        lastName: "roni",
        phone: 466789123
    },
    salary: 12345,
    isSingle: {
        good: false,
        name: "2 persone"
    }
}


// generic Function

// arrow function

// normal arrow function
const createArray=(param:string):string[] => {
    return[param]
}
const res = createArray("Bangladesh")


// generic function
const createArray1=<T>(param: T): T[] => {
    return[param]
}

const res1 = createArray1<string>("Bangladesh")
const res2 = createArray1<boolean>(true)
// object
type name = {
    name: string
}
const res3 = createArray1<name>({name: "Bangladesh"})

// multiple value
const createArray3=<X, Y>(param1: X, param2: Y): [X, Y] => {
    return[param1, param2]
}
function createArray4<X, Y>(param1: X, param2: Y): [X, Y]{
    return[param1, param2]
}

const res5 = createArray3<string, string>("Bangladesh", "India")
const res6 = createArray3<string, Array<string>>("Bangladesh", ["India"])


// Spread Operator

const sheName = "Bang"
const sheInfo = {
    name: "Bangl",
    salary: 123456,
    age: 12
}

const newShe = {...sheInfo, sheName}

const addmeToShe = (sheInfo:object) => {
    const sheName = "Bang2"
    const d = {...sheInfo, sheName}
    return d;
}

const addmeToShe2 = <T>(sheInfo:T) => {
    const sheName = "Bang2"
    const d = {...sheInfo, sheName}
    return d;
}

const sheInfo2 = {
    name: "Bangl",
    salary: 123456,
    age: 12
}

const data = addmeToShe2(sheInfo2)
data



// Generics constraints

type dendotory = {name: string, age: number, salary: number}

const addmeToShe3 = <T extends dendotory>(sheInfo:T) => {
    const sheName = "Bang2"
    const d = {...sheInfo, sheName}
    return d;
}

type myInfoType = {
    name: string,
    age: number,
    salary: number,
    o: boolean
}

const myInfo:myInfoType = {
    name: "Roni",
    age: 123,
    salary: 123456,
    o:false
}
const data2 = addmeToShe3(myInfo)

// another example
type demo3 = {
    name: string,
    value: number,
    job: string
}

const tryDemo = <T extends demo3>(de: T) : T=> {
    const v = 'hello5'
    const s = {...de, v}
    return s;
}

type demo4 = {
    name: string,
    value: number,
    job: string,
    title: string
}

const pq:demo4 = {
    name: 'h',
    value: 1,
    job: 'hello',
    title: 'hello',
}
const v = tryDemo(pq)



// Keyof

type MovieType = {
    name: string;
    duration: number;
    category: string;
}

type test = 'name' | 'duration' | 'category'

type newTypeMovie = keyof MovieType

const aarr: test = 'duration'
const bbbb: newTypeMovie= 'category'


function getProperty<X, Y extends keyof X>(obj:X, key:Y){
    obj[key]
}

const result78 = getProperty({name: 'name', age: 12}, 'age')

const datas:MovieType = {
    name: 'name',
    duration: 12,
    category: 'category',
}

type myMoviesType = keyof MovieType;
const meText:myMoviesType = 'name';
console.log(data[meText])


// another example

type demoType = {
    name: string,
    roll: number,
    sem: string
}

// by doing menual
type dTy = 'name' | 'roll' | 'sem'
const t: dTy = 'name'


// by keyof operator
type dty2 = keyof demoType;
const de5:dty2 = 'name'


// function getDemo(obj: object, key: string){
//     obj[key]
// }

const vs = {
    name: "hello"
}
vs['name']

function getDemo2<T, Y extends keyof T>(obj: T, key: Y){
    obj[key]
}

getDemo2({name: 'name', age: 12},'age')

