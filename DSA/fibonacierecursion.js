
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


// function fibonacci1(n){
//         if(n<=0){
//             return("input Positive")
//         }else if(n===1){
//             return 0;
//         }else if(n===2){
// return 1;
//         }else{
//             return fibonacci1(n-1)+fibonacci1(n-2);
//         }
// }
// for(let i=0;i<10;i++){
//     console.log(fibonacci1(i));
// }