function sayHello() {
    return Promise.resolve("Hello World");
}


async function greet() {
    const greetdata = await sayHello();
    console.log(greetdata)
}
greet()

// ==================================================================================
// Create a promise that resolves after 2 seconds with "Data Loaded".
// Use await to print the result.

function loadData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded")
        }, 2000)
    })
}

async function consumLoad() {
    const data = await loadData();
    console.log(data)
}
consumLoad()

// ===========================================================================

// Create a function delay(ms) that:
// Returns a promise
// Use await delay(1000) to print "Waited 1 second".
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Waited 1 second")
        }, ms);
    })
}

async function consumedelay() {
    const result = await delay(1000);
    console.log(result)
}
consumedelay()

// ====================================================================================
// Write an async function that:
// Takes a number
// Returns its square
// Print result using .then().


async function square(num) {
    let result = num * num;
    return result;
}

square(5)
    .then((response) => {
        console.log(response)
    })
    .catch((e) => {
        console.log(e)
    })

// ==========================================================================================================
// Run this code and explain output order:
async function test() {
    console.log("A");
    Promise.resolve().then(() => console.log("B"));
    console.log("C");
}
test();
// output : A,C B because  synchronous code always run first.


// ==================================================================================================================
// Create a fake API function:
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User Data"), 2000);
    });
}

// Call it using async/await.

async function userData() {
    const result = await fetchUser();
    console.log(result)
}

userData()

// =================================================================================================

// 7️⃣ Sequential Execution

function getA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("get data A")
        }, 1000);
    })
}

function getB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("get data B")
        }, 2000);
    })
}

function getc() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("get data c")
        }, 1000);
    })
}

async function SequentialData() {
    const resA = await getA();
    console.log(resA);

    const resB = await getB();
    console.log(resB);

    const resC = await getc();
    console.log(resC);
}

SequentialData()   //A,B,C total time = 4 sec

// =============================================

// Run the same functions in parallel using:
// const results = await Promise.all([...]);

async function parallel() {
    const result = await Promise.all([getA(), getB(), getc()]);
    console.log(result)
}
parallel()  //[]

// ==========================================================================================
// 9️⃣ Error Handling with try/catch

function random() {
    let success = true;
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("promise resolved successfully.")
        } else {
            reject("promise rejected")
        }
    })
}
async function runRandom() {
    try {
        const result = await random();
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}
runRandom()

// ================================================================================================================

function getCart() {
    return new Promise((resolve, reject) => {
        resolve([
            { item: "Mobile", qty: 2, price: 20000 },
            { item: "Laptop", qty: 1, price: 40000 }
        ])
    })
}

function calcalculateTotal(cartitem) {
    return new Promise((resolve) => {
        const total = cartitem.reduce((acc, item) => {
            acc = acc + item.price * item.qty;
            return acc;
        }, 0)
        resolve(total)
    })
}

function makePayment() {
    return new Promise((resolve) => {
        resolve("confirm payment")
    })
}

async function shoppingCart() {

    try {
        const cart = await getCart();
        console.log("cartitem", cart)

        const price = await calcalculateTotal(cart);
        console.log("totalPrice", price)

        const payment = await makePayment(price);
        console.log(payment)

    } catch (error) {
        console.log(error)
    }

}
shoppingCart()

// ================================================================================================

// 1️⃣1️⃣ Convert Promise Chain to async/await
// Convert this code:
// getUser()
//     .then(user => getOrders(user))
//     .then(orders => getTotal(orders))
//     .then(total => console.log(total))
//     .catch(err => console.log(err));



function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userId: 101, name: "john" })
        }, 1000)
    })
}

function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ orderId: 'ord1245', userId: userId, item: "mobile" });
        }, 1000)
    })
}
function getPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ orderid: "ord1245", status: "paid", amount: 20000 });
        }, 1000)

    })
}

async function onlineShopping() {

    try {
        const user = await getUser();
        console.log(user);

        const orderDetails = await getOrders(user.userId);
        console.log(orderDetails)

        const payment = await getPayment(orderDetails.orderId);
        console.log(payment)

    } catch (error) {
        console.log(error)
    }

}
onlineShopping();


// ==========================================================================
// 1️⃣2️⃣ Handle Multiple API Calls with Failure
// You have 3 APIs:
// One fails
// Two succeed
// Fetch all using async/await but:
// Do NOT stop execution if one fails

// Show successful results.


const url1 = "https://jsonplaceholder.typicode.com/posts/1";
const url2 = "https://jsonplaceholder.typicode.com/users/2";
const url3 = "https://jsonplaceholder.typicode.com/fail";   //fails 

async function fetchData() {
    try {
        const response = await Promise.allSettled([(fetch(url1)), (fetch(url2)), fetch(url3)]);
        // console.log(response);
        const successes = await Promise.all(response.filter(r => r.status === "fulfilled")
            .map(r => r.value.json()));
        const failures = response.filter(r => r.status === "rejected")
            .map(r => r.reason);

        console.log("Successes:", successes);
        console.log("Failures:", failures);

    } catch (error) {
        console.log(error)
    }

}
fetchData()


// ====================================================================================================


// Create utility:
// async function withTimeout(promise, ms)
// If promise doesn’t finish in given time → throw "Timeout" error.

async function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), ms)
    );

    return Promise.race([promise, timeout]);
}

function fakeApi() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Success!"), 2000)
    );
}

async function checkTimeOut() {
    try {
        // const result = await withTimeout(fakeApi(), 1000);      // 1 second timeout
        const result = await withTimeout(fakeApi(), 3000);    // //resolve "Success!"

        console.log(result);
    } catch (error) {
        console.error(error.message); // "Timeout"
    }
}

checkTimeOut();


// ================================================================================================================================
// Fix the issue:
const arr = [1, 2, 3];

arr.forEach(async (num) => {
    await delay(1000);
    console.log(num);
});


/*👉 Why does this NOT behave sequentially?
because forEach doesn't await async callbacks.
it immediately fires 3 iterations.

*/