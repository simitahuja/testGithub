/*
1. Class
2. Read only properties
3. Optional property
4. Static variables(properties) and methods-
    a)Static propertis otr methods are common /shared across all the objects
    b) It can be accessed through class name directly
    c) It can be modified using any class 
    d) we cannot use this for static properties, instead we can use class name

*/

class Student
{

    readonly studentID:number; // Read only properyty(can be assigned once only, inside constructor)
    name:string; //Regular property
    email?:string; // Optional property(can be undefined)
    static schoolName:string="Greenwood High"; // Static variable shared among all instance/Objects

    //Constructor

    constructor(id:number, name:string, email?:string)
    {
        this.studentID=id;
        this.name= name;
        this.email= email;  // if you don't pass email then it is undefined 
         
    }

    //method
    displayInfo(): void
    {
        console.log(`Student ID is ${this.studentID}`);
        console.log(`Student name is ${this.name}`);
        {
            if(this.email)
            {
                console.log((`Student email is, ${this.email}`));
            }
            else
            {
                console.log("Email is not provided");
                
            }
            console.log(`School Name is ${Student.schoolName}`);  // We can access static property using Student (Class name only)
            
        }

        
    }
    static changeSchoolName(newName:string):void
        {
            Student.schoolName= newName;
        }

}


//Uage of the class

let s1= new Student(101, "john");
let s2= new Student(101, "sim", "simmail");

//Display Student info
s1.displayInfo();
s2.displayInfo();

// Try to modify the studsent ID of S1 object
//s1.studentIDd=111;   //Cannot assign to studentId because if is read only property

//change the school name using static method

Student.changeSchoolName("Sunrise Academy");
//Display Student info after changing the school name
s1.displayInfo();
s2.displayInfo();


































