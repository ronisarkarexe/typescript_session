//it is call polymarphisum, boz of we can edit Person function as per our needed for future.
class Persone{
    takeSleep():void{
        console.log("I am sleep 8 hours per day")
    }
}

class Dev extends Persone{
    takeSleep():void{
        console.log("I am sleep 6 hours per day")
    }
}

class Me extends Persone{
    takeSleep():void{
        console.log("I am sleep 5 hours per day")
    }
}

function getPer(param: Persone){
    param.takeSleep()
}

const persone1 = new Persone()
const persone2 = new Dev()
const persone3 = new Me()


getPer(persone1);
getPer(persone2);
getPer(persone3);



// another example
class Shape {
    getArea():number{
        return 0;
    }
}


class Circle extends Shape {
    redius:number;
    constructor(redius:number){
        super()
        this.redius = redius
    }
    getArea(): number {
        return this.redius * this.redius * this.redius;
    }
}

class Rectagular extends Shape {
    height:number;
    width:number;
    constructor(height:number, width:number){
        super()
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}


function getValue(param: Shape){
    console.log(param.getArea())
}

getValue(new Circle(10))
getValue(new Rectagular(10, 20))