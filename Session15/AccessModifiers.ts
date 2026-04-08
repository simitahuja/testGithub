//Parent class

class Person

{
    public name:string;  //public property- accessible anywhere
    protected age:number;  // Protected- Accessible within the class and its subclassess
    private ssn:number;  // private- accessbile within the class

    constructor(name:string, age:number, ssn:number)
    {
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }

    displayInfo()
    {
        console.log("Name", this.name);
        console.log("Age", this.age);
        console.log("SSN", this.ssn);
    }

}


//child classs
class Employee extends Person
{
    private empId:number;

    constructor(name:string, age:number, ssn:number, empId:number)
    {
        super(name, age, ssn);
        this.empId=empId;
    }

    showEmpDetails()
    {
        console.log(this.name); // Public so accessible
        console.log(this.age); // Protected- so accessible as well
       //console.log(this.ssn);  // private so showing error as it is not accessible outside the class
        console.log(this.empId);   //Even though it is private, we can still access it as it is declared in the same class
    }
}


let emp= new Employee("John",30, 123,111);

emp.displayInfo();
emp.showEmpDetails();

console.log(emp.name);  //accessible
//console.log(emp.age);  //Not accessible as it is protected
//console.log(emp.ssn);  //Not accessible as it is private


















































