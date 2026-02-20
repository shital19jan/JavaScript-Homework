let arr=[100, 25, 130, 45, 50];
let target=45;

let index=-1;

for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
    index=i;
    // break;
}}

if(index!==-1){
    console.log("element",+ target +  " found at index",+index);
}else{
    console.log("element not found");

}

// ===============================================================================
