var numbers = [15, 24, 35, 15, 48, 68, 958, 6254, 362, 7895, 451];
var highest1 = -Infinity;
var secondhighest = -Infinity;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest1) {
        secondhighest = highest1;
        highest1 = numbers[i];
    }
    else if (secondhighest < numbers[i] && secondhighest != highest1) {
        secondhighest = numbers[i];
    }
}
console.log("second highest: ", secondhighest);
//function expressions
var numbers1 = [15, 24, 35, 15, 48, 68, 958, 451];
var highest2 = -Infinity;
var secondhighest1 = -Infinity;
var res = function (arr) {
    for (var i = 0; i < numbers1.length; i++) {
        if (numbers1[i] > highest2) {
            secondhighest1 = highest2;
            highest2 = numbers1[i];
        }
        else if (secondhighest1 < numbers[i] && secondhighest1 != highest2) {
            secondhighest1 = numbers1[i];
        }
    }
    console.log("second highest using annonymous: ", secondhighest1);
};
res(numbers1);
//arrow function
var numbers2 = [15, 24, 35, 15, 48, 68, 958, 451, 758];
var highest3 = -Infinity;
var secondhighest2 = -Infinity;
var result4 = function (arr) {
    for (var i = 0; i < numbers2.length; i++) {
        if (numbers2[i] > highest3) {
            secondhighest2 = highest3;
            highest3 = numbers2[i];
        }
        else if (secondhighest2 < numbers2[i] && secondhighest2 != highest3) {
            secondhighest2 = numbers2[i];
        }
    }
    console.log("second highest using arrow functions: ", secondhighest2);
};
result4(numbers2);
