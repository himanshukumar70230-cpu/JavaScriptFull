//const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Himanshu";

console.log(tinderUser);

const regularUser = {
    email: "Himanshu@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Himanshu",
            lastname: "kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

//const obj3 = {obj1,obj2}; //object inside object
//const obj3 = Object.assign({},obj1,obj2);
//console.log(obj3===obj1);
const obj3 = {...obj1,...obj2};

console.log(obj3);


//Use when data comes form database
const user = [
    {
        id: 1,
        email: "h@gamil"
    }
]

//user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
