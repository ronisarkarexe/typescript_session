/*Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types. */

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
