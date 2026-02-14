let score = 33;
console.log(typeof score)
let age = "33abc";
let valueInNumber = Number(age)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
//conversion into Number
//"33" => 33
//"33abc" => NaN
//null=>0
//true = 1
//undefined = NaN
let isLoggedIn = ""
let booleanis = Boolean(isLoggedIn)
/**CONVRSION INTO BOOLEAN
 * 1=>true
 * 0=>false
 * ""=>false
 * "ram"=>true
 */

console.log(booleanis)
let SomeNumber = 33
let iNString = String(SomeNumber)
console.log(typeof iNString)
//*******************************************OPERATION******************************************** */
console.log(2+2)
console.log(2*2)
console.log(2**3)
console.log(4/2)
console.log(5%2)
//conCation of string
let str1 = "Hello"
let str2 = " Himanshu"
let str3 = str1+str2
console.log(str3)
console.log("1"+2+2)
console.log(1+2+"3")
console.log(true)
console.log(+true)
let gameCounter = 100
gameCounter++
console.log(gameCounter)
console.log("2">1) //automatically js convert this "2" into string
console.log("2"===2) //this will strictly check the number and its datatype
console.log(null >=0)
console.log(null ==0)
console.log(null > 0) //automatically js convert this null into 0
