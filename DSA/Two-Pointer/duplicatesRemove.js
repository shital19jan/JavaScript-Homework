

function removeDuplicates(arr){

    let slow=0;
    for(let fast=1;fast<arr.length;fast++){
        if(arr[slow]==arr[fast]){
            continue;
        }else{
            slow++;
            arr[slow]=arr[fast];
        }
    }
    arr.length=slow+1;
    // return slow+1   // return only length
   return arr;         //returns unniqe array
}
const arr=[1,1,2,3,3];
console.log(removeDuplicates(arr))
// removeDuplicates(arr)
// console.log(arr)




// =======================================================


const arr1=[1,1,2]

function removeDuplicates1(arr1){
    let slow=0;

    for(fast=1;fast<arr1.length;fast++){
        if(arr1[slow]==arr1[fast]){
            continue;
        }else{
            slow++;
            arr1[slow]=arr1[fast];
        }
    }
    return arr1.length=slow+1;
}
removeDuplicates1(arr1)
console.log(arr1)