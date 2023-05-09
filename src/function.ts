/* 
What we learn...
1. normal function with type parameters
2. default parameter
3. normal function with return type
4. callback function with map
5. function in object

*/


// normal function

function addSum(a:number,b:number):number{
    return a + b;
}

console.log(addSum(3,5))

// Default parameter
// default value must contain in last parameter, yes it comes always from last
function addSum2(a:number,b:number = 20):number{
    return a + b;
}

console.log(addSum2(3))



function hero(a:number,b:number):string {
    const sum = a + b;
    return `Sum ${sum}`
}

console.log(hero(5,6))

function helo2(a:string,b:string):number {
    const sum = parseInt(a) + parseInt(b);
    return sum;
}
console.log(helo2('5','6'))


const arrowHero = (a:number,b:number):string => {
    const sum = a + b;
    return `The Sum Is ${sum}`
}

console.log(arrowHero(5,8))



// callback function
const ar = [1,2,3,4,5,6,7,8];
const newArr:number[] = ar.map((a: number) => a * a);
console.log(newArr)



// function in object
// if any function use in object then we call the function name as method
// This is how we declar the function and value inside the object


const persone: {
    // this is explasip type that we declar
    name: string,
    balance: number,
    addBalance(money: number):number;
} = {
    name: 'roni',
    balance: 5,
    addBalance(money: number){
        return this.balance += money;
    }
}

console.log(persone.addBalance(55))

