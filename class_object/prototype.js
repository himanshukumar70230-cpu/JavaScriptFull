let myName = "himanshu    "
// console.log(myName.trim().length);
console.log(myName.length);



let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "Himanshu",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

heroPower.hitesh();
myHeros.hitesh();

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

myHeros.heyHitesh();
// heroPower.heyHitesh();

//inheritance
const User = {
    name: 'Himah',
    email:'google@com'

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User
//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);


let anotherUsername = "chaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();