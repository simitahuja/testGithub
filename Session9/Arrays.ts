/*
Arrays in TS

- An array is a special type of variable that stores multiple values
- The value can be of same data type or different data types
-Arrays are declared using [] or the generic "Array<T>" type
-Indexing starts from 0
-Arrays are an ordered collection of elements
*/
/*
//Approach 1: Using leteral

let names:string[]=[];  //Array declaration but not assigned any data

//Initialization/Assigning values
names[0]="Simit";
names[1]="John";
names[2]="sim";
*/
/*
let names:string[]=["John","Simit", "Peter"];  //declaration and initialization
console.log(names);
*/

//Approach 2- Using generic Array<T> Type

let names:Array<string>=["John","Simit", "Peter"];
console.log(names);

//Example 1- Iterating over an array using a traditional for loop

console.log("Employee names");

for(let i=0;i<=names.length-1;i++)
{
    console.log(names[i]);
    
}

//Example 2- Now iterating using for...in loop

console.log("Employee ids");

for(let i in names)
{
    console.log(names[i]);
    
}

//Example 3- Now iterating using for...of loop

console.log("Mixed data");

for(let value of names)
{
    console.log(value);
    
}

//Example 4- Passing array to the function

//Search an element in an array using functio

function search(ele:number, arr:number[]):boolean
{
    for(let i=0;i<=arr.length-1;i++)
    {
        if(arr[i]==ele)
        {
            return true;
        }
    }
        return false;

    
    
}

console.log(search(1,[1,2,3,4]));

//Example 5- A function takes an Array and return an array

function capitaizeWords(arr1:string[]):string[]
{   
    let result:string[]=[];
        
    for(let i=0;i<=arr1.length-1;i++)
    {
        result[i]=arr1[i].toUpperCase();
    }
    return result;
}
let words:string[]=["John", "Simit"];
console.log(capitaizeWords(words));














