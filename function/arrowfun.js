const user = {
    username: "himanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`)
    }
}

user.welcomeMessage();

user.username = "Sam";

user.welcomeMessage();


console.log(this);

function chai(){
    let username = "Himasnhu";
    console.log(this.username);
}

chai();

const tea = ()=>{
    let username = "Himanshu";
    console.log(this.username);
}

tea();//consloe se print karo Q ki variable me hai fuction


/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Arrow fuction+++++++++++++++++++++++++++ */
const addTwo = (num1,num2)=>{
    return num1+num2;
}

console.log(addTwo(3,4));

const addOne = (num1,num2) => (num1+num2);

console.log(addOne(5,7));