array = [13,46,24,52,20,9];
let n=array.length;
for(let i=0;i<n-1;i++){
    let min=i;
    for(let j=i+1;j<n;j++){
        if(array[j]<array[min]){
            min=j;

        }
   }
   if(min!==i){
                   let temp=array[min];
            array[min]=array[i];
            array[i]=temp;
   }

}
    console.log(array)

     arr = [5,4,3,2,1]
 for(let i=0;i<arr.length-1;i++){
    let min=i;
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
        }
                if(min!==i){
            let temp=arr[min];
            arr[min]=arr[i];
            arr[i]=temp;

    }
 }
     console.log(arr)

