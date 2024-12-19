//array 

const myArr = [0, 1, 2, 3, 4, 5, false, "Chemma" ]
const myHeros = ["shaktiman", "Superman"]

const myArr2 = new Array(1, 2, 3, 4) //It automalically adds sqr bracekts
console.log(myArr[7]);
console.log(myArr2[3]);

// Array methods

// myArr.push(6) //Adds one more value
// myArr.push(7)
// myArr.pop() //removes the last value

//  myArr.unshift(90) //Adds the givenvalue in front
//  myArr.shift() //removes the value from front 

// console.log(myArr.includes(90)); //For checking
// console.log(myArr.indexOf(3)); //gives the value in 3rd position(st from zero )

// const newArr = myArr.join() //Turns the array ele in string ele

// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) //returns a section of array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) //Same but also includes 3
console.log("c", myArr)
 console.log(myn2);
 // Slice doesnt include range but splice does
 // Original array is manipulated by splice

 const despair



