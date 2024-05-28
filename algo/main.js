function twoSum(nums, target) {
    numMap = {};
    for (i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    throw new Error(" Pas de solutions trouvées :/ ");
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));