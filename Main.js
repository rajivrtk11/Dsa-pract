const buildGraph = (matrix) => {
    const adjList = Array.from({length: matrix.length}, () => []);

    for(let i = 0; i < matrix.length; i++){
        adjList[i].push(...getVertex(matrix[i], i));
    }
    return adjList;
}

const getVertex = (row, idx) => {
    const edges = [];
    for(let i = 0; i < row.length; i++){
        if(i === idx) continue;
        if(row[i] === 0) continue;
        edges.push(i);
    }

    return edges;
}
const matrix = [[1,1,0],[1,1,0],[0,0,1]];
const adjList = buildGraph(matrix);
console.log(adjList)
