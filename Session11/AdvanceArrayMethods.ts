//1. forEach()- It executes a fn once for each array element
//It takes fn as a parameter

//Syntax- array.forEach(function(currentValue, index, array){})

//currentValue- The current element being processed in the array
//index(optional)- The index of the current element being processed in the array 
//array(optional)- The aray the current element belongs to
 
//Eg-1- Get index of all the fruites along with value

let fruites:string[]=["apple","banana", "orange","mango","kiwi"];
console.log("Printing fruites along with index using for loop....");

for(let i in fruites)
    { 
        console.log(i,fruites[i]);
        
    }


console.log("Printing fruites along with index using for each loop....");
/*
fruites.forEach(function(element, index)
{
    console.log(`${index}`, `${element}`);
    
});
*/

//Using arrow fn
fruites.forEach((element, index)=>
{
    //console.log(`${index}`, `${element}`);
    console.log(index, element);
});

//Eg-2-
fruites.forEach((element)=>
{
    console.log(element.toUpperCase());
    
});


//2. map()- It creates a new array with result of calling the fn on every element of an array
//It takes fn as a paremeter
//Returns the same number of elements that we have in original array

//Syntax- array.map(function(currentValue, index, array){});

//Eg-1-1 Get square of all thethe numbers in an array. Eg- [1,2,3] then result should be [1,4,9]


let numbers:number[]=[1,2,3];
let squaredNum=numbers.map((element)=>
{
    return element*element;
    
})
console.log(squaredNum);
console.log(numbers);


//Eg-2- Doiuble each number [1,2,3] then result should [2,4,6]
/*
let numbers1:number[]=[1,2,3];
let squaredNum1=numbers1.map((element)=>
{
    return element+element;
    
})
console.log(squaredNum1);
console.log(numbers1);
*/
//OR
let numbers1:number[]=[1,2,3];
let squaredNum1=numbers1.map((element)=>element+element); //If you have single return statement inside the arrow fn the {} and return is not needed

console.log(squaredNum1);
console.log(numbers1);

//3. filter()- It creates a new array with all the elements that pass/satisfy the fn
//It takes fn as a parameter
//Returns either the same or fewer number of elements compared to the original array

//Syntax- array.filter(function(currentValue, index, array){})

//Eg-1- Get only the even numbers from the array

let num:number[]=[1,2,3,4,5];
let even=num.filter((element)=> element%2==0);
console.log(even);

//Eg-2- Get the only numbers greater than 3 from an array
let num1:number[]=[1,2,3,4,5,6];
let greater=num1.filter((element)=> element>3);
console.log(greater);


//4. reduce()- Applies a fn on every element of an array and return a single value

//Syntax- array.reduce(function(accumulator, currentValue, index, array){})
//accumulator- The accumulated value from previous iteration

//Eg-1- Get the total sum of elements in an array

let totalNum:number[]=[1,2,3,4,5];

let sum=totalNum.reduce((total,element)=>element+total);
console.log(sum);


//5. some()- Checks if any element satisfies a condition
//Returns true if at least one element passes the condition, else false

//Syntax- array.some(function(currentValue, index, array){})


//Eg-1- Check array contains negative number or not
let n:number[]=[-1,-2,3,-4];
let neg=n.some((element)=>element>0);
console.log(neg);


//6. every()- checks if all elements satisfy a condition
//Returns true if all elements pass the condition else false if even one fails

//Syntax- array.every(function(currentValue, index, array){});

//Eg-1- Array contains even numbers or not

let num2:number[]=[2,4,6,8];
let eve=num2.every((element)=>element%2==0);
console.log(eve);














