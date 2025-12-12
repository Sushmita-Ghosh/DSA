/**
 * 
 * https://leetcode.com/problems/reverse-string/description/
 * Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 */


/** Easiest that came to my mind */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/** Two pointer */
var reverseString = function(s) {
     let j =s.length -1;
     let n = s.length;
    for(let i =0; i<n; i++ ){
        let temp;
        if(i<j){
            temp = s[i]
            s[i]=s[j]
            s[j]=temp
            j=j-1
        }
    }
};


/** Optimization: So essentially we need to swap first half of the array with second half so we need not go till full array, only need to go till n/2 */

/** The last index can be gotten by only i = (n-1-i) [n-1 due to length-1] */


var reverseString = function(s) {
    let len = s.length
    let halfLen = s.length/2
    for(let i = 0 ; i< halfLen; i++){
        let temp = s[i]
        s[i]= s[len-1-i]
        s[len-i-1]=temp
    }
};