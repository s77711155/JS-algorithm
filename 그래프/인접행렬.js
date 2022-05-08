/* 행 => 열
* 무방향 그래프 graph[a][b], graph[b][a]
* 방향 그래프 graph[a][b]
* 가중치 그래프 graph[a][b] = 가중치
* */

// 인접행렬로 그래프를 파악한다
function f(vertex, arr) {
    let answer=0;
    let graph=Array.from(Array(vertex+1), ()=>Array(vertex+1).fill(0));
    let ch=Array.from({length:vertex+1}, ()=>0);
    // 인접행렬를 값을 넣어주자!!
    for (let [a,b] of arr){
        graph[a][b]=1
    }

    console.log(graph,'graph')
    function dfs(v) {
        if (v === vertex){
            return answer++
        }else {
            for (let i= 1; i<=vertex; i++){
                if (graph[v][i] ===1 && ch[i] ===0){
                    ch[i] = 1;
                    dfs(i);
                    ch[i] = 0
                }
            }
        }
    }
    ch[1] = 1
    dfs(1)
    return answer

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