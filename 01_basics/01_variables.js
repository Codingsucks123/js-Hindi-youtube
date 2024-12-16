const accountId = 14435
let accountEmail = "winnu.p1819@gmail.com"
var accountPassword= "1234"
accountCity = "Hyderabad"

// accountId = 2//not allowed

accountEmail = "12212"
accountPassword = "232323"
accountCity = "Delhi"

console.log("accountId");
//Prefer not to use var because of issue in block and functional scope 

console.table([accountId,accountEmail,accountPassword,accountCity])
