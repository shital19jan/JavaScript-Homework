function outer() {
    let message = "Hello";
    function inner() {
        return message;
    }
    return inner();
}
const printMsg = outer();
console.log(printMsg);

// 2.Create a function createGreeter(name) that returns another function.
//  When called, it should greet the saved name.
function createGreeter(name) {
    function greetfun() {
        console.log("hello", name);
        // return ("hello",name)
    }
    // return greetfun;
    return greetfun();


}
// const grretAnil=createGreeter("Anil")();
// console.log(grretAnil);
createGreeter("anil")


// 3.Create a function createCounter() that returns a function which increments and prints a counter each time it's called.
function createCounter() {
    let counter = 0;
    function innerCount() {
        counter++;
        // return counter;
        console.log(counter)
    }
    return innerCount;
}
const countresult = createCounter();
countresult();
countresult();
countresult();


// 4.Create two counters using your function.

function outerCount() {
    let count = 0;
    function childCount() {
        let innerCounter = 0;
        count++;
        console.log("counter of outerCount", count);
        innerCounter++;
        console.log(innerCounter)
    }
    return childCount;
}
const innerfun = outerCount();
innerfun();
innerfun();
innerfun();
innerfun();
// =========================================================================================


function createBankAccount(initialBalance) {
    let balance=initialBalance;
    console.log("initial balance is:",initialBalance)
    function deposit(amount) {
        balance+=amount;
        console.log("deposit amount",amount,"total balance is:", balance)
        function withdraw(amount) {
          balance -=amount;
            console.log("withdraw amount", amount ,"and balance is:",balance)
            function getBalance() {
return balance;

            }
            return getBalance;

        }
        return withdraw;

    }
    return deposit;

}
const rest = createBankAccount(5000)(1000)(2000)();
console.log(rest);
// rest()

// 6.Create a function multiplier(factor) that returns another function to multiply numbers by that factor.
function multiplier(factor) {
    // let factor;
    function double(num) {
        return num * factor;

    }
    return double;
}
const double = multiplier(2);
console.log(double(5));
const triple = multiplier(3);
console.log(triple(5));






function add(a, b) {
    if (b) {
        return a + b;
    }
    function addc(c) {
        return (a + c);
    }
    return addc(20)
}
const resultadd = add(10);
console.log(resultadd)
