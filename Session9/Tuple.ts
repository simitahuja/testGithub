/*  
Tuple in TS
A tuple is a fixed length array where each element has a specific type
It helps in storing multiple fields of different data types together
*/
/*
//Example 1- Tuple with 2 values

let person:[string,number]=["John",23];
console.log(person[0]);
*/
/*
//Example 2- Tuple with multiple vlues

let user:[number, string, number]=[12,"John",123];
console.log(user);
*/

//Traditional loop
let user:[number, string, number]=[12,"John",123];
for(let i=0;i<=UserActivation.length-1;i++)
{
    console.log(user[i]);
}

//For...in loop

console.log("Using for in loop");

for(let i in user)
{
    console.log(user[i]);
    
}

//Using for of loop

console.log("Using for of loop");

for(let value of user)
{
    console.log(value);
    
}

//Array with Tuples

let students:[number, string][]=[[121, "John"],[12,"simit"]];

console.log(students[0]);













