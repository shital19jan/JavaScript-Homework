
// Write a recursive function:
// function fibonacci(n) { // return nth fibonacci number using recursion } 

function fibonacci(n){
    let series=[];
    let a=0;
    let b=1;
    for(let i=0;i<n;i++){
        let fib=a+b;
        a=b;
        b=fib;
        series.push(a);
            // console.log(fib);

    }
    return series;
}
const  fibser=fibonacci(10)
console.log(fibser)

// ========================================================

function fib(n){
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }
    return  fib(n-1)+fib(n-2);
}
// fib(6);
const result=fib(6);
console.log(result);

