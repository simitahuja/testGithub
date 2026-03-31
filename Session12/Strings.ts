//String - Text value or a combination of characters
/*

1. Single quote- String Literal 
2. Double quote- String literal
3. =backtick(``)- String template- When we try to use a string variable inside another string value `$(variable)`


index in string starts with 0

'' or"" or``
*/

let strt:string='This is a string with single quote';

let strt1:string="This is a string with Double quote";

let strt2:string=`This is a string with backtick `;

console.log(strt);
console.log(strt1);
console.log(strt2);

//When to use backtick

let num:number=10;
console.log("Number is ", num);

console.log(`Number is:  ${num}`);


//String methods

let s:string="Hello, TS";

//1.length
console.log(s.length);

//2. toUpperCase() and toLowerCase()

console.log("Upper case", s.toUpperCase);
console.log("Lower case", s.toLowerCase);

//3. charAt(index) and indexOf(String)

console.log(s.charAt(4));
console.log(s.indexOf("T"));

//4. substring(starting index, ending index)
//Ending index  is exclusive

console.log(s.substring(0,5));


//5. includes()- returns true or false (boolean)
//String value is case sensitive

console.log(s.includes("abc"));
console.log(s.includes("T"));


//6. startsWith() and endsWith()-returns a boolean value which is true or false

console.log(s.startsWith("Hello"));
console.log(s.endsWith("T"));

//7. replace()

console.log(s.replace("T","S"));

//8. split()- it split the string into multiple parts based on the delimeter and return an array
//Eg-1-
console.log(s.split(" "));

//Eg-2-
let mystring:string="abc@gmail.com,xyzabc";

let a=mystring.split(",");
console.log("email: ", a[0]);
console.log("password: ",a[1]);

//8. trim(), trimStart(), trimEnd()

mystring="   welcome to TS    ";
console.log(mystring.trim());
console.log(mystring.trimStart());
console.log(mystring.trimEnd());

//9. concat()

let s1:string="Welcome"
let s2="TS";
let s3="and JS";
console.log(s1.concat(s2));
console.log(s1.concat(s2).concat(s3));

// Concept of String immutability (Immutable means cannot change the original value)

let n=10;
let res=n+5;
console.log(res);

s1="welcome";
let modifiedString=s1.concat("to TS");
console.log(s1);

//Multiline String- we can perform by using backtick operator

let multiLine:string=`welcome
to TS`;
console.log(multiLine);




































