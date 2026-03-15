/*
1. Primitive Data Types(Built in)
Number
String
Boolean
Null
Undefined
Any
Union Type
Void

2. Non Primitive types(Object)
Array
Class
Function
Integ=rface
Touple etc...

*/

//Primitive Data Type
/*
//a) Number type- It represents both integers and floating point numbers

let age:number=25;
let price=22.2;
let big=8765434567;

console.log("Age:",age);
console.log("Price:",price);
console.log("A big number:",big);

console.log(typeof(age));
*//*
//b) String type- it represents textual data

//-> USing single quote
//-> Using double quote
//-> Using backtick

let firstName="John";
let last:string="Kennedy";

let greeting:string=`Hello ${firstName}${last}`;
console.log(greeting);
*/
/*
//c) Boolean Type- It represents true/false values

let isStudent:boolean= true;
let hasJob:boolean=false;

console.log("Is Strudent?",isStudent);
console.log("Has Job?", hasJob);

*/
/*
//d) Null and Undefined- It represents special types for absence of values

let emptyValue:null=null;

let notAssigned:undefined=undefined;

console.log(emptyValue);
console.log(notAssigned);

let price:number;
console.log(price);
*/
/*
//e) Any data type- it losed TS benefits

let value:any="Welcome";
value=21;

console.log(value);
*/
/*
//f) Union Type- It combines multiple types
let id:number| string |boolean;

id="abc";
console.log(id);

id=1;
console.log(id);
*/
//g) Void type- It is used for functions that don't return anything
/*
function show(): void
{
    console.log("Welcome");
    
}
show();
*/

function sum(x:number, y:number):number
{
   //onsole.log(x+y);
   return (x+y);
}
let result:number=sum(10,20);

//m(10,20);







