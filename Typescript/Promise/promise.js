const promise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Success");

        }
        reject("Failed")

    }, 2000)
})
    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        console.error("error is:" + e)
    })

// ================================================================================

// Write a function delayMessage(message, time) that: Returns a Promise.
// Resolves with the message after time milliseconds.


function delayMessage(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time)
    })
}
delayMessage("hello", 1000)
    .then((response) => {
        console.log(response)
    })

// ==============================================================================

// 3️⃣ Promise State Understanding
// What will be the output?



const p = new Promise((resolve, reject) => {
    resolve("A");
    reject("B");
});

p.then(res => console.log(res))
    .catch(err => console.log(err));
// output is: A

// explanation: 
// 1.Promise has 3 state Pending,fulfil or reject.
// 2.if resolve state fullfil then it returns resolve  here resolve state get fullfil.
//3.if get error then it reject



// ==========================================================

// Convert this callback function into Promise-based:


// function fetchData(callback) {
//  setTimeout(() => {
//    callback("Data received");
//  }, 1000);
// }


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000)
    })
}
fetchData()
    .then((response) => {
        console.log(response)
    })

// ============================================================================

// Promise Chaining Basics

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 1 done")
        }, 1000)
    })
}
function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 2 done")
        }, 1000)
    })
}
function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 3 done")
        }, 1000)
    })
}

Promise.all([step1(), step2(), step3()])
    .then((response) => {
        console.log(response)
    })

// ===========================================================================
// Create a promise that resolves with number 5.Chain it to:
// Multiply by 2
// Add 10
// Print final result Expected output: 20

const promise2 = new Promise((resolve, reject) => {
    resolve(5)

})

    // .then((response)=>response*2)
    // .then((response)=>response+10   )
    // .then((response)=>{
    //     console.log(response)  //20
    // })

    .then((response) => {
        // console.log(response);
        return response * 2;
    })
    .then((add) => {
        // console.log(add);
        return add + 10;
    })
    .then((response) => {
        console.log(response)  //20
    })


// ============================================================================

// Explain flow step by step.

Promise.resolve(10)
    .then(num => {
        console.log(num);    //step1 print 10;
        return num * 2;   // 10*2 return 20;
    })
    .then(num => {
        throw new Error("Something went wrong");  //error
    })
    .then(num => {
        console.log(num);  //because of error this step skipped 
    })
    .catch(err => {
        console.log(err.message);   //print error message
    });

// ========================================================


// Create a function checkNumber(num):
// If number > 10 → resolve "Valid"
// Else → reject "Invalid"
// Chain it with another .then() that logs "Processed" only if valid.

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("valid")
        } else {
            reject("Invalid")
        }
    })
}
checkNumber(20)
    .then((response) => {
        console.log(response);
        console.log("Processed")

    })
    .catch((e) => {
        console.error(e)
    })

// ==================================================================================

function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userId:101,name:"john"})
        },1000)
    })
}

function getOrders(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({orderid:2512,userId:userId,item:"mobile"});
        },1000)
    })
}
function getPayment(orderId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({orderId:orderId,status:"paid",amount:20000});
        },1000)

    })
}
getUser()
.then((response)=>{
    console.log("get user",response);
return getOrders(response.userId);
})
.then((order)=>{
    console.log("order Placed",order);
    return getPayment(order.orderid)
})
.then((payment)=>{
    console.log("payment successful",payment);

})
.catch((e)=>{
    console.error(e)
})



