let x = 10;

try {
  console.log(y);
}
catch (e) {
  console.log("variable not found", e.message);
}

// ===============================================================

let data = '{"name": "Alex"}';

try {
  let parseData = JSON.parse(data);
  console.log("data parsed successfully");

}
catch (e) {
  console.log(e.message, "Invalid JSON");
}

// =============================================================================


function isDivide(a, b) {
  // return a/b;


  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero")

    }
    let result = a / b;
    console.log(result)
  }

  catch (error) {
    console.log(error.message);
  }
}
isDivide(10, 2); // 5
isDivide(10, 0);
// =======================================================================

console.log("start");

try {
  throw new Error("error");
}
catch (e) {
  console.log("Handled error");
}
finally {
  console.log("End");
}
// ==============================================================================

function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("Age must be ≥ 18");

    } else if (age > 18) {
      console.log("valid for voting")
    }
  }
  catch (e) {
    console.log("invalid for Voting", e.message)
  }
}

checkAge(20);
checkAge(15);

// ===============================================================


class LoginError extends Error {
  constructor(message) {
    super(message);
    this.name = "LoginError"; // set a custom error name
  }
}

// Example usage
let username = "";

try {
  if (!username) {
    throw new LoginError("Username cannot be empty!");
  }
  console.log("Login successful!");
} catch (error) {
  if (error instanceof LoginError) {
    console.error("Login failed:", error.message);
  }
}

// ====================================================================

function nestedCatch(data) {
  try {

    try {
      let output = JSON.parse(data);
      console.log("parse successfully", output)
    }
    catch (e) {
      console.error("Invalid Json", e.message);
    }
    if (data = "John") {
      throw new error("other error occured");
    }

  }
  catch (error) {
    console.log("other error", error.message)
  }
}
nestedCatch('{"name":"Sam"}');
nestedCatch('{"name":}');

nestedCatch('{data="john"}');

// ================================================================================


// function fetchData(success){
//   try{
//     if(!success){
//       throw new error("API failed")
//     }
//   }
//   catch(e){
//     console.log("handle error",e.message)
//   }
// }
// fetchData("true")


function fetchData(success) {
  if (!success) {
    throw new Error("API Failed");
  }
  return { data: "Here is your data!" };
}

// Usage with error handling
try {
  const result = fetchData(false); // change to true for success
  console.log("Result:", result);
} catch (error) {
  console.error("Error caught:", error.message);
}

// ==============================================================================

function withdraw(balance, amount) {
  try {
    // Validate input types
    if (typeof balance !== "number" || typeof amount !== "number") {
      throw new Error("Invalid input: balance and amount must be numbers");
    }

    // Check for negative amount
    if (amount < 0) {
      throw new Error("Negative amount");
    }

    // Check for insufficient balance
    if (amount > balance) {
      throw new Error("Insufficient balance");
    }


    return balance - amount;

  } catch (e) {
    console.log("Error:", e.message);
    return null; // Explicitly return null when an error occurs
  }
}

console.log(withdraw(2000,200));  
console.log(withdraw(1000, -100));  
console.log(withdraw(300, 400));    
console.log(withdraw("abc", 200)); 



