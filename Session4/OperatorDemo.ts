//Types of operators
let a:number=10, b:number=20;

//Arithmetic Operators
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); //(**) is exponential */

//Assignment Operators

a=10;
b=5;

a=a+b;
console.log(a);
console.log(a+=b);

//Relational/Comprison Operators
//Returns boolean- tru/false values
//>, <, <=,>=,==,!=,===(this is called Strict equalTo)
a=5;

b=20;
console.log(a>b);
console.log(a<=b);

//Difference between == (equality) and ===(Strict eaquality)
let num1:any=10; 
let num2:any="10";

console.log(num1==num2); //true it compares only values
console.log(num1===num2); //false becasue it compare the values along with the data types

//Logocal Operators
//&& || !
//It retunr boolean values

