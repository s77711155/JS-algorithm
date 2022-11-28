/*
* 인접 행렬은 메모리르 더 잡아 먹기 때문에
* i가 0일때 g[정점].length 만 돌면 됨ㅠ* */

function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n+1), ()=>Array())
    let check = Array.from({length: n+1}, ()=>0)
    //console.log(graph, check)

    for (let [a,b] of arr){
        // 방향 그래프!
        graph[a].push(b)
        console.log(a,b)
    }
    console.log(graph, check)
    function dfs(v){
        if (v ===n) answer++
        else {
            // 그래프의 v행의 길이만큼 돈다
            for (let i =0; i<=graph[v]; i++){
                if (check[graph[v][i]] ===0]){
                    check[graph[v][i]] =1
                    // graph[v][i] 이게 정점!!!!
                    dfs(graph[v][i])
                    check[graph[v][i]] =0
                }
            }
        }
    }

    // 1번 부터 진행하니깐!
    check[1] =1
    dfs(1)
    return answer
}
// 간선 정보
let arr = [[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]]
// 5는 도착 정점
console.log(solution(5,arr))