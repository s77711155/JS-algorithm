function f(v, arr) {
    // 방문한 노드를 체크 해야함
    let graph =[];
    let check = []
    for(let [a,b] of arr){
        graph[a][b] = 1
    }

    function dfs(vertex) {
        if (v === vertex){

        }else {
            for (let i =1; i<=n; i ++){
                if (graph[vertex][i] ===1 && check[i] === 0 ){
                    check[i]=1;
                    dfs(i)
                    check[i] = 0
                }
            }
        }
    }
    check[1] = 1
    // 노드를 넣어줌
    dfs(1)
}

let arr = [[1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5] ]
console.log(f(5, arr))