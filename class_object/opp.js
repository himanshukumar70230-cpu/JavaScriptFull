const user = {
    username: "Himanshu",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log('Get User details from DataBase');
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    // return this
}

const userOne = new User("Hitesh",12,true);
const userTwo = new User("chaiAurCode",8,false);
console.log(userOne.constructor);

console.log(userTwo);