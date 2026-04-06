//Object- It contains properties and behaviour
// in coding we consider properties as variables and behaviour as methods
//Object contains variables and methods
//obect is collection of key and value pairs

//Eg-1-
//employee--> name, design, salary, department
//bonus(), getEmpDetails(),setDetails()

//Student--name, id, grade, marks(Properties)
//getDetails(), setDetails()(Behaviours)

/*Different ways to create an object in JS/TS

1. Using 'object' type- Directly define the values for varibles(JS/TS)
2. Inline Type object- We also define the data type of the keys(TS)
3. Using type alaises(JS/TS)
4. Using the classes (JS ES16/TS)

*/



//1.  Using 'object' type- Directly define the values for varibles(JS/TS)
// The TS 'object' type represents all the values that are not in primitive types
/*
let emp:object=
{
    name:"John", 
    age:30, 
    salary:50000, 
    job:"Engineer"
}
*/

let emp=
{
    name:"John", 
    age:30, 
    salary:50000, 
    job:"Engineer",
    getDetails:function()
    {
       // console.log(this.name, this.age, this.salary, this.job);
        return `${this.name} is a ${this.job} earning ${this.salary }`;
    }
}

console.log(typeof emp);

//Accessing object- approach 1 (using .(dot) notation)

console.log(emp.name, emp.salary, emp.job);
console.log(emp.getDetails());

//Accessing object- approach 2(using braket notation)

console.log(emp["name"], emp["salary"], emp["job"]);
console.log(emp["getDetails"]());


// Modify the value
emp.job="manager";

// emp["job"]="Manager";
console.log("Modified job is", emp.job);

//===================================================================================

//2. Inline Type Object- We also define the datatype of the keys(TS)

let student:
{
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
}=
{
    name:"Scott",
    age:15,
    grade:"A",
    getSummary: function()
    {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }

}

console.log(student.getSummary());

let student1:
{
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
}=
{
    name:"Mrry",
    age:26,
    grade:"B",
    getSummary: function()
    {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }

}

// Like in the abobve situation, we have created same structure twice fro Student 1 and 2 and that's a disadvantage for this as when we will be creating a new object
// then we have to create same structure for same object multiple times and this can be avoided using aliases

//==================================================================================================================================================================


//3. Using 'type' aliases (TS)- allows creating a new name for an existing type

//Eg-1-

type Product={
    name:string,
    price:number,
    getInfo:()=>string
}

let book1:Product=
{
    name:"Java",
    price:780,
    getInfo: function(){
        return `${this.name} costs ${this.price}`;
    }
}


let book2:Product=
{
    name:"Python",
    price:780,
    getInfo: function(){
        return `${this.name} costs ${this.price}`;
    }
}

console.log(book1.getInfo());
console.log(book2.getInfo());

for(let i in book1)
{
    console.log(book1.name);
    console.log(book1.price);
    
}

//Eg-2-

type Personal={
    name:string,
    age:number
};
type Contact={
    email:string
    phone:number
};

type Candidate= Personal & Contact &
{
    getContactInfo:()=>string
}

let c:Candidate={
    name:"Scott",
    age:25,
    email:"simit@gmail.com",
    phone:213456789,
    getContactInfo: function()
    {
        return `${this.name} is ${this.age} years old and contacted at ${this.email}`;
    }
}

console.log(c.getContactInfo());

//================================================================================================================================================================

//4. Using classes- 

class Person
{
    ssn:string;
    firstName:string;
    lastName:string;

constructor(ssn:string, firstName:string, lastName:string)
{
    this.ssn=ssn;
    this.firstName=firstName;
    this.lastName=lastName;
}


    getFullName():string
    {
        return `${this.firstName} ${this.lastName} `; 
    }

    getDetails():string{
        return `SSN: ${this.ssn} and name: ${this.getFullName()}`;
    }
}

//object creation
let person1= new Person('123456798','John','Kennedy');
console.log(
 person1.getDetails());

let person2= new Person('784564123','Simit','Ahuja');
console.log(
 person2.getDetails());
















