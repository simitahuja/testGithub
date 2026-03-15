//Arrow functions are also called as Lambda functions
 /* 
 Lambda refers to anonymous functons in programming 
 Lambda functions are a concise mechanism to represent anonymous functions
 These functions are also called as Arrow functions

 There are 3 parts to a lambda function

 1. Parameters- a fn may optionally have parameters
 2. The fat arrow notation/lamda notation(=>)- it is also called as the goes to operator
 3. Statements- represent the fn instruction set

 Syntax- 

 let variable=(parameters)=>
 {
    //block of code
 }
 
 variable();
 
 
 */
/*
//Eg-1- Arrow fn with no parameters and no return type

let greet=():void=>
{
    console.log("Hello");
    
}
greet();

*/
/*
//Eg-2- Arrow fn with parameters and a return type

let add=(a:number, b:number):number=>
{
    return a+b;
}
console.log(add(10,20));

*/
/*
//Eg-3- Arrow fn with implicit return 

let add=(a:number, b:number):number=>a+b;
let multiply=(a:number, b:number):number=>a*b;

console.log(add(10,20));
console.log(multiply(10,20));
*/
/*
//Eg-4- Arrow fn with optional parameters

let display=(id:number, name:string, mail?:string):void=> // By ? it becomes optional

{
    console.log("ID: ",id);
    console.log("Name", name);
    if(mail!==undefined)
    {
        console.log("mail: ", mail);
        
    }
    
    
}
display(123,"Scott");

*/
/*
//Eg-5- Arrow fn with default parameters
let cal= (price:number, rate:number=0.50):void=>  // assigning default value
{
    let discount:number=price*rate;
    console.log("Discount amount: ",discount);
    
}
//calculateDiscounts(1000,0.30);

calculateDiscounts(1000);

*/
/*
//Eg-6- Arrow fn with Rest parameters

 let findElements=(...elements:(number|string)[]):number=>
{
    return elements.length;

}
console.log(findElements(3,"John",2,4,"Simit"));
*/






















