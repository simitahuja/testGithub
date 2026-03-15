// It is a fn passed as an argument to another fn and executed later
/*
//Eg-1-
//Fn  that takes callback fn as a parameter
function greet(name:string, smg:(message:string)=>void)
{
    console.log(name);
    smg("Hello");
    
}

function showMessage(message:string)
{
    console.log(message);
    
}
//showMessage("Welcome");
//Calling the fn by passing hte callback fn
greet("John", showMessage);

*/

function sum(a:number, b:number, drp:(result:number)=>void)
{
    let result=a+b;
    drp(result);
}

//callback function
function displayResult(result:number):void
{
    console.log(result);
    
}

sum(10,20,displayResult);






























