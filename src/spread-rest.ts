/*
what i learn
1. spred operator
2. spred operator with function
3. spred operator as a parameter
*/
// spread operator
const sp1:string[] = ['hello','world','roni','sarkar']
const sp2:string[] = ['world','hello','roki','robin']

sp1.push(...sp2)
console.log(sp1)

const againSum = (score:number, score2:number):number => {
    let aSum = 0;
    return aSum + score + score2;
}

console.log(againSum(23,34))



// rest parameter is best option to use
// rest parameter must be a array type, it make a array, take value and make a new array
const againSum2 = (...score:number[]):number => {
    let aSum = 0;
    score.map((s:number)=> {
        aSum += s;
    })
    return aSum;
}

console.log(againSum2(23,34,34,34,3434,34,3444))

const spSum = (...score:number[]):number => {
    let sum = 0;
    score.map(s => {
        sum += s
    })
    return sum;
}

console.log(spSum(1,3,4,6,8,10,30));


const stringSpr = (...str:string[]):void => {
    // str = ["hello1", "hello2", "hello3"]
    str.map((s:string) => {
        console.log(s)
    })
}

stringSpr("hello1", "hello2", "hello3")