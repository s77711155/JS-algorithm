/// 이진 트리: 부분 집합

// n이 많아 지면 다이나믹으로 푼다!!!!!!!
// 문제를 풀거나 말거나
function f(time, arr) {
    let result = 0
 function dfs(L, score, t) {
     // arr[L] = [점수, 시간]
    if (arr.length===L){
        if (time < t) return;
        result = Math.max(result, score)
    }else{
        // 더한다
        dfs(L+1, score+arr[L][0], t+arr[L][1])

        // 더하지 않는다
        dfs(L+1, score, t)
    }
 }
 dfs(0, 0,0)

    return result
}

let n = 20;
let arr =
    [
        [10, 5],
        [25, 12],
        [15, 8],
        [6, 3],
        [7, 4]
    ]
console.log(f(n, arr))