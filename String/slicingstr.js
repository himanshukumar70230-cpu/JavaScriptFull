//Slicing of string

const gameName = new String("Himanshu");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf('s'));

console.log(gameName.slice(0,4));

console.log(gameName.substring(0,5));

console.log(gameName.slice(-1));


//Trime and replace method


const newSringOne = "   Himanshu   ";
console.log(newSringOne); //This print with the space 

console.log(newSringOne.trimStart()+'r');

console.log(newSringOne.trim());

//Replace 
const url = "https://himasnhu.com/himanshu%20Kumar";
console.log(url.replace('%20','_'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));





