// export {}

var scores = [25, 45, 60, 30, 80, 50];

var resultScore=scores.filter((el)=> {
return el>30;
}).map((el)=>{
    return el+5;
})
console.log(resultScore);


var numbers = [1, 2, 3, 4, 5];
var resultNumbers=numbers.map((el)=>{
    return el*2;
})    
console.log(resultNumbers);

// 2️⃣ Convert Numbers to Strings
var numbers1 = [10, 20, 30];
var rest=numbers1.map((el)=>
    el.toString()
)
// var rest = numbers1.map(num => num.toString());
console.log(rest);


// Input
var numb2 = [1, 2, 3, 4, 5, 6];
var newNum=[];
var resNum2=numb2.filter((el)=>{
    if(el%2==0)
        newNum.push(el);
})
console.log(newNum)
// =======================================================

var numbe= [-5, 10, -2, 0, 15];
var newNumb=[];
var resnumbe=numbe.filter((el)=>{
    if(el>=0){
newNumb.push(el);
    }
})

console.log(newNumb);

// 5️⃣ Add “Mr.” to Names
var names = ["Rahul", "Amit", "Suresh"];

var resNames=names.map((el)=>{
    return "Mr."+el;
})
console.log(resNames) // ["Mr. Rahul", "Mr. Amit", "Mr. Suresh"]

// ===========================================================

var words = ["apple", "banana", "kiwi"];
var resWords=words.map((el)=>{
    return el.length;
})
console.log(resWords)

// ===================================================

var marks = [35, 60, 42, 25, 80];

var resMarks=marks.filter((el)=>{
    return el>35;
})
console.log(resMarks);   //[60, 42, 80]


// 8️⃣ Square Only Even Numbers
var numbers = [1, 2, 3, 4, 5];
var square=[];
var resNum=numbers.map((el)=>{
    if(el%2==0){
        square.push(el**2)

    }
})

console.log(square)   //[4,16]


// 9️⃣ Convert Prices to GST-Included Prices

var prices = [100, 200, 300];
var resPrices=prices.map((el)=>{
    return (el*1.18)    
})
console.log(resPrices);  //[118, 236, 354]

// 🔟 Extract User Names

var users = [
  { id: 1, name: "Anil", age: 25 },
  { id: 2, name: "Sunil", age: 30 },
  { id: 3, name: "Ravi", age: 15 }
];

var Username=users.map((el)=>{
    return el.name;

})
console.log(Username)  //["Anil", "Sunil", "Ravi"]




var filternameUsingAge=[]
var filterAge=users.filter((el)=>{
     if(el.age>=18){

filternameUsingAge.push(el.name)
     }
})
console.log(filternameUsingAge) //  ["Anil", "Sunil"]



// 1️⃣3️⃣ Product Price Update Increase price by 10% for all products


var products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 15000 }
];

var updatePrice=[];
var priceUpdate=products.map((el)=>{
    return (el.price+0.10)
    // updatePrice.push(el.price);
    
})
console.log(priceUpdate);

// From the above products, return products whose price is greater than 20,000.

var pricegreater=products.filter((el)=>{
    return el.price>20000;
})
console.log(pricegreater);

var students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 35 },
  { name: "Karan", marks: 70 }
];
var nameInUppercase=[];


//Filter students who passed (marks ≥ 40)
var passedStudents=students.filter((mark)=>{
    return mark.marks>40;
}).map((el)=>{
    nameInUppercase.push(el.name.toUpperCase());
})
// console.log(passedStudents);

console.log(nameInUppercase);


// Return a new array with only their names in uppercase
// var nameInUppercase:any=[];

// var namesUppercase=students.map((el:any)=>{
    // return (el.name.toUpperCase());
    // nameInUppercase.push(el.name.toUpperCase());
    // nameInUppercase.push(el.name.toUppercase())
// })
// console.log(nameInUppercase);
