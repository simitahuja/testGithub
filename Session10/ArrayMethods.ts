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

numbers.concat([8,9],[10]);
console.log("Concatenated array-", numbers);

















