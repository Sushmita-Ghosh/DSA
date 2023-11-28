// Hamming Distance
// Given two strings x & y , find the hamming distance between them


// Input: x = "hello" , y ="hwllr"
// Output 2 
// (hello)
// (hwllr)
//   ↑  ↑


// edge case : if the lengths of the strings are not equal --> no point --> we can't find hamming distance in this case

function hammingDistance(x,y) {
    if(x.length !== y.length){
        throw new Error("Strings must be of Equal Size")
    }

    let distance = 0
    for (let i = 0; i < x.length; i++) {
        if(x[i] != y[i]){
            distance++;
        }
        
    }

    return distance
}

console.log(hammingDistance("hello", "hwllr"));