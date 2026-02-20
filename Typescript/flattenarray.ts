let array= [
[12,21,45,35,45],
[24,65,35,45,15],
[78,95,62,31,45,65]


]

let flatarr1=[];

for(let i=0;i<array.length;i++){
    let subflat=array[i];
    for(let j=0;j<subflat.length;j++){
        flatarr1.push(subflat[j])
    }
}
console.log("flatarr1: ",flatarr1)

//function expression
let arr2=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let flat1:number[]=[];

let result2=function(arr2:any){

for(let i=0;i<arr2.length;i++){
    let subflat=arr2[i];
    for(let j=0;j<subflat.length;j++){
        flat1.push(subflat[j])
    }
}
console.log(flat1)


}
result2(arr2);

//arrow funtion

let arr3=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let flat3:number[]=[];

let result3=(arr3:any)=>{
    // let flatarr1=[];

for(let i=0;i<arr3.length;i++){
    let subflat=arr3[i];
    for(let j=0;j<subflat.length;j++){
        flat3.push(subflat[j])
    }
}
console.log("flat array using arrow function: ",flat3)


}
result3(arr3);


