// /**

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Example 1:

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
// /

function largestAltitude(gain) {
  let altitudes = [];
  let sum = 0;
  altitudes.push(0);
  for (let i = 0; i <= gain.length - 1; i++) {
    sum += gain[i];
    altitudes.push(sum);
  }

  return Math.max(...altitudes);
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));

// No need to craete the altotudes array as it is not required
function largestAltitude(gain) {
  let sum = 0;
  let maxAlt = 0;
  for (let i = 0; i <= gain.length - 1; i++) {
    sum += gain[i];
    if (sum > maxAlt) {
      maxAlt = sum;
    }
  }

  return maxAlt;
}

//
const largestAltitude = (gain) => {
  let alt = 0,
    maxalt = 0;
  for (let g of gain) {
    alt += g;
    if (alt > maxalt) maxalt = alt;
  }
  return maxalt;
};
