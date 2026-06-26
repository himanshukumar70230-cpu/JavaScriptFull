class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
         this._email = value
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}hitesh`

    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const himanshu = new User("h@gmail.com","abc");


console.log(himanshu.password);