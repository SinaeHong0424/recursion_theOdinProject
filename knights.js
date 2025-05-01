/**
 * returns all possible moves a knight can make from a given position
 * @para {Array} position-Current position[x,y]
 * @returns {Array}- Array of valid next positions
 */
function getKnightMoves(position){
    const [x,y]=position;
    const possibleMoves=[
        [x+2,y+1],
        [x+2,y-1],
        [x-2,y+1],
        [x-2,y-1],
        [x+1,y+2],
        [x+1,y-2],
        [x-1,y+2],
        [x-1,y-2],
    ];
    return possibleMoves.filter(([newX,newY])=>
        newX >=0 && newX<8 &&newY >=0 && newY<8
    );    
}
/**
 * finds the shortest path for a knight from start to end position
 * @param {Array} start =starting position [x,y]
 * @param {Array} end -ending position [x,y]
 * @returns {Array} -array of positions representing the path
 */
function knightMoves(start,end){
    if (start[0]===end[0] && start[1]===end[1]){return [start];}
    const queue=[[start]];
    const visited=new Set();
    visited.add(start.toString());
    while(queue.length >0){
        const path=queue.shift();
        const currentPosition=path[path.length-1];
        const possibleMoves=getKnightMoves(currentPosition);
        for (const nextPosition of possibleMoves){
            if (visited.has(nextPosition.toString())){continue;}
            const newPath=[...path,nextPosition];
            if(nextPosition[0]===end[0] && nextPosition[1]===end[1]){return newPath;}
            visited.add(nextPosition.toString());
            queue.push(newPath);
        }
    }return null;
}
/**
 * functioj to display the result in a nice format
 * @param {Array} start -starting position [x,y]
 * @param {Array} end -ending position [x,y]
 */
function displayKnightMoves(start,end){
    const path=knightMoves(start,end);
    console.log(`=> You made it in ${path.length-1} moves! Here's your path:`);
    path.forEach(position=>{
        console.log(`  [${position[0]},${position[1]}]`);
    });
}
//test cases
console.log("Test Case 1:");
displayKnightMoves([0,0],[1,2]);

console.log("Test Case 2:");
displayKnightMoves([0,0],[3,3]);

console.log("Test Case 3:");
displayKnightMoves([3,3],[0,0]);

console.log("Test Case 4:");
displayKnightMoves([0,0],[7,7]);

console.log("Test Case 5:");
displayKnightMoves([3,3],[4,3]);