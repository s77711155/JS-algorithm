/*
*  창문 열듯이 밀고나가는
* */

function solution(k, arr){
    let sum, answer =0
    for (let i=0; i<k; i++) sum += arr[i]
    answer = sum

    for (let i=k; i<arr.length; i++){
        // 옆으로 밀고 나가듯 
        sum += (arr[i] - arr[i-k]);
        answer = Math.max(answer,sum)
    }
}

console.log(solution())