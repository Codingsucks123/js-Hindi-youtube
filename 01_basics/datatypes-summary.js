// Primitive

// 7 types :String, Number, boolean, Null, Undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 12345678905678678n //n at the end represents that it is called as bigInt
 

// eg:- const score = 100 here we didnt tell the compiler that it is number it just knows that
//developers in dynamic typed languages don't need to explicitly specify data types when coding.
//Thats y js is dynamic lang

// Reference (Non primitive)

// Arrary, Objects, Functions

const heros = ["spiderman", "superman", "ironman"]; //Array
let myObj = {
    name: "winnu",
    age: 18,
} //Obj --- Like structure

const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof null);
console.log(typeof myFunction);