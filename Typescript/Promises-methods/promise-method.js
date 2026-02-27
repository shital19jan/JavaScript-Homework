const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("get data");
    }, 2000)
})
promise.then((response) => {
    console.log(response);
})

// =====================================================================
// Create a promise that:
// Rejects after 1 second  Returns "Something went wrong"

// Handle the error using .catch().

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong");
    }, 1000)
})
promise2.then((response) => {
    console.log(response);
})
    .catch((e) => {
        console.error("error is:", e)
    })

// =======================================================================

// 3️⃣ Using Promise.resolve()
// Use Promise.resolve() to:
// Immediately return the value 100
// Log it using .then()


const myPromise = Promise.resolve(100);

myPromise.then((value) => {
    console.log(value)
})


// ==========================================================================

// 4️⃣ Using Promise.reject()
// Use Promise.reject() to:
// Immediately reject with "Invalid User"
// Handle it properly.


const myPromise1 = Promise.reject("Invalid User");

myPromise1
    .then((response) => {
        console.log(response)   // this not work because promise is rejected.
    })
    .catch((error) => {
        console.error("error:", error)
    })

// =======================================================================


// Create a promise that:
// Resolves after 1 second
// Use .finally() to print "Execution Finished"

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task Completed");
    }, 1000);                    // resolves after 1 second 
});


promise3.then((response) => {
    console.log(response);
})
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        console.log("Execution Finished")
    })


// ========================================================================================

// 6️⃣ Chaining Promises
// Create a promise that:
// Resolves with number 5
// In the next .then() multiply it by 2
// In the next .then() add 10
// Print final result    Expected Output: 20



const myPromise2 = new Promise((resolve, reject) => {
    resolve(5);
})
//   myPromise2  .then((response) => {
//         // console.log(response);
//         return response * 2;
//     })
//     .then((add) => {
//         // console.log(add);
//         return add + 10;
//     })
//     .then((response) => {
//         console.log(response)  //20
//     })


myPromise2
    .then(result => result * 2)   // Multiply by 2 → 10
    .then(result => result + 10)  // Add 10 → 20
    .then(finalResult => {
        console.log("finalResult:", finalResult);   // Print final result → 20
    });


//   ======================================================================================================


// 7️⃣ Conditional Resolve/Reject
// Create a function checkNumber(num) that:
// Resolves if number is even

// Rejects if number is odd
// Test it with different values.

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve(num + " is even")
        } else {
            reject(num + " is odd")
        }
    })
}
checkNumber(10)
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })

checkNumber(5)
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })

checkNumber(20)
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })

// =========================================================================================

//     8️⃣ Promise.all() Success Case
// Create 3 promises:
// One resolves after 1 second with "A"
// One resolves after 2 seconds with "B"

// One resolves after 3 seconds with "C"

// Use Promise.all() and print the result.
// 👉 Question: What is the total execution time?

const promiseA = new Promise((resolve) => {
    setTimeout(() => {
        resolve("A")
    }, 1000)
})
const promiseB = new Promise((resolve) => {
    setTimeout(() => {
        resolve("B")
    }, 2000)
})
const promiseC = new Promise((resolve) => {
    setTimeout(() => {
        resolve("C")
    }, 3000)
})

Promise.all([promiseA, promiseB, promiseC])
    .then((response) => {
        console.log(response)
    })


// total execution time  is 3 second

// ====================================================================================================

// 9️⃣ Promise.all() Failure Case
// Modify previous question:
// Make one promise reject.

// 👉 What happens?
//  👉 Handle the error properly.

const promise1A = new Promise((resolve) => {
    setTimeout(() => {
        resolve("A")
    }, 1000)
})
const promise1B = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise failed at  B")
    }, 2000)
})
const promise1C = new Promise((resolve) => {
    setTimeout(() => {
        resolve("C")
    }, 3000)
})

Promise.all([promise1A, promise1B, promise1C])
    .then((response) => {
        console.log(response)
    })
    .catch((e) => {
        console.log("promise.reject case:", e)
    })
// if one promise in reject state then promise.all will print error immediately.other fullfiled state not print.

// =======================================================================================

// Create 3 promises:
// 2 resolve
// 1 reject
// Use Promise.allSettled() and print the result.
// 👉 Explain difference between all() and allSettled().

const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.reject("C");

Promise.allSettled([p1, p2, p3])
    .then(result => console.log(result))
    .catch((e) => console.log(e))

// 1.promise.all print all fullfiled state or atleast one promise is in reject then it print error.
// 2. Promise.allSettled it print array of object of keys status and value. all reject and fullfiled state.

// ==================================================================================================================

// Create 3 promises with different timeout values.
// Use Promise.race():
// Print whichever resolves first.
//  What if the fastest promise rejects?



// const promise4 = new Promise(res => setTimeout(() => res("promise4 resolve"), 1000));
const promise4 = new Promise(reject => setTimeout(() => reject("promise4 is rejected"), 1000));

const promise5 = new Promise(res => setTimeout(() => res("promise5 resolve"), 3000));
const promise6 = new Promise(res => setTimeout(() => res("promise6 resolve"), 5000));

Promise.race([promise4, promise5, promise6])
    .then((result) => console.log("promise.race result is:", result))
    .catch((e) => console.log(e))

//If the fastest promise rejects, then Promise.race() immediately rejects with that error.
//The other promises are still running in the background, but their results are ignored because the race already ended.


// =======================================================================================================

// Create 3 promises:
// First rejects ,Second rejects ,Third resolves after 2 seconds

// Use Promise.any().
// 👉 What happens if all promises reject? -> gives Aggregate error


const promiseFirst = Promise.reject(reject => console.log("first promise reject"));
const promiseSecond = Promise.reject(reject => console.log("Second promise reject"))
// const promiseThird=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Third promise succefull")
//     }, 2000);
// })

const promiseThird = Promise.reject(reject => console.log("Third promise reject"))

Promise.any([promiseFirst, promiseSecond, promiseThird])
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })


// =========================================================================================================

// 1️⃣3️⃣ API Simulation with Promise.all
// Create a function fakeAPI(name, delay):
// Resolves with User: ${name} after delay
//  Call it for 3 users using Promise.all()
//  Print combined result.

function fakeAPI(name,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`user:${name}`);
        },delay);
    });
}
Promise.all([fakeAPI("John",1000),fakeAPI("Sam",3000),fakeAPI("Bob",5000)])
.then((result)=>{
    console.log(result)
})
.catch((e)=>{
    console.error(e)
})

// ========================================================================================

// 1️⃣4️⃣ Convert Callback to Promise
// Convert this into Promise-based code:

function getData(callback) {
 setTimeout(() => {
   callback("Data received");
 }, 2000);
}


function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data received");
        },2000)
    })
}
getData()
.then((result)=>{
    console.log(result)
})

// ====================================================================================

// 1️⃣5️⃣ Custom Promise.all Implementation
// Write your own function:
// function myPromiseAll(promises) {
//   // implement
// }
// It should:
// Resolve when all promises resolve
// Reject immediately if any promise rejects

