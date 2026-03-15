//Named function- A function that is declared with a name

/* Syntax
function functionName(parameter): returnType
{
    //Block of code
}
    functionName();    // calling or invoking the function

    *//*

    //Eg-1 - No parameters and no return type

    function display(): void{

        console.log("Welcome to TS");
        
    }
    display();   // calling function
*/
/*
//Eg-2- Named function with paramets and return type

function addNumbers(x:number, y:number): number
{
    return x+y;

}
console.log(addNumbers(3,2));
*//*

//Eg-3- Named functions with Rest parameters
//Rest parameters don't restrict the number of values that pass to the function

function addNumbers(...nums:number[])
{
  let i;
  let sum:number=0;
  for(i=0;i<nums.length;i++)
  {
    sum=sum+nums[i];
  }
console.log("Sum of the numbers",sum);

}
addNumbers(1,2);
addNumbers(1,2,22,3,4);
*/
/*
//Eg-4: Named function with Rest parameters- multiple types

function findElements(...elements:(number|string)[]):number
{
    return elements.length;

}
console.log(findElements(3,"John",2,4,"Simit"));
*/

/*
//eg-5- Named parameters with optionl parameters

function displayDetails(id:number, name:string, mail?:string):void // By ? it becomes optional

{
    console.log("ID: ",id);
    console.log("Name", name);
    if(mail!==undefined)
    {
        console.log("mail: ", mail);
        
    }
    
    
}
displayDetails(3,"John");
*/

//Eg-6- Named functions with default parameters

function calculateDiscounts(price:number, rate:number=0.50):void  // assigning default value
{
    let discount:number=price*rate;
    console.log("Discount amount: ",discount);
    
}
//calculateDiscounts(1000,0.30);

calculateDiscounts(1000);














