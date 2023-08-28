
function sol(arr,k){
    let result = Number.MAX_SAFE_INTEGER
    let n = arr.length
    let temp = Array.from({length: n})
    let ch = Array.from({length: n},()=>0)
    function dfs(L, sum, sub){
        if (sum >= k){
            console.log(result,'re')
            result =  Math.min(result,sub)
            console.log(sum,temp)
        }
        if (L === n){
            // 최소 인거만...
            console.log(sum,L,'eeeeeee')
           return


        } else {
                    dfs(L+1, sum+arr[L], sub)
                    dfs(L+1, sum, sub)

        }
    }

    // L은 원소를 사용한다 안한다
    dfs(0,0,0)
    return result

}
let arr= [1,2,3,4,5]
console.log(sol(arr,9))



// function dfs(L, currentSum, subsetLength) {
//     if (currentSum >= K) {
//         minSubsetLength = Math.min(minSubsetLength, subsetLength);
//         return;
//     }
//
//     if (index === arr.length) {
//         return;
//     }
//
//     // Include the current element in the subset
//     dfs(L+ 1, currentSum + arr[index], subsetLength + 1);
//
//     // Exclude the current element from the subset
//     dfs(L + 1, currentSum, subsetLength);
// }
//
// dfs(0, 0, 0);