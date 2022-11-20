/* bfs
* 특정 조건에서의 최단 경로!
* */

//dfs() 은 특정 상황에서 최대한 김숲이 들어가서 노드 방문후 다시 돌아가 다른 경로 탐색
function f(graph, startNode) {
    let visited = Array.from({length: graph.length}, () => false);
    let q = [startNode];
    visited[startNode] = true;
    let result = [startNode]

    while (q.length>0){
        // 먼저 들어온 원소 꺼내기
        const node = q.shift();
        console.log(node)
        console.log(graph[node],'graph[node]graph[node]graph[node]')
        console.log(visited,'visited')
        result.push(node)
        // 꺼낸 노드의 인접한 노드중에 방문한적이 없다면 넣어주기
        for (let i in graph[node]){

            let idx = parseInt(i,10)
            console.log(graph[node][idx],'i가먼디;')
            if (!visited[idx+1]) {
                q.push(graph[node][idx])
                visited[idx+1] = true
            }
        }
    }
    console.log(result)
}

let arr = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7],
]
console.log(f(arr,1))