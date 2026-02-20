function power(a,b){
    if(b===0){
        return 1;
    }
    const result=a*power(a,b-1);
    return result;
}
console.log(power(2,5));  //32
console.log(power(2,0));  //1




function powerRecursion(base,result,exponent=0 ){
    if(result===1){
        return exponent;
    }
    return powerRecursion(base,result/base, exponent+1);

}
let answer=powerRecursion(2,32);
console.log(answer)
