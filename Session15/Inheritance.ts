/*Inheritance-
A class can reuse the properties and methods of another class
It is a mechanism where onec lass(child) can inheritthe properties and methods of another class(parent)
It allows you to reuse the functionality of an existing class without rewriting it

Method Overriding-
A subclass/child class can [provide a specific implementation of a method that is already defined in its superclass
The method must have the same name, return type and parameters



A---- properties +methods     (Parent class / Base)
B extends A--- properties + methods (child class/Derivede class/ Sub class)

*/
//Parent class
class Car 
{
    name: string;
    color: string;
    model: string;

    constructor(name:string, color:string,model:string)
    {
        this.name=name;
        this.color= color;
        this.model= model;
    }

    start()
    {
        console.log("Car started");
        
    }
    stop()

    {
        console.log("Car stopped");
        
    }
    displayInfo()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);
        
    }
}

//Child class
class Honda extends Car
{
    year: number;

    constructor(name:string, color:string,model:string,year:number)
    {
        super(name, color, model);   // super is invoking the parent class constructor
        this.year= year;
    }

    //method Overriding

    start()
    {
        console.log("Honda started");
        
    }
    //Not an overriding method
    yom()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Year of manufacture ${this.year}`);
        
    }

}

//Child class
class Maruti extends Car
{
    year: number;

    constructor(name:string, color:string,model:string,year:number)
    {
        super(name, color, model);   // super is invoking the parent class constructor
        this.year= year;
    }

    //method Overriding

    start()
    {
        console.log("Maruti started");
        
    }
    //Not an overriding method
    yom()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Year of manufacture ${this.year}`);
        
    }

}


//Usage

//Create a Honda object

let honda= new Honda("Honda", "Black","H1", 1989);
console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start();   //called child class method(Overrided)
honda.displayInfo(); //Parent Class

honda.stop();    // Parent class
honda.yom();    // Called from child class

//Create a Maruti object
let maruti= new Maruti("Suzuki", "Red", "SX4", 1988);
maruti.start();   //child clas
maruti.displayInfo();
maruti.stop();   //Parent class
maruti.yom();

//Parent class variable is holding child class object 

let car:Car= new Honda("Honda", "Black","H1", 1989);

car.displayInfo();

car.start();
//car.yom();   //Not accessible yom() define inside the child class but not the in the parent




































