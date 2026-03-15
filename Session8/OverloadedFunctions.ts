/*For overloading concept-
Step 1- Write a signature of the functions
Step 2- We need to implement a function
Step3- Calling the fn
*/
/*
//Example 1- Different paramenter types( data types)
function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param: number|string):string
{
    if(typeof param=="number")
    {
        return (`User id is ${param}`);
    }
    else{
        return (`User name is ${param}`);
        
    }
}

console.log(getInfo(101));
console.log(getInfo("John"));

*/
/*
//Example 2- Different number of parameters

function add(a:number, b:number):number;
function add(a:number, b:number, c:number):number;

function add(a:number,b:number, c?:number):number
{
    if(c!=undefined)
    {
        return a+b+c;
    }
    else
    {
        return a+b;
    }
}

console.log(add(1,2,3));

console.log(add(1,2));
*/
/*
//Example 3- Different Return types

function processInput(s:string):string;
function processInput(num:number):number;

function processInput(inp:string | number):string|number
{
    if(typeof inp=="string")
    {
        return inp.toUpperCase();
    }
    else
    {
        return inp*2;
    }
}

console.log(processInput("Simit"));

console.log(processInput(3));
*/

//Example 4- 

function greet(s:string):string;
function greet(n:number):string;
function greet(isMarried:boolean):string;

function greet(value:string|number|boolean):string{
    if(typeof value=="string")
    {
        return `Hello  ${value}`;
    }
    else if(typeof value=="number")
    {
        return `${value}`;
    }
    else
    {
        return `You are ${value} `;
    }
}
console.log(greet("Simit"));

console.log(greet(34));

console.log(greet(true));













