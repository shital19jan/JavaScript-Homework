const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const result = [];



// for (let i=0;i<array1.length;i++){
//             result.push(array1[i])
//         }

//         for(let j=0;j<array2.length;j++){
//             result.push(array2[j])
//         }
//         result.sort((a,b)=>a-b)
// console.log(result);

let i = 0;
let j = 0;

while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
        result.push(array1[i]);
        i++;
    } else {
        result.push(array2[j]);
        j++;
    }
}

while (i < array1.length) {
    result.push(array1[i]);
    i++;
}

while (j < array2.length) {
    result.push(array2[j]);
    j++;
}

console.log(result);     