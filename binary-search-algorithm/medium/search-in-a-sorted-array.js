/**https://leetcode.com/problems/search-in-rotated-sorted-array/description/ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let l = 0;
    let r = arr.length-1

    while(l<=r){
        let m = l+ Math.floor((r-l)/2)
        if(target === arr[m]){
            return m /**return the index */
        }

        /** left sorted array or Right sorted array logic */

        if(arr[l] <= arr[m]){ /** say for example [2,3] , this is left sorted as the m =2& l=2 , here if we don't give = , we will skip this */
            // left sorted
            if(target<arr[m] && target >=arr[l]){
                r=m-1
            } else {
                l =m+1
            }
        } else {
            //right sorted
            if(target>arr[m] && target <=arr[r]){
                l=m+1
            } else {
                r=m-1
            }
        }
    }

    return -1 // if not found
};