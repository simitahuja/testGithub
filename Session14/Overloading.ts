//Method Overloading and Constructor overloading in TS

class Calculator
{

    //Constructor Overloading 

    constructor();    // default constructor
    constructor(a:number, b:number);     // Parameterized constructor

    constructor(a?:number, b?: number)
    {
        if(a!==undefined && b!==undefined)
        {
            console.log("Sum of a and b", (a+b));
            
        }
        else
        {
            console.log("Default constructor called.....");
            
        }
    }




//Method Overloading

add(a:number, b:number):number;
add(a:number, b:number, c:number):number;

add(a:number, b:number, c?:number):number
{
    if(c!==undefined)
    {
        return a+b+c;
        
    }
    return a+b;
}


}

// Constructot Overloading Usage

let cal1= new Calculator();
let cal2=new Calculator(10,20);

// Method Overloading

console.log(cal1.add(10,20));
console.log(cal2.add(10,20,30));









































