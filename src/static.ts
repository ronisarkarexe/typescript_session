/* 
What i learn
1. static property name
2. static function name
*/

// normal class with out static
class Counter {
    count: number;
    constructor(count: number) {
        this.count = count;
    }
    incerment():number{
        return this.count += 1;
    }
    decrment():number{
        return this.count -= 1;
    }
}


const ins1 = new Counter(0);
const ins2 = new Counter(1);

// console.log(ins1.incerment());
// console.log(ins2.incerment());


// static property
class CounterStatic {
    static count: number = 0;

    incerment():number{
        return CounterStatic.count += 1;
    }
    decrment():number{
        return CounterStatic.count -= 1;
    }
}
const instance = new CounterStatic();
// console.log(instance.incerment());
// console.log(instance.incerment());
// console.log(instance.incerment());
// console.log(instance.decrment());
// console.log(instance.incerment());
// console.log(instance.incerment());

// static function
class CounterStatic2 {
    static count: number = 0;

    static incerment():number{
        return CounterStatic.count += 1;
    }
    static decrment():number{
        return CounterStatic.count -= 1;
    }
}

console.log(CounterStatic2.incerment())
console.log(CounterStatic2.incerment())
console.log(CounterStatic2.incerment())
console.log(CounterStatic2.incerment())
console.log(CounterStatic2.incerment())