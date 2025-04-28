/**
 * Merge two sorted arrays into one sorted array** 
 * @param {number[]} left
 * @param {number[]} right
 *  @returns {number[]}
 */
function merge(left, right){
    const merged=[];
    let i=0, j=0;
    while (i <left.length && j<right.length){
        if(left[i] <= right[j]){merged.push(left[i++]);}
        else{merged.push(right[j++]);}
    }
    return merged.concat(left.slice(i)).concat(right.slice(j));
}

/**
 *sort an array using merge sort(divide and conquer) 
 *@param {number[]} array
 *@returns {number[]} 
 */
function mergeSort(arr){
    if(arr.length <=1){return arr.slice();}
    const mid=Math.floor(arr.length/2);
    const left=mergeSort(arr.slice(0,mid));
    const right=mergeSort(arr.slice(mid));

    return merge(left,right);
}
console.log(mergeSort([3,2,1,13,8,5,0,1]));
console.log(mergeSort([102,79,100,110]));