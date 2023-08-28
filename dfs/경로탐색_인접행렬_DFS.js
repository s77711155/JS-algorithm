// n: 도착 정점, arr: 연결리스트
function sol(n,arr){
    let answer = 0;
    let ch = Array.from({length:n+1}, ()=>0)
    let graph = Array.from({length:n+1}, ()=> Array(n+1).fill(0))
    console.log(graph,'graph')
    let path =[]
    function dfs(v){
        if (v === n){
            // 결과물 출
        }else {
            for (let i =1; i<=n; i++){
                if (graph[v][i] === 1 && ch[i] ===0){
                    ch[i] =1;
                    dfs(i)
                    ch[i] =0
                }
            }
        }
    }
}

console.log(sol(2,[[1,2]]))
