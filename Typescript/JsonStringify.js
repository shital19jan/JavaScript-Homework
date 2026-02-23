const persondata =
    { name: "Rahul", age: 25, city: "Pune" }


const personJson = JSON.stringify(persondata);
console.log(personJson);

// ================================================================


let data = '{"product":"Laptop","price":55000}';
console.log(data);
const convertedData = JSON.parse(data);
console.log(convertedData);
console.log(convertedData.product);
// =========================================================================

let user = {
    name: "Amit",
    address: {
        city: "Mumbai"
    }
};

console.log(user?.address?.city);
console.log(user?.contact?.phone); //undefined

// =================================================================================

let student = {
    name: "Neha"
};

console.log(student.address?.city ?? "city not available");

// =====================================================================================

let original = {
    name: "Raj",
    skills: ["JS", "React"]
};


const shallowcopy = { ...original };

shallowcopy.skills.push("node");
console.log(shallowcopy);
console.log(original);

// ===================================================================================

// 6.deep copy

const deepcopyobj = JSON.parse(JSON.stringify(original));

deepcopyobj.skills.push("Angular");

console.log("original", original);
console.log("deepcopyobj", deepcopyobj);


// ===============================================================

let users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];

const userJson = JSON.stringify(users);
console.log(userJson)

const userObj = JSON.parse(userJson);
console.log(userObj);
console.log(userObj[1].name)

// =================================================================

let response = '{"status":true,"data":{"user":{"name":"Kiran","email":"kiran@gmail.com"}}}';

let responseobj = JSON.parse(response);
console.log(responseobj);
console.log(responseobj.data?.user?.email);
console.log(responseobj.data?.user?.email ?? "email not found");


// ===============================================================================

let a = {
    id: 1,
    details: {
        city: "Delhi"
    }
};

let b = { ...a };
b.details.city = "Chennai";

console.log(a.details.city);
/*  spread operator do only shallow copy. 
only level one property are copied but object details are not copied actual value 
it cpoies only reference.

-- a.details and b.details points same memory so whwn we change b.details it also modify b.details
*/
// =====================================================================



let obj = {
  name: "Test",
  nested: { value: 10 }
};


// const copiedObj=structuredClone(obj)
const copiedObj=JSON.parse(JSON.stringify(obj));
copiedObj.nested.value= 20;
console.log("obj",obj);  //10 
console.log("copiedObj",copiedObj)  //20
