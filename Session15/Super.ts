/*
super()- It is used to invoke immediate parent class constructor
super- it is used to invoke immediate parent class method
supper cannot be used to invoke the parent class properties but in Java it is possible
*/

class Parent
{
    num:number=10;
    constructor()
    {
        console.log("This is parent class constructor");
        
    }
    display()
    {
        console.log("This is display method from Parent class");
        
    }
}


class Child extends Parent
{
    num:number=20;   //overriden
    constructor()
    {
        super();   //this will call the parent class constructor (must be called)
        console.log("This is a child constructor");
        
    }

    show()
    {
        //console.log(super.num); // In java this statement works but in JS and TS this won't work as by using super keyword we can't get the value of Parent class
        console.log(this.num);
        console.log("This is show() method form the child class");
        
    }
    //Overrided method
    display()
    {
        super.display(); // this will invoke parent clas method
        console.log("This is displaymethod from child class");
        
    }
}

let c1= new Child();

c1.show();   //child class
c1.display(); 
































