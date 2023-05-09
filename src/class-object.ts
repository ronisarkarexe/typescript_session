class Animal{
    name: string;
    color: string;
    sound: string;

    constructor(name: string, color:string, sound:string){
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    makeSound(){
        console.log(`The ${this.name} color ${this.color}`)
    }
}

const dog = new Animal("black dog","dog","gaw gaw")
dog.makeSound()

const cat = new Animal("cat","white","cat")
cat.makeSound()


// parameter property
class Ani{
    constructor(
        private name: string, 
        public color:string, 
        public sound:string
    ){}
    public accessProperty(){
        console.log(`This ${this.name} say ${this.color}`)
    }
}

const newCat = new Ani("Hello","Cat","Hello")
newCat.accessProperty()