/*Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions. */

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