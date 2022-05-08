// 4개의 구슬중에 2개를 뽑아라
function f(n,m) {
 let result = [];
 // 조합의 경우를 탬프에 넣을거
    let temp = Array.from({length:m},()=>0)
 function dfs(L, start) {
    if (L===m){
        result.push(temp.slice())
    } else {
        for (let i =start; i<=n; i++){
            temp[L]=i;
            dfs(L+1, i+1)
        }
     }
 }
 dfs(0,1)
 return result
}

console.log(f(4,2))