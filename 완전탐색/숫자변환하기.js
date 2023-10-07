// dfs 풀이
function solution(x, y, n) {
    let min = Number.MAX_SAFE_INTEGER
    function dfs(S,c){
        if(S === y){
            console.log(S,'sss')
            min = Math.min(min,c)
            return
        }else {
            if (S>y) return;
            console.log(S,'ss')
            let arr = [S+n,S*2,S*3]
            for(let i in arr){
                dfs(arr[i],c+1)
            }
        }
    }

    dfs(x,0)
    return min
}

// dp로 풓이

console.log(solution(10,40,5))