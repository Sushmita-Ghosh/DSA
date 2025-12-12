// <!-- https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150 -->

// <!-- Brute Force Approach -->

/**
 *  1. merge the two arrays
 *  2. sort the array
 */

var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums1.push(...nums2);
  nums1.sort();
};

var mergeBruteForce = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

console.log(mergeBruteForce([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeBruteForce([1], 1, [], 0));
console.log(mergeBruteForce([0], 0, [1], 1));

// Time Complexity: O((m+n)log(m+n))
// Space Complexity: O(1)

// Optimized Approach
// Two Pointer Approach
/**
 *  1. Two pointers first and second -> first to m-1 and second to n-1
 *  2  i = nums1.length-1 // m+n-1
 *  3. we will compare the values of nums1[first] and nums2[second] and put the greater value in nums1[i]

 */
// https://www.youtube.com/watch?v=73lyz0EZye8

var mergeOptimized = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // while the second array still has values and first has not yet reached the end.
  while (i >= 0 && j >= 0) {
    if (num1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  // whoever finishes first copy the rest of the values
  while (i >= 0) {
    nums1[k] = nums1[i];
    k--;
    i--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};

// Time Complexity: 0(m + n)
// Space Complexity: O(1)




/**
 * Merge 
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


/** With extra space */
var merge = function(nums1, m, nums2, n) {
   let copynum1 = nums1.slice(0,m)
   console.log(copynum1)
   let k =0; let j=0;

   for(i=0;i<n+m;i++){
        if(k==m || j==n){
            break;
        } else {
            if(copynum1[k]<nums2[j]){
                nums1[i]=copynum1[k]
                k++
            } else {
                nums1[i]=nums2[j]
                j++
            }
        }

    

   }


   if(j!==n){
    for(let i=m+j; i<n+m; i++){
        nums1[i]=nums2[j]
        j++
    }
   } else if(k!==m){
    for(let i=k+n;i<n+m;i++){
        nums1[i]=copynum1[k]
        k++
    }
   }

};


/** With extra space but a little better */

var merge = function(nums1, m, nums2, n) {
   let nums1copy= nums1.slice(0,m)

   let p1=0;
   let p2=0;

   for (let i =0; i<n+m; i++){
    /**
     * here p2>=n if one of them is empty say nums1 = [1] and nums2=[]
     * In this case we have p2=0 and n =0 but we have to copy nums1 right?
     * so it needs to go to first loop 
     */
    if(p2>=n || (nums1copy[p1]<nums2[p2] && p1<m)){
        nums1[i]=nums1copy[p1]
        p1++
    } else {
        nums1[i]=nums2[p2]
        p2++
    }
   }

};

/** Without extra space */

/**
 * Essentially if we start from front we will lose nums1 values, hence
 * we are having to copy
 * But if we say fill it in reverse order where the extra 0's are there
 * we will not loose the values.
 * SO we don't need to copy the array
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let p1 = m-1 // starting from lengths
   let p2 = n-1

   for (let i = m+n-1; i>=0; i--){
    /**If p2 is out of bounds, we don't need to do anything */
    if(p2<0){
        break
    }

    /** only exexute the first condition , till p1>=0 as soon as it becomes out of bounds
     * we need to copy rest from p2
     */
    if(p1>=0 && nums1[p1]>nums2[p2]){
        nums1[i]=nums1[p1]
        p1--
    }else {
        nums1[i]=nums2[p2]
        p2-- 
    }
   }

};