/*
1. Interface in TS is a way to define the structure of an object 
2. It tells the compiler what properties and types an object should have
3. It's like a blueprint for objects

Abstract methods- We only have signature of the method and there is no implementation

Interface InterfaceName
{
porperties
abstract methods

}

1. Regular properties
2. Optional Properties
3. Read only properties and function types
4. Extending interfaces
5. Class implements interface

*/

//Eg-1- Basic Interface

interface Person
{
    name:string;
    age:number;

}

let student:Person=
{
    name:"John",
    age:30
}

console.log(student.name);
console.log(student.age);


//Eg-2- Optional properties (?)

interface Employee
{
    eid:number;
    ename:string;
    edept?:string;    //optional property
}

let emp:Employee=
{
    eid:101,
    ename:"John",

}
console.log(emp.eid);
console.log(emp.ename);

let emp1:Employee=
{
    eid:102,
    ename:"SJohn",
    edept:"Accounts"

}
console.log(emp1.edept);

//Eg-3- Read Only porperties(Read only to prevent modification) and function type

interface Book
{
    title:string;
    readonly isbn:string;

    display():void;  // abstract method
}

let b1:Book=
{
    title:"Learn playwright",
    isbn:"123-ABC",

    display()
    {
        console.log(b1.isbn, b1.title);
        
    }
}

console.log(b1.title);
console.log(b1.isbn);
console.log(b1.display());

console.log("After changing values of properties");

b1.title="Learn TS";
console.log(b1.title);

//b1.isbn="123-XYZ";  // Cannot assign to isbn as it is read only property


//Eg-4- Extending interfaces (Inheritance is applicable)


//Parent interface
interface Animal
{
    name:string;
}


//Child interface
interface Dog extends Animal
{
    color:string;
}

let myDog:Dog=
{
    name:"Buddy",
    color:"Blue"
}

console.log(myDog.name, myDog.color);



//Eg-5- 
//Class can extends another class
// INterface can extends another interface

//Class can implement interfaces

interface Animal1
{
    name:string;
    sound():void;
}
class Dog1 implements Animal1
{
    name:string;   // Inherited from interface Animal
    color:string;   // Property belongs to dog itself

    constructor (name:string, color:string)
    {
        this.name=name;
        this.color= color;
    }

sound()
{
    console.log("Bark");
    
}

}

let pet= new Dog1("Tommy", "Black");
console.log(pet.name, pet.color);









































