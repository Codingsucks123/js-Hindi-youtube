// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 <= 2);
// console.log(1 == 2);
// console.log(1 != 2); Basic comparison

// console.log("2" >= 1); //Dont do like this
// console.log("02" >= 1); //Diff data types can sometimes not give predictable or expected value

console.log(null > 0); //The reason y == and comparisons >,=,<,>=,<= work differently cuz,
console.log(null == 0); //Comparisions convert null to a number,treating its as zero,
console.log(null >= 0); //Thats y null > 0 is false and null >= 0 is true. 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); //This also causes confusion so better avoid 

// ===   called strict check

console.log("2 === 2");