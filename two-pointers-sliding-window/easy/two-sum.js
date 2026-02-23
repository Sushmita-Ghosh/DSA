/**https://leetcode.com/problems/two-sum/description/ */

//2pointer
var twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
}  


// Using hashmap
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let n = arr.length
    let map = {}

    for(let i =0; i<n ; i++){
        map[arr[i]] = i // storing the indexes in arr
    }

    for(let i =0; i<n ; i++){
        let pairToFind = target - arr[i]
        /** if it matches the index */
        if(map[pairToFind] && map[pairToFind]!== i){
            return [i, map[pairToFind]]
        }
    }
};