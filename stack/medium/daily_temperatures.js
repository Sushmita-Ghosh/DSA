// https://leetcode.com/problems/daily-temperatures/description/




/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {
    let stack = []
    const n = temp.length
    let ans = Array(n).fill(0)

    /** For last element, always 0 */
    stack.push(n - 1)
    ans[n - 1] = 0


    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            const top = stack[stack.length - 1]
            if (temp[i] > temp[top]) {
                /**keep popping  */
                stack.pop()
            }
            else {
                /** we found nwd -(if we push here if something doesnot have nwd we will not have the element in stac, but we need it so it needs to be pushed last*/
                ans[i] = top - i
                break;
            }
        }

        if (stack.length === 0) {
            ans[i] = 0
        }

        stack.push(i)
    }

    return ans
};


// Algorithm:

// Here we are storing indices into stack
// 1. For last ele, temp will be 0, so push the same in answer and then push the ele into the stack
// 2. Now start from n-2
// 3. while till we reach length //top or the stack has indices
// 3. If temp[i] > temp[top] - then keep popping elements 
// 4. else we fount the nwd - so that is push top - i to answer[i] , then break
// 5. if stack.length reach so the answer = 0
// 6. push index of curr element to stack
// 6. return ans



// Corner case contains duplicates

var dailyTemperatures = function (temp) {
    let stack = []
    const n = temp.length
    let ans = Array(n).fill(0)

    stack.push(n - 1)
    ans[n - 1] = 0


    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            const top = stack[stack.length - 1]
            if (temp[i] >= temp[top]) {  /** Here if the temp is equal to also pop out please */
                stack.pop()
            }
            else {
                ans[i] = top - i
                break;
            }
        }

        if (stack.length === 0) {
            ans[i] = 0
        }

        stack.push(i)
    }

    return ans
};

