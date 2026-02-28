

const nums = [-4, -1, 0, 3, 10];
// const  nums = [-7,-3,2,3,11]

function sortSquarearr(nums) {
    const newArr = [];

    let left = 0;

    let right = nums.length - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            newArr.unshift(leftSquare)
            left++;

        } else {
            newArr.unshift(rightSquare)
            right--;
        }
    }
    return newArr
}
const square = sortSquarearr(nums);
console.log(square)