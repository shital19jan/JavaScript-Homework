arr= [0, 0, 1, 1, 0];
// arr= [1, 1, 1, 1]

function segregateArray(arr){
    let left=0;
    let right=arr.length-1;
    while(left < right){
        if(arr[left]==0){
            left++;
        }else if(arr[right]==1){
            right--;
        }
        else{
            [arr[left],arr[right]]=[arr[right],arr[left]];  //swap or destructuring
        }
    }
    return arr;
}
// console.log(segregateArray(arr))
segregateArray(arr)
console.log(arr);

