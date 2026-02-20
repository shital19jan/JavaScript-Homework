var bubblearr=[5,1,4,2,8];

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let swapped=false;
        
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swapped=true;
            }
        }
        if(!swapped)
        break;
    }
    console.log(bubblearr);
}
bubbleSort(bubblearr);




let barr=[15,7,85,32,21,6,9,4];

let n=barr.length;
let swap=false;
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(barr[j]>barr[j+1]){
            let temp=barr[j];
            barr[j]=barr[j+1];
            barr[j+1]=temp;
            swap=true;
        }
    }
    if(!swap)
        break;
}
console.log(barr);