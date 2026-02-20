// 1.Create a function that accepts any number of arguments and returns their sum.

// output: sum(1,2,3,4) → 10

function sum(...num){
    return num.reduce((result,el)=>{
        return result+el;
    },0)
}
const sumResult=sum(1,2,3,4);
console.log(sumResult)

// 2.Write a function that returns how many values were passed.
//countArgs("a", "b", "c") → 3
function countArgs(...arg){
    const argumentsCount=arg.length;
    console.log("arg",argumentsCount);
}
countArgs("a","b","c");

// 3.show(10,20,30,40)   First: 10 Rest: [20,30,40]

const show=[10,20,30,40];
const [first,...others]=show;
console.log("first",first);
console.log("others",others);
// =========================================================================================
// 4.Create a function using REST that returns the largest number.

function isLargest(...nums){
    const largeNum=Math.max(...nums);
return largeNum
}
console.log(isLargest(1,2,3,4,8,10))


// 5.
function addTocart(userName,...items){
return `${userName} added ${items.length} items`;
}
const cartData=addTocart("John","sam","mike");
console.log(cartData);

// Q6. Remove a Property Using REST
const user = {
     id:1, 
     name:"Alex", 
    password:"1234", 
    role:"admin"
 }
const {password,...restdata}=user;
console.log(restdata);
//  delete user.password;
//  console.log("user",user);

// 7.Create a copy of an array using spread and prove that modifying the copy does NOT affect original (primitive values).

const colors=['red','green',"blue"];

const copyColors=[...colors];
console.log(copyColors);
copyColors.unshift('black');
console.log(copyColors);

// 8.Merge:
const frontend = ["HTML","CSS"]
const backend = ["Node","DB"];

const frontendAndbackenddata=[...frontend,...backend];
console.log(frontendAndbackenddata);

// 9.Using spread, insert 3 between [1,2,4,5] without manually editing.

const arrData=[1,2,4,5];
function insertdata(arr,index,value){
    return [...arr.slice(0, index), value, ...arr.slice(index)];
}
console.log(insertdata([1,2,4,5],2,3));

// 10.Clone an object and add a new property status: "active".

const object1={
    id:1,
name:"john",
}
const cloneObj={...object1,status:"active"};
console.log("cloneObj",cloneObj);

// object1.status="active";
// console.log(object1);

// 11.Update:
const config = { theme:"light", fontSize:14 }
const cloneconfiq={...config,theme:"dark"};
console.log(cloneconfiq)

const basic = { name:"Sam" }
const details = { age:25, city:"Pune" }


const basicDetails={...basic,...details};
console.log("basicDetails", basicDetails);
// =======================================================
const page1 = [1,2];
const page2 = [3,4];
const page3 = [5,6];

const combine=[...page1,...page2,...page3];
console.log(combine);

// 14.Write a function using REST that returns all arguments in uppercase (assume strings).
const stringData=["john","mike","Blob","sam"];
function isUppercase(...stringData){
return stringData.map((item)=>
    item.toUpperCase());
}
console.log(isUppercase("john","mike","Bob","sam"))

// 15.Update this object without mutating original:
const state = { name:"User", loggedIn:false }
const stateobj={...state,loggedIn:true};
console.log(state);
console.log(stateobj);

// 16.Merge two arrays and remove duplicates using spread + Set.
const color1=['red',"green","blue","black"];
const color2=["pink","yellow",'red','black'];
const mergeColor=[...new Set([...color1,...color2])];
console.log(mergeColor);


const employee = {
  id:101,
  name:"John",
  salary:50000,
  department:"IT"
}

const {id,...rest}=employee;
console.log("id",id);
console.log("restdata",rest)


// 18.Write a function that calculates the average of unlimited numbers using REST.
function calculateAvg(...numdata){
return numdata.reduce((sum,el)=>{
    return sum+=el;
},0)
}
console.log(calculateAvg(1,2,3,4,5));
console.log(calculateAvg(1,2,3,4,5,5));
console.log(calculateAvg());

// 19.Q19. Pass Array to Function Using Spread

function multiplication(a,b,c){
    return a*b*c;
}
const Numsr=[2,3,4];
console.log(multiplication(...Numsr));


// Q20. Nested Object Copy Issue (Conceptual).

const empoyeedetails={
    id:1,
    name:"John",
    address:{
        city:"London",
        country:"England"
    }
}

const shallowemp={...empoyeedetails};
console.log("shallowemp", shallowemp);

shallowemp.address.city="New York"
console.log(shallowemp);
console.log(empoyeedetails);// shallow copies only copies refereces to nested object not actuat contents.

// ==========================================================================

function add(...numbers){
    return numbers.reduce((acc,el)=>{
        return acc+el;
    },0)
}
console.log(add(1,2,3,4,5));


function multiplyAll(...numbers){
    return numbers.reduce((acc,el)=>{
        return acc*el;
    },1)
}
console.log(multiplyAll(1,2,3,4,5))

function subtract(...numbers) { 
  let result = numbers[0]; // start with the first number 
for (let i = 1; i < numbers.length; i++)
 { result -= numbers[i]; 
} 
return result;
 }
 console.log(subtract(10,2,3));
  console.log(subtract(15,2,3))