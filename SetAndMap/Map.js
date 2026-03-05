// Create a Map to store:
// name → Rahul
// age → 25
// city → Pune
// Print all values.


const person = new Map();

person.set("name", "Rahul");
person.set("age", 25);
person.set("city", "Pune");
console.log(person);

for (let value of person.values()){
    console.log(value)
}

// ========================================================================

// Q2 — Get Value from Map
// Create a Map and retrieve the value of "name" using get().

const map=new Map();
map.set("name","shital");
console.log(map.get("name"));

// ===================================================================================

// Q3 — Check Key Exists
// Check if "age" key exists in the Map.

const student=new Map();
student.set("age",25);
console.log(student.has("age"))

// ============================================================================

// Write a program to print the size of a Map.

const employee=new Map();

employee.set("name","John");
employee.set("age",30);
employee.set("salary",40000);

console.log(employee.size);

// ========================================================================================

// Print all key-value pairs using:
// for...of

for(let [key,value] of employee){
    console.log(key,":",value)
}

// ===========================================================================;

// Q6 — Object as Key
// Create a Map where an object is used as a key.

const user={
    id:1,
    name:"Sam"
}
const empMap= new Map();

empMap.set(user,"Developer");

console.log(empMap.get(user));   //Developer

// ==================================================================================

// Q7 — Convert Object to Map
// Convert the following object into Map.
// {
// name:"John",
// age:30
// }

const studDetails={
    name:"John",
    age:30,
}

// const studMap=new Map();
const studMap = new Map(Object.entries(studDetails));

console.log(studMap);

// =====================================================================================

// Q8 — Convert Map to Object
// Convert a Map into a normal JavaScript object.

const studObj = Object.fromEntries(studMap);
console.log(studObj);

// ==========================================================================================

// Q9 — Frequency Counter
// Count frequency of elements in array using Map.

const nums1 = [1, 2, 2, 3, 3, 3];

const freq = new Map();

for (let num of nums1) {
  if (freq.has(num)) {
    freq.set(num, freq.get(num) + 1);
  } else {
    freq.set(num, 1);
  }
}

console.log(freq); 

// ===========================================================================

// Count how many times each word appears in a string using Map.

const str="hello world hello js world";
let words=str.split(" ")
// console.log(words)
const wordCount=new Map();
for(let word of words){
    if(wordCount.has(word)){
        wordCount.set(word,wordCount.get(word)+1);
    }else{
        wordCount.set(word,1);
    }
}
console.log(wordCount);

// ===================================================================