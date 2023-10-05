function sol(visited, x){
    // 윈도우 크기
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER
    let count = 1
    for (let i = 0; i<x; i++){
        sum += visited[i]
    }

    for (let rt = x; rt<visited.length; rt++){
        sum += (visited[rt] -  visited[rt-x])
        if (max === sum){
            count++
        }
        max = Math.max(max,sum)
    }
    console.log(max,count)

}


// for (let i=k; i<arr.length; i++){
//     // 옆으로 밀고 나가듯
//     sum += (arr[i] - arr[i-k]);
//     answer = Math.max(answer,sum)
// }

let visited = [1,1,1,1,1,5,1]
let x = 5
console.log(sol(visited,x))