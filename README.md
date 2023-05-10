# Typescript Topic

## --> Module 1 <--
1. index(primitive types)
2. array-tuples
3. object
4. function
5. spread And rest operator
6. alias
7. union and intersection
8. null and unknown
9. ternary

## --> Module 2 <--
10. assertion
11. interface
12. generic (tuple, interface, function)
13. asynchronous
14. conditional
15. mapped

## --> Module 3 <-
16. oop
17. create class, object, parameter property
18. inheritance
19. type guard and narrowing
20. access modifiers
21. getter and setter
22. static in class
23. polymorphism
24. abstraction
26. encapsulation

## --> Module bpnus video <-
27. utility types
28. multiple interface


# Typescript Question And Answer

### Question:-1 Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

```typescript
function addSum(arr:number[]):number{
    let sum = 0;
    arr.map((a:number) => sum += a);
    return sum;
}

console.log(addSum([1,2,3,4,5,6,7,8,9]))
```
### Question:-2 Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

```typescript
interface Persone0 {
    name: string;
    age: number;
    email: string;
}

const profile:Persone0 = {
    name: 'John',
    age: 36,
    email: 'john'
}

console.log(profile)
```
### Question:-3 Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

```typescript
function calculateArea(length: number, width: number):number{
    return length * width;
}

console.log(calculateArea(5,6))
```
### Question:-4 Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

```typescript
function reverseArray<T>(arr: T[]):T[]{
    return arr.reverse()
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9]))
console.log(reverseArray(['9','6','4']))
console.log(reverseArray([true, false]))
```
### Question:-5 Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

```typescript
interface Repository<T>{
    getAll(): T[],
    getById(id: string): T | undefined;
    create(data: T): void,
    update(data: T): void,
    delete(id: number): void
}

class exampleRep<T> implements Repository<T> {
    private data:T[] = []

    getAll(): T[] {
        return this.data
    }

    getById(id: string): T | undefined {
        return this.data.find((item) => item === id)
    }

    create(data: T): void {
        this.data.push(data)
    }
    update(data: T): void {
        const index = this.data.findIndex(item => item === data)
        if(index !== -1) {
            this.data[index] = data
        }
    }
    delete(id: number): void {
        const index = this.data.findIndex(item => item === data)
        if(index !== -1) {
            this.data.slice(index, 1)
        }
    }
}
```
### Question:-6 Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

```typescript
type Coordinates = {
    latitude: number;
    longitude: number;
}

const location2:Coordinates = {
    latitude: -1234,
    longitude: 345
}
```
### Question:-7 Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

```typescript
enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

function colorValue(color: Color){
    console.log(`You seleted ${color}`)
}
colorValue(Color.Green)
```
### Question:-8 Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

```typescript
class Shape8{
    calculateArea():number{
        return 0
    }
}

class Rectangle extends Shape8{
    height:number;
    width:number;
    constructor(height:number, width:number){
        super()
        this.height = height
        this.width = width
    }
    calculateArea(): number {
        return this.height * this.width;
    }
}

class Circle8 extends Shape8{
    radius:number;
    constructor(radius:number){
        super()
        this.radius = radius
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


const rec = new Rectangle(1,2)
console.log(rec.calculateArea())

const cir = new Circle8(5)
console.log(cir.calculateArea())
```
### Question:-9 Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

```typescript
interface Car {
    make:number;
    model:string;
    year:number
}

interface Driver {
    name:string;
    licenseNumber: number
}

const carP: Car | Driver = {
    make: 12,
    name: "Hello",
    year: 2,
    model: "dd",
    licenseNumber: 12
}
```
### Question:-10 Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

```typescript
function upp(arr:  string | string[]):string | string[]{
    if(typeof arr === "string"){
        return arr.toUpperCase();
    } else {
        return arr.map(a => a.toUpperCase())
    }
}

console.log(upp(["hello", "roni"]))
```
### Question:-11 Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length. 

```typescript
let checkAss:string | null = null;
checkAss = "Hello world"
console.log((checkAss as string).length)
```
### Question:-12 Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

```typescript
function roni(arr:unknown):void{
    if(typeof arr === "string"){
        console.log("It is string")
    }
    if(typeof arr === "number"){
        console.log("It is number")
    }
}

roni('2')
```
### Question:-13 Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

```typescript
// upcoming
```
### Question:-14 Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

```typescript
// upcoming
```
### Question:-15 Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

```typescript
// upcoming
```