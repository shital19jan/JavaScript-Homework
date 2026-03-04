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


class MathUtils {

    constructor(result = 0) {
        this.result = result;
    }
    static square(num) {
        // this.result=num**2;
        // console.log(this.result)
        return num * num;
    }

    static cube(num) {
        return num ** 3
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
// 8️⃣ Object.freeze Practice
// Create object config
//  Freeze it.
//  Try modifying and observe result.
// Explain:
//  👉 Why does it not change?

const empobj = {
    name: "John",
    salary: 50000
}

Object.freeze(empobj);
empobj.name = "Mike";
empobj.salary = 80000;
console.log(empobj)    //because object.freeze makes object immutable.

// ==========================================================================================
// 9️⃣ Basic Inheritance
// Create:
// class Vehicle
// brand
// method start()
// Create:
// class Car extends Vehicle
// fuelType
// method drive()

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} is starting`)
    }
}

class Car extends Vehicle {
    constructor(brand, fuelType) {
        super(brand);

        this.fuelType = fuelType;
    }

    drive() {
        console.log(`${this.brand} car is drive using ${this.fuelType}`)
    }
}
const carobj = new Car("Nexon", "petrol");
carobj.start();
carobj.drive()

// =========================================================================================================

// Create class Shape
// method area()
// Create:
// Circle class
// Override area()

class Shape {
    area() {
        console.log("area of shape")
    }
}
class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const crcleobj = new Circle(5);
console.log(crcleobj.area());


// ===============================================================================================

// Create class Employee
// name
// salary
// Create class Manager extends Employee
// department
// method displayDetails()
// Use super() correctly.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    displayDetails() {
        console.log(`name of employee is ${this.name}`);

        console.log(`salary of employee is ${this.salary}`)

        console.log(`departement of employee is ${this.department}`)

    }
}

const managerobj = new Manager("Rahul", 40000, "IT")
managerobj.displayDetails()

// ======================================================================================

// Create class Wallet
// private #balance
// addMoney(amount)
// spendMoney(amount)
// getBalance()
// Try accessing balance directly.
//  Explain what happens.


class Wallet {
    #balance = 0;

    addMoney(amount) {
        if (amount > 0) {
            this.#balance += amount;
            // console.log(amount);
            // return amount;
        }
    }
    spendMoney(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            // console.log("spendamount",amount)

        } else {
            console.log("Insuffiecient balance!")
        }
    }
    getBalance() {
        return this.#balance;
    }

}

const walletObj = new Wallet;
// console.log(walletObj.addMoney(1000))
walletObj.addMoney(1000);
walletObj.spendMoney(500);
console.log(walletObj.getBalance())    //500
// console.log(walletObj.#balance)    can not access directly it gives syntax error


// ================================================================================

// 1️⃣3️⃣ Factory vs Class
// Create:
// A factory function that creates a user.
// A class that creates a user.
// Explain difference.

function createUser(name, age) {
    return {
        name, age


    }
}

const user1 = createUser("john", 35);  //new keyword not need
console.log(user1);


class User1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hello my name is ${this.name} and age is ${this.age}`)
    }
}

const userobj = new User1("Sayli", 30); //new keyword used
userobj.greet()



// ===================================================================================

// 1️⃣4️⃣ Prototype Check
// Create class Student
//  Create 3 objects.
// Check:
// console.log(student1.__proto__ === student2.__proto__);
// Explain result.

class Student1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        console.log(`age of student is ${this.age}`)
    }
}
const stud1 = new Student1("Ram", 18);
console.log(stud1)
const stud2 = new Student1("sam", 20)
console.log(stud2)

const stude3 = new Student1("soham", 25);

console.log(stud1.__proto__ === stude3.__proto__);  // true
// console.log(stud1.__proto__ === user1.__proto__);  // false


//Bcoz All objects created from the same class share the same prototype object in memory.
//Every object created with new Student1() links to that same prototype



// =============================================================================================================

// 1️⃣5️⃣ Real-World Problem (Mini Project)
// Create class ShoppingCart:
// items (array)
// addItem(name, price)
// removeItem(name)
// getTotal()
// clearCart()
// Bonus:
// Add quantity feature.

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity = 1) {
        const existingItem = this.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ name, price, quantity });
        }

    }

    removeItem(name) {
        // this.items=this.items.filter((item)=>{
        //   return  item.name!==name;
        // })

        this.items = this.items.filter(item => item.name !== name
        )

    }
    getTotal() {
        return this.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
            // return acc;
        }, 0)
    }
    clearCart() {
        this.items = [];
    }

}

const cartObj = new ShoppingCart;
cartObj.addItem("Mobile", 25000, 2);
cartObj.addItem("TV", 20000, 2);
cartObj.addItem("Mobile", 25000, 2);
cartObj.addItem("TV", 20000, 2);



console.log(cartObj.items);
cartObj.removeItem("TV")
console.log(cartObj.items)
console.log(cartObj.getTotal());

// =================================================================================

// 1️⃣6️⃣ What happens if constructor returns an object?

class Test {
    constructor(name) {
        this.name = name;

        return { role: "Admin" };
    }
}

const user = new Test("Alice");
console.log(user);    //{role:Admin}           //If a constructor explicitly returns an object,
//JavaScript will return THAT object instead of this.
// ==============================================================================================================
class Student2 {
    greet() {
        return "Hello!";
    }
}

const s1 = new Student2();

console.log(s1.greet()); // Hello!



// ✔ Yes, a class can exist without a constructor.
// ✔ JavaScript automatically provides a default constructor.

// You only need to write one 
// when:

// 1.You want to initialize properties

// 2.You need parameters

// ===============================================================================

// 1️⃣8️⃣ Are classes hoisted?
// const p1 = new PersonData(); // Error can not access before initialization

// class PersonData {
//   constructor(name) {
//     this.name = name;
//   }
// }

/* reson:-
Classes are hoisted, but unlike functions, they are not initialized.
They exist in the Temporal Dead Zone and cannot be accessed before their declaration. */

// ===========================================================================================

// Explain:
//  Where are methods stored?
// In object?
// In prototype?


class PersonData1 {
  constructor(name) {
    this.name = name;
  }

  greet(){
    console.log("hello")
  }
}
const p2 = new PersonData1();
console.log(p2) 
p2.greet()

console.log(PersonData1.prototype);


console.log(p2._proto == PersonData1.prototype);  //true

//ans:- In prototype
