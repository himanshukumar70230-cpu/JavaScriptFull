//Dates

let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);


let myCreatedDate = new Date(2026,0,23);

console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());

console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth())


newDate.toLocaleString('default',{
    weekday:'long',
})



