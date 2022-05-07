/// 이진 트리: 부분 집합

// n이 많아 지면 다이나믹으로 푼다!!!!!!!
// 문제를 풀거나 말거나
// function f(time, arr) {
//     let result = 0
//  function dfs(L, score, t) {
//      // arr[L] = [점수, 시간]
//     if (arr.length===L){
//         // 문제에서 제공한시간을 넘어가면 안되니깐
//         if (time < t) return;
//         result = Math.max(result, score)
//     }else{
//         // 더한다
//         dfs(L+1, score+arr[L][0], t+arr[L][1])
//
//         // 더하지 않는다
//         dfs(L+1, score, t)
//     }
//  }
//  dfs(0, 0,0)
//
//     return result
// }
//
// let n = 20;
// let arr =
//     [
//         [10, 5],
//         [25, 12],
//         [15, 8],
//         [6, 3],
//         [7, 4]
//     ]
// console.log(f(n, arr))

// 같은 문제로 다이나믹으로 풀수 잇다 문제의 수가 많아지면 dfs로 푸는건효율성이 없다

// j시간에 얻을수 잇는  최대 점수를 기록

// 다이니막은 중복을 막기 위해선 뒤에서 부터 계산

//[문제 점수, 문제 시간]

// 점수, 총 시간
function dy(arr, m) {
    let dy =Array.from({length: m+1}, ()=>0);

    for (let i=0; i<arr.length; i++){
        let ps = arr[i][0];
        let pt = arr[i][1];
        // j시간동안 몇점을 푸는가
        // 현재 시간 보다작으면 못푼다
        for (let j =m; j>=pt; j--){
            dy[j] = Math.max(dy[j], dy[j-pt]+ps);
        }
    }

    console.log(dy,'dydydydydydy')
    let answer = dy[m];
    return answer
}

let arr = [
    [10,5],
    [25,12],
    [15,8],
    [6,3],
    [7,4],
]

console.log(dy(arr, 20))