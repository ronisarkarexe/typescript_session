/*
We can do abstraction 2 way
1. interface
2. abstract class

*/

interface IVehical {
    startEng():void;
    stopEng():void;
    move():void;
}

class Vehical implements IVehical {
    constructor(
        public name:string,
        public brend: string,
        public price:number
    ){}
    startEng(): void {
        console.log("startEng")
    }
    stopEng(): void {
        console.log("stopEng")
    }
    move(): void {
        console.log("moving")
    }
    test(){
        console.log("test")
    }
}

const vehical1 = new Vehical("hello","hello2",23)

// abstration class

interface IVehical1 {
    startEng():void;
    stopEng():void;
    move():void;
}

abstract class Vehical1 {
    constructor(
        public name:string,
        public brend: string,
        public price:number
    ){}
    abstract startEng(): void 
    abstract stopEng(): void 
    move(): void {
        console.log("moving")
    }
    test(){
        console.log("test")
    }
}

class Car extends Vehical1 {
    startEng(): void {
        console.log("startEng")
    }
    stopEng(): void {
        console.log("stopEng")
    }
}

const vehical2 = new Car("hello","hello2",23)
vehical2