// 이진탐색
// lowerbound: 깉은 값이 여러개러면 가장 낮은 인덱스

function sol(arr, m){
    let start =1
    let end = arr.reduce((a,b) => Math.max(a,b))
    console.log(end, 'ed>')
    let result = 0
    while (start<=end) {
        let mid = parseInt((start+end)/2) // 중간 상한액
        console.log(mid,'mid')
        let total = 0
        for (x of arr){
            total += Math.min(mid, x)
        }
        if (total<= m){
            result = mid
            start =
        }
    }
}

console.log(sol([120, 110, 140, 150],485))