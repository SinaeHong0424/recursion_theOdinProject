/** 
 * return a array containing the first `n` Fibonacci numbers, recursively
*@param {number} number
*@returns {number[]}
*/
function fibsRec(n){
    if (n <= 0) return [];
    if(n===1) return [0];
    if (n===2) return [0,1];

    const prev=fibsRec(n-1);
    const nextValue=prev[prev.length-1] +prev[prev.length-2];
    return [...prev,nextValue];
}
function fibsRecLogged(n) {
    console.log("This was printed recursively");
    return fibsRec(n);
}
console.log(fibsRec(8));
console.log(fibsRecLogged(8));