let numbers: number[]=[1,2,3,4,5];
let fruites: string[]=["apple","banana","grapes","orange"];

console.log("Numbers array :", numbers);
console.log("Fruites array: ", fruites);

//length- attribute (Not a method)

console.log("Size of numbers array", numbers.length);
console.log("Size of fruites array", fruites.length);



//1. push()- Add single  or multiple elements to the end of an array
//Syntax- array.push(element1, element2,..... elementN)

numbers.push(6,7);
console.log("After push", numbers);

//2. pop()- Removes the last element from an array
//Syntax- Array.pop()

let lastfruit=fruites.pop();
console.log(fruites);
console.log(lastfruit);


//3. shift()- It removes the first element from the array
//Syntax- array.shift()

let firstnum=numbers.shift();
console.log("After shifting", numbers);
console.log(firstnum);

//4. unchift()- Add single or multiple elements to the beginning of an array
//Syntax- array.unshift(element1, element2.....elementN)

fruites.unshift("Kiwi","Pear");
console.log("After unshift", fruites);


//5. concat()- We cn combine 2 or more arrays
//Syntax- array.concat(array1, array2,.....arrayN)

let combinedArray=numbers.concat([8,9],[10]);
console.log("Concatenated array-", numbers);

console.log(combinedArray);

//6. slice()- It will extract a section of an array
//Starting index starts from zero
//Ending index will be exclusive. Eg- If 3 is ending index, it will consider 2(3-1=2)
//Syntax- array.slice(start, end)


let extractedArray=fruites.slice(1,3);
console.log("Slice", extractedArray);

//7. splice()- user can add/remove an element in the array from everywere
//Syntax- array.splice(start, deleteCount, item1..... itemN)

console.log("Current Elements in fruites array", fruites);

//Eg-1- Only removing
let removedElements=fruites.splice(1,2); // 1 is starting index and 2 is how many elements to be removed

console.log("After slice", fruites);
console.log("After splice",removedElements);

//Eg-2- Not removing but adding
fruites.splice(1,0,'Pineapple', 'grape');;
console.log("After splice", fruites);

//Eg-3-both removing and adding
fruites.splice(1,2,'Mango','cherry');
console.log("After splice", fruites);

//8. indexOf()- Finds out the index of an element , if element not not found then return -1
//Syntax- array.indexOf(searchElement) or array.indexOf(searchElement, Starting Index)

//Eg-1-
let bananaIndex=fruites.indexOf("banana");
console.log(bananaIndex);

//Eg-2-
let papayaIndex=fruites.indexOf("papaya")
console.log("Index of papaya is", papayaIndex);


//Eg-3-
bananaIndex=fruites.indexOf("banana",2);
console.log("Index of banana",bananaIndex);

//9. includes()- checks if an element exists and return true or false
//Syntax- array.include(searchElement, fromIndex)

let isAppleExist=fruites.includes('apple');
console.log("Does fruites include apple? ", isAppleExist);

//10. toString()- Converts array to string
//Syntax- array.toString()

console.log(numbers);

let numbersString=numbers.toString();
console.log("Converted Array to String", numbersString);

let myarray:string[]=['w','e','c','o','m','e'];
console.log("Original array", myarray);

let strArray:string=myarray.toString();
console.log("Converted String", strArray);













