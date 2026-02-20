function powerRecursion(base,result,exponent=0 ){
    if(result===1){
        return exponent;
    }
    return powerRecursion(base,result/base, exponent+1);

}
let answer=powerRecursion(2,32);
console.log(answer)
