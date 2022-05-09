/* 행 => 열
* 무방향 그래프 graph[a][b], graph[b][a]
* 방향 그래프 graph[a][b]
* 가중치 그래프 graph[a][b] = 가중치
* */


function f(vertex, arr) {
    let answer=0;
    let graph=Array.from(Array(vertex+1), ()=>Array());
    let ch=Array.from({length:vertex+1}, ()=>0);
    console.log(graph)
    // 인접행렬를 값을 넣어주자!!
    for (let [a,b] of arr){
        graph[a].push(b)// 이렇게 하면 리스트가 됨!!!!
    }

    function dfs(v) {
        if (v === vertex){
            return answer++
        }else {
            for (let i= 1; i<=graph[v].length; i++){
                if (ch[graph[v][i]] ===0){
                    ch[graph[v][i]] = 1;
                    dfs(ch[graph[v][i]]);
                    ch[ch[graph[v][i]]] = 0
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