

function isSum(n){
    if(n==0){
        return 0;
    }
    // console.log(n);
    return n+isSum(n-1);
    // console.log("n",n)
}
console.log(isSum(4)); // Output: 10


