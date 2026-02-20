var array = [
    [12, 21, 45, 35, 45],
    [24, 65, 35, 45, 15],
    [78, 95, 62, 31, 45, 65]
];
var flatarr1 = [];
for (var i = 0; i < array.length; i++) {
    // flatarr1.push(array[i]);
    // console.log(array[i]);
    var subflat = array[i];
    for (var j = 0; j < subflat.length; j++) {
        flatarr1.push(subflat[j]);
    }
}
console.log("flatarr1: ", flatarr1);
//function expression
var arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var flat1 = [];
var result2 = function (arr) {
    // let flatarr1=[];
    for (var i = 0; i < arr2.length; i++) {
        // flatarr1.push(array[i]);
        // console.log(array[i]);
        var subflat = arr2[i];
        for (var j = 0; j < subflat.length; j++) {
            flat1.push(subflat[j]);
        }
    }
    console.log(flat1);
};
result2(arr2);
//arrow funtion
var arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var flat3 = [];
var result3 = function (arr) {
    // let flatarr1=[];
    for (var i = 0; i < arr3.length; i++) {
        // flatarr1.push(array[i]);
        // console.log(array[i]);
        var subflat = arr3[i];
        for (var j = 0; j < subflat.length; j++) {
            flat3.push(subflat[j]);
        }
    }
    console.log("flat array using arrow function: ", flat3);
};
result3(arr3);
