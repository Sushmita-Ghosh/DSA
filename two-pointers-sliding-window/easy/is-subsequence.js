// ahbgdc
//       j
// abc
//    i


/** Subsequence - substring but order of charac is same - so two pointer can be applied */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0
   while(j<t.length){
        if(s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++
        }
    }

    /** i will reach the end of the loop if it is a subsequence */
    return (i === s.length) ? true : false
};


/** Akshay's code */
var isSubsequence = function (s, t) {
    let i = j = 0;
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;

        }
        j++;
    }

    /** i will reach the end of the loop if it is a subsequence */
    return (i === s.length) ? true : false
};