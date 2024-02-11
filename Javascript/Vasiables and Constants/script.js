// Variables and Constants are used to store data, and in variables, the data is stored and can be changed. But in constants data can't be store and changed.

// var a = 12;
// var b = 22;
// const c = 32;


// Compilers and Interpreters

// JS Understands English but computer doesn't understands english.

// Console Alert and Prompt

// console.lg
// console.log("Hello");

//console.warn();
// console.warn("Dhruv Mehta");


// console.error();
// console.error("Dhruv Mehta");


// Alert

// alert("Make sure this is correct");


// Prompt
// prompt("Is this Correct?");

// ---------------------------------------------------------------------------

// Types

// There are mainly 2 types.

// 1. Primitive Data Types
// 2. Reference Data Types

// 1. Primitive Data Types
// 12, 12,5, Dhruv, true, undefined

// 2. Reference Data Types

// {} () [] - Reference Data Type


// Name = String
// 12 - Integer
// 12.3 - Float
// 22.0 - float
// true - boolean
// a - character

// "Dhruv@1311"

// var a = 12;
// var a = 12.1;
// var a = true;
// var a = [];
// var a = false;
// var a = null;
// var a = undefined;
// var a = function(){};

// var arr = [1,2,3,4,5];
// var b = arr;

// var gd = [2,3,4,5,3];
// var s = [...gd];

// ---------------------------------------------------------------------------


// Conditionals = true false

// Types - if else else-if ternary operator switch case

// If

// var age = 20;
// if(age>=20){
//     console.log("Your age is more");
// }

// If Else

// var age = 24;
// if(age<22){
//     console.log("Sorry");
// }
// else{
//     console.log("Welcome");
// }

// Else-If

// if(12>13){
//     console.log("1st")
// }
// else if(12>14){
//     console.log("2nd")
// }
// else if(16>14){
//     console.log("3rd")
// }

// ---------------------------------------------------------------------------

// LOOPS

// Types : For while do-while foreach forin forof

// For
// Syntax
// for(start; end; change){

// }

// 3 - 12
// for(i = 3; i<=12; i++){
//     console.log(i);
// }

// 20 - 7
// for(i=20; i>6; i--){
//     console.log(i)
// }

// While Loop
// Syntax
// while(condition){

// }

// start;
// while(end){
//     change;
// }

// 1 - 10
// var i = 1
// while(i<11){
//     i++;
//     console.log(i);
// }
// 20 - 30
// var j = 20
// while(j<30){
//     j++;
//     console.log(j);
// }

// console.log("Break")
// 32 - 45
// var k = 32
// while(k<=45){
//     console.log(k)
//     k++;
    
// }
// 45 - 32
// var l = 45;
// while(l>31){
//     console.log(l)
//     l--;
// }
// 12 -1


// ---------------------------------------------------------------------------

// FUNCTIONS

// function abcd(){
//     console.log("Hey My Name is Dhruv")
//     console.log("I am working in C#")
//     console.log("I like to stay updated with latest technologies")
//     console.log("You wanna connect with me ?")
//     console.log("Let's meet again !")
// }

// abcd()

// var dateofbirth = 7;
// var todaysdate = 12;

// function happyBirthday(){
//     if(dateofbirth == todaysdate){
//         console.log("Happy Birthday")
//     }
// }

// Parameters & Arguments

// Parameters - function abcd() -- This is argument in ()

// function abcd(val){
//     console.log(12+val)
// }

// abcd(124);

// ---------------------------------------------------------------------------

// UNDEFINED, NOT DEFINED AND NULL

// Undefined is a value -> It's given when variables doesn't gets any value.( It's more like a Garbage Value, we can also call it as a default value )
// For Example :

// var a; This will return undefined.


// not defined is an error
// console.log(a); -> This will return as not defined because we haven't defined a.


// null is a value.
// This resolves like, not found.
// Null is recieved when something is not found.

// ---------------------------------------------------------------------------

// ARRAYS

// What
// Array is a data structure in which we can store one or more than 1 value.

// var users = ["Dhruv", "Kartik", "Harsh", "Harshita", "Keshav"]
// console.log(users[1]);

// How
// Why

// ARRAYS WITH LOOP

// Syntax :

// var arr = [32,12,322,32,43]

// arr.forEach(function(){

// })

// USE

// var arr = [1, 16, 14, 30, 45]

// arr.forEach(function(val){
//     console.log(val);
// })


// ---------------------------------------------------------------------------

// OBJECTS

// What
// Object is a way with the help of which we can store details of identity tigether

// How to make objects

// var obj = {};
// var obj2 = new Object();

// var obj = {
//     name : "Dhruv",
//     age : 25,
//     email : "dhruvmehta1311@gmail.com",
//     contact : 7082811971
// }

// var battery = {
//     company : "Everady",
//     warranty : "1 Year",
//     size : "2vw",
//     isWorking : true
// }

// console.log(battery.company)

// When & Why -> When we want to save multiple properties of a thing

//  SYNCHRONOUS AND ASYNCHRONOUS JAVASCRIPT

