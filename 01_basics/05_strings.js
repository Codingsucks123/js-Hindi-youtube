const name = "winnu"
const repocount = 50

console.log(name + repocount + "Winner"); //Outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('free-fire-boda')

// console.log(gamename[3]);
// console.log(gamename.__proto__);

// console.log(gamename.length)
// console.log(gamename.toUpperCase())
console.log(gamename.charAt(5))
console.log(gamename.indexOf('r'));

const newString = gamename.substring(0,6)
console.log(newString); //Note 6th char not came

const anotherString = gamename.slice(-8,4)
console.log(anotherString);

const newStringOne = "   WINNU   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://winnu.com/winnu%99puli"

console.log(url.replace('%99', '-'));

console.log(url.includes('chemma'))

console.log(gamename.split('-'))
