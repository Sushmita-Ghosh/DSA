var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

/** Sliding Window */
/** We need to run the loop from n - window size */
                // i+j , i+j+1; i+j+2
// haystack = dgdgsadjggjgjgjg 
            //    i
// needle = sad
//          j



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    // ws = m
    for (let i = 0; i <= n - m; i++) {

        /** If any of the charac in sliding window, don't match - break */
        let j = 0;
        for (; j < m; j++) {
            if (haystack[i + j] != needle[j]) {
                break
            }
        }
        // j will be at the length , if the whole needle is there in haystack
        if(j === m){
            return i 
        }
    }

    return -1
};

// o(n) * o(m)
// Space = o(1)