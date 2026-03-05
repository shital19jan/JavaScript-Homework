// Q1 — call()
// Create an object person1 with name Rahul and a function greet().
// Use call() to invoke the function with another object person2.

const person = {
    name: "Rahul",

    greet(city) {
        return "Hello " + this.name + " and city is " + city;
        // console.log ("Hello",this.name ,"and city is",city);

    }
}

const person2 = {
    name: "John"
}
console.log(person.greet.call(person2, "Pune"));
// person1.greet.call(person2,"Pune");

// =======================================================================================================

// Create a function:
// introduce(city, country)
// Use apply() to call the function.

const student1 = {
 name: "Rahul",
 introduce: function(city,country) {
   console.log(this.name + " " + city + " " + country);
 }
};

const student2 = {
 name: "Amit"
};

student1.introduce.apply(student2, ["Pune", "India"]);

// ============================================================================

// Create a function:
// showName()
// Bind it to another object and call it later.

const stud2={
    name:"Bob",

    showName:function(){
        console.log(`my name is ${this.name}`)
    }
}
const obj={
    name:"Mike"
}

const s1=stud2.showName.bind(obj);  // bind returns new function
s1()                     

// ================================================================================================

// Q4 — Function Borrowing
// Create two objects:
// person1
// person2
// Add a function in person1 and use call() to run it with person2.

const person1={

    greet:function(name){
        console.log("hello everyone i am ",name)
    }
}

const person3 = {
 name:"Ram"
}

person1.greet.call(person3,"John")

// =================================================================================================

// Q5 — Pass Multiple Arguments
// Create a function:
// add(a,b)
// Call it using:
// call
// apply
// bind

function add(a,b){
    return a+b;
}

const obj1={
    name:"sam"
}
console.log(add.call(obj1,10,20))

console.log(add.apply(obj1,[10,20]));

const addFun=add.bind(obj1,10,20);
console.log(addFun());

// ===============================================================================

// Q6 — Bind Partial Arguments
// Use bind() to preset one argument.
// Example
// multiply(a,b)
// Bind a = 10.


function multiply(a,b){
    return a*b;
}

const multiplyBy10=multiply.bind(null,5);  //  preset a=5  null used because we are not use this arguments
console.log(multiplyBy10(10));   //50
console.log(multiplyBy10(2));   // 10

// =======================================================================================

// Q7 — setTimeout + bind
// Create an object:
// user = { name: "Rahul" }
// Call a function using setTimeout but maintain correct this using bind.

const user = {
  name: "Rahul"
};

function greet() {
  console.log("Hello " + this.name);
}

setTimeout(greet.bind(user), 2000);


// ============================================================================

// Q8 — Method Borrowing
// Create two objects:
// company1
// company2
// Use call() to borrow a method.

const company1 = {
 name: "Google",
 print: function(empName) {
   console.log(empName + " works at " + this.name);
 }
};

const company2 = {
 name: "Microsoft"
};

company1.print.call(company2, "John");


// =====================================================================================

// Q9 — Array Math Using apply
// Use Math.max() with apply() to find maximum value in array.
// [5,10,20,30]
const arr = [5,10,20,30];

console.log(Math.max.apply(null, arr));

// ==========================================================================================

// Write two examples showing the difference between:
// call()
// apply()

function greet(city, country) {
  console.log(this.name + " lives in " + city + ", " + country);
}

const personData = { name: "Rahul" };

greet.call(personData, "Nagpur", "India");  //pass argument

greet.apply(person, ["Nagpur", "India"]);  // pass arguments as an array


// export.2

console.log(Math.max.call(null, 10, 20, 30, 40));
const numbers = [10, 20, 30, 40];

console.log(Math.max.apply(null, numbers));
