// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24) //Year Month Date
// let myCreatedDate = new Date(2024, 0, 24, 5, 3)
let myCreatedDate = new Date("2006-09-05")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myCreatedDate.getTime());
// consolr.log(myCreatedData.getTime());
console.log(Math.floor(Date.now() /1000)); //To convert to seconds *with less decimal no.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //From zero
console.log(newDate.getDay()+1); 

//'${newDate.getDay()} and the time '

newDate.toLocaleString('default',{
    weekday: "long"
})








