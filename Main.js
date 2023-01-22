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

var findCircleNum = function(isConnected) {
    const adjList = buildGraph(isConnected);
    const count = 0, vis = {};
    for(let i = 0; i < adjList.length; i++) {
        if(!vis[i]) {
            dfs(i, vis, adjList);
            count++;
        }
    }
    return count;
};

var dfs = (idx, vis, adjList) => {
    vis[idx] = true;
    for(let ele of adjList[idx]) {
        if(!vis[ele]) dfs(ele, vis, adjList);
    }
}

const matrix = [[1,1,0],[1,1,0],[0,0,1]];
const adjList = buildGraph(matrix);
console.log(adjList)
