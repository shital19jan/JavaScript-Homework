

function isSum(n){
    if(n==0){
        return 0;
    }
    // console.log(n);
    return n+isSum(n-1);
    // console.log("n",n)
}
console.log(isSum(4)); // Output: 10


// function add(a,b){
// //   return  a+b;
//     console.log(a+b);
// }
// add(10,20);
// const resadd=add(10,20);
// console.log(resadd)

// function a(a){
//     function b(b){
//         return a+b;
//     }
//     return b();
// }
// const res=(10)(20);
// console.log(res)
