// dfs 풀이
// function solution(x, y, n) {
//     let min = Number.MAX_SAFE_INTEGER
//     function dfs(S,c){
//         if(S === y){
//             console.log(S,'sss')
//             min = Math.min(min,c)
//             return
//         }else {
//             if (S>y) return;
//             console.log(S,'ss')
//             let arr = [S+n,S*2,S*3]
//             for(let i in arr){
//                 dfs(arr[i],c+1)
//             }
//         }
//     }
//
//     dfs(x,0)
//     return min
// }

// dp로 풓이
function solution(x, y, n) {
    const dp = new Array(y+1).fill(Infinity);
    dp[x] = 0;
    for(let i=x; i<=y; i++){
        console.log(dp,'dp')
        console.log(i,'i')
        console.log(i+n,'i+n')
        console.log(i*2,'i*2')
        console.log(i*3,'i*3')
        dp[i+n] = Math.min(dp[i+n],dp[i]+1);
        dp[i*2] = Math.min(dp[i*2],dp[i]+1);
        dp[i*3] = Math.min(dp[i*3],dp[i]+1);
    }
    console.log(dp[y],'resylt')
    return dp[y]!==Infinity? dp[y] : -1;}
console.log(solution(10,40,5))