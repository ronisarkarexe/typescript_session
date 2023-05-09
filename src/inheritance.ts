// we make a commom value class, than we inherite common class value to child class for future.

class Parent {
    name:string;
    age:number;
    address:string;
    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleepHour(num:number){
        return `This ${this.name} will sleep for ${num}`
    }
}

/*class Student {
    name:string;
    age:number;
    address:string;
    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleepHour(num:number){
        return `This ${this.name} will sleep for ${num}`
    }
}*/

class Student extends Parent { // it is call inheritence, that call a parent calss and take all value that avaliavle at parent class.
    constructor(name:string, age:number, address:string){
        super(name, age, address);
    }
}

const student1 = new Student("Hello",12,"Student");
student1.getSleepHour(12)

/*
class Teacher {
    name:string;
    age:number;
    address:string;
    des: string; // diff

    constructor(name:string, age:number, address:string, des:string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.des = des;
    }
    getSleepHour(num:number):string{
        return `This ${this.name} will sleep for ${num}`
    }
    takeClasses(numOfClass:number):string{ //diff
        return `This ${this.name} will take ${numOfClass} per day`
    }
}*/

class Teacher extends Parent {
    des: string; // diff

    constructor(name:string, age:number, address:string, des:string) {
        super(name, age, address);
        this.des = des;
    }
    takeClasses(numOfClass:number):string{ //diff
        return `This ${this.name} will take ${numOfClass} per day`
    }
}

const teacher1 = new Teacher("helo", 12, "ge", "math")
teacher1.takeClasses(12)
teacher1.getSleepHour(10)


