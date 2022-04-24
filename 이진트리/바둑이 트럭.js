// 이진 트리
function f(wegiht, arr) {

    let answer = 0
    function dfs(L, sum) {
        if (L === arr.length ){
            if (sum > wegiht) return
            console.log(arr[L])
            answer = Math.max(answer, sum)
        }else {
            // 무게를 더한다(태운다)
            dfs(L+1, sum + arr[L])

            // 무게를 더하지 않는다(안태운다)
            dfs(L+1, sum)
        }
    }
    dfs(0, 0)
}
let wegiht = 259.5;
let arr = [81,
    58,
    42,
    33,
    61
]
console.log(f(wegiht, arr));
