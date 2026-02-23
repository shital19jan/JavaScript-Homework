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
    if(result%base!==0){
        return "wrong result"
    }
    return powerRecursion(base,result/base, exponent+1);

}
let answer=powerRecursion(2,32);
console.log(answer)
let answer1=powerRecursion(3,81);
console.log(answer1)
let answer3=powerRecursion(2,20);
console.log(answer3)
