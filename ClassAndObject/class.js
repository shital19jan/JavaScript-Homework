class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi,my name is ${this.name} and i am ${this.age} years old.`)
    }
}
const obj = new Person("John", 30);
obj.introduce()

// =================================================================================================

// 2️⃣ Create Multiple Objects
// Using the Person class:
// Create 3 objects

// Print introduction of each

const person1 = new Person("Ram", 50);
person1.introduce();

const person2 = new Person("Sam", 35);
person2.introduce();

const person3 = new Person("Bob", 25);
person3.introduce();


// ===========================================================================================================
// 3️⃣ Add a Method
// Create a class Calculator with methods:
// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)
// Test with different values.

class Calculator {
    constructor(result = 0) {
        this.result = result
    }

    add(a, b) {
        this.result = a + b;
        console.log("Addition: ", this.result)
    }

    substract(a, b) {
        this.result = a - b;
        console.log("substract: ", this.result)
    }

    multiply(a, b) {
        this.result = a * b;
        console.log("multiplication : ", this.result)
    }

    divide(a, b) {
        this.result = a / b;
        console.log("Division : ", this.result)
    }

}

const calObj = new Calculator
calObj.add(10, 20);
calObj.substract(20, 5);
calObj.multiply(10, 5);
calObj.divide(20, 2);

// =============================================================================================
// 4️⃣ Check instanceof
// Create a class Animal.
//  Create object of it.
//  Check using instanceof.


class Student {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log("my name is ", this.name)
    }
}
const studObj = new Student("Shital");
studObj.getName();

console.log(studObj instanceof Student);  // true it checks studeObj is instance of class student;

console.log(obj instanceof Student);  // false 


// ============================================================================================

// Create class BankAccount:
// accountHolder ,balance (default 0)

// deposit(amount)
// withdraw(amount)
// getBalance()
// Edge case:
// Prevent withdrawal if balance insufficient.

class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("deposit:", this.balance)
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!")
            return;
        }
        this.balance -= amount;
        console.log("withdraw amount:", amount)
    }
    getBalance() {
        return this.balance;
        // console.log("balance is :",this.balance)
    }


}

const account = new BankAccount("shital")
account.deposit(1000)
account.withdraw(700);
account.withdraw(700);  //egde case insufficient balance
console.log("Balance is :", account.getBalance())
// account.getBalance()

// ================================================================================================
// 6️⃣ Static Method
// Create class MathUtils
// static method square(num)
// static method cube(num)

// Call them without creating object.


class MathUtils{

    constructor(result=0){
        this.result=result;
    }
    static square(num){
        // this.result=num**2;
        // console.log(this.result)
        return num*num;
    }

    static cube(num){
        return num**3
    }
}

console.log(MathUtils.square(2))
// MathUtils.square(2)

console.log(MathUtils.cube(3))

// ==============================================================================================================

// Create class User:
// private _email
// setter should validate:
// must contain "@"

// getter should return email in lowercase







class User {
 constructor(email) {
   this._email = email;
 }

 get email() {
   return this._email.toLowerCase();
 }

  set email(value) {   // ✅ correct setter
    if (!value.includes("@")) {
      console.log("Email must contain @");
      return;
    }
    this._email = value;
  }
}

const userObj = new User("TEST@Gmail.com");

userObj.email = "invalidemail";  // calls setter
console.log(userObj.email);      // still old value

userObj.email = "NEW@Mail.com";
console.log(userObj.email);

// ========================================================================================