// export{}

// 1️⃣ Find Product of All Numbers

const input = [2, 3, 4];

const productNum = input.reduce((acc, element) => {
  return acc * element;
})

console.log(productNum);

// 2.Find total number of characters in the array.
const arrayword = ["hi", "welcome", "js"];
const charOfWord = arrayword.reduce((acc, currentWord) => {
  // console.log(currentWord);
  return acc + currentWord.length;
}, 0)
console.log(charOfWord);



// 3️⃣ Convert Array into Comma Separated String (Without join)
const InputString = ["React", "Node", "Mongo"];
const commaSeprateString = InputString.reduce((acc, currentString) =>
  acc + "," + currentString
)
console.log(commaSeprateString);   //Output: "React,Node,Mongo"    💡 Hint: accumulator should be a string.





//Return count of even and odd numbers.
const evenAndodd = [1, 2, 3, 4, 5, 6];
function evenAndoddCount() {
  const countNumber = evenAndodd.reduce((acc, currentNumber) => {
    if (currentNumber % 2 == 0) {
      acc.even += 1
    } else {
      acc.odd += 1;
    }
    return acc;
  }, { even: 0, odd: 0 })
  console.log("even and odd count:", countNumber)

}
evenAndoddCount();                //      {even: 3,odd: 3}




// 5️⃣ Create Map of Word Lengths
// Group words based on their length.

const groupwords = ["hi", "hello", "js", "reduce"];

function wordsLength() {
  const mapWordLength = groupwords.reduce((acc, currentString) => {
    const len = currentString.length;
    if (acc[len] = acc[len] || []) {
      acc[len].push(currentString)

    }



    // const len = currentString.length;
    //  acc[len] = acc[len] || []; // initialize if not present
    //   acc[len].push(currentString); // add word to correct group


    return acc;
  }, {})
  console.log("mapWordLength", mapWordLength);
}
wordsLength();
// ========================================================

// 6️⃣ Find Total Price of Cart
// Calculate total cart value.
const cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 200, qty: 3 }
];

function totalCartValue() {
  const cartValue = cart.reduce((acc, cartelement) => {
    // const total=acc[cartelement.price]*acc[cartelement.qty];
    const total = acc + cartelement.price * cartelement.qty;
    return total;

  }, 0)
  console.log("cartValue", cartValue);
}
totalCartValue();

// ============================================================================



// 7️⃣ Flatten Array Without Using flat()
const inputarray = [
  [1, 2], [3, 4], [5, 6]
];

// const flattenarray=[];
function Flatarray() {
  const flatArray = inputarray.reduce((acc, arrayElement) => {
    console.log(arrayElement);
    // acc+arrayElement;
    //  return flattenarray.push(acc.concat(arrayElement));

    return acc.concat(arrayElement);
  }, [])
  console.log(flatArray)
}
Flatarray();



// 8️⃣ Find Second Largest Number
// Do NOT sort.


const arr = [10, 5, 8, 20, 15];

const high = arr.reduce((acc, item) => {
  if (acc[item] < item) {
    return acc[item];
  } else {
    return [item];
  }
  // return acc;
}, 0)
console.log(high)


const { first, second } = arr.reduce((acc, num) => {
  if (num > acc.first) {
    acc.second = acc.first;
    acc.first = num;
  } else if (num > acc.second && num < acc.first) {
    acc.second = num;
  }
  return acc;
}, { first: -Infinity, second: -Infinity });

console.log(second); // 15

// ===================================================================================

const employees = [
  { name: "A", dept: "IT" },
  { name: "B", dept: "HR" },
  { name: "C", dept: "IT" },
  { name: "D", dept: "Finance" },
  { name: "E", dept: "HR" }
];


const empCount = employees.reduce((acc, emp) => {
  if (acc[emp.dept]) {
    // console.log(acc);

    acc[emp.dept].count += 1;
    acc[emp.dept].employees.push(emp.name)

  } else {
    acc[emp.dept] = { count: 1, employees: [emp.name] }
    // console.log(acc)
  }
  return acc;
}, {})

console.log(empCount)
