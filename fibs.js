/**
 * REturn an array containing the first `n` Fibonacci numbers, iteratively.
 * @param {number} n-how many numbers to generate
 * @returns {number[]}
*/
function fibs(n){
    if(n<=0) return[];
    if(n===1) return [0];
    const result=[0,1];
    for(let i=2; i<n; i++){
        result.push(result[i-1]+result[i-2]);
    } return result;
}
console.log(fibs(8));
console.log(fibs(1));
console.log(fibs(0));