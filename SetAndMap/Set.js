// Write a program to remove duplicate values from the array using Set.
// [1,2,3,3,4,4,5]

const nums=[1,2,3,3,4,4,5];

const unique=new Set(nums);
console.log(unique);

// ====================================================================================
// Write a function that returns unique characters from a string using Set.
// Input
// "javascript"
// Output
// j a v s c r i p t

const str="javascript"
// var unique=""
function uniqueChar(str){
 let unique=new Set(str)
return unique;
}

// uniqueChar(str);
console.log(uniqueChar(str));

// ===================================================================================================

// Write a program to count how many unique numbers exist in an array.
const arr=[10,20,20,30,30,30];

let unquearr=new Set(arr);
console.log("unquearr",unquearr)
console.log(unquearr.size);  //3


// ===================================================
// Create a Set with numbers and check whether 50 exists or not.

const data=[10,20,30,40,50,60];
const dataExists=new Set(data);
console.log(dataExists.has(50));   //true.

// ==================================================================

// Convert the following array into a Set.
const arr1 = [5,10,15,20];
const set=new Set(arr1);
console.log(set);

// ========================================================================

// Create a Set and print all values using:
// for...of

const set1 = new Set([1,2,3]);
for(const value of set1){
   console.log(value);
}

// ============================================================================

// Write a program to print the size of a Set.
const set2 = new Set([10,20,30]);
console.log("size set:",set2.size);

// =====================================================================================

// Find the common values between two arrays using Set.
// Example
const arr2 = [1,2,3,4]
const arr3 = [3,4,5,6]


const set3=new Set(arr3);
console.log(set3)

const commonNum=arr2.filter((value)=>set3.has(value));
console.log(commonNum);     // [3,4]

// =========================================================================================

// Find the union of two arrays using Set.
// [1,2,3] and [3,4,5]

const A=[1,2,3];
const B=[3,4,5];


const union=new Set([...A,...B]);
console.log(union)           // [1,2,3,4,5]

// =================================================================================================

// Find elements present in arr1 but not in arr2.
const num1 = [1,2,3,4]
const num2 = [3,4]


const set4=new Set(num2)
// console.log(set4);   

const result=num1.filter((value)=>!set4.has(value));
console.log(result)   // [1,2]

// ======================================================================================



