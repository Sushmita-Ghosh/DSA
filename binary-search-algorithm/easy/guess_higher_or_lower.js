/**
 * https://leetcode.com/problems/guess-number-higher-or-lower/description/
 */



/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l =1;
    let r= n;

    while(l<=r){
        let m = l+ Math.floor((r-l)/2)
        let pick = guess(m)

        if(pick == 0) {
            return m
        } else if (pick< 0) //-1
        {
            r=m-1
        } else {
            l=m+1
        }
        
    }
    return -1 /** if not found */
};