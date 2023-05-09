/* 
Building Block of OOP

1. Encapsulation
2. Polymorphism
3. Abstraction
4. Inheritance
*/

// function
type add = (a: number, b: number) => number;
const Add:add =(a,b) => {
    return a  + b;
}
const sum = Add(4,5);


// class
class cal{
    add(a: number, b: number) {
        return a + b;
    }
}

const calC = new cal();
const SumCal = calC.add(2,5)