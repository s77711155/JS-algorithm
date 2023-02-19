// n개의 수 이루어진 수열, 연속 부분 수열의 합이 특정 숫자 m이하가 되는 경우가 몇번 있는지

function sol(m, arr){
    let answer=0, lt=0, sum=0;
    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        if (sum ===m) answer++
        while (sum>=m){
            // 후위: 빼고 증가
            sum-=arr[lt++]
            if(sum==m) answer++
        }
    }
    return answer
}

let m =6
let arr = [1,3,1,2,3]

console.log(sol(m,arr))