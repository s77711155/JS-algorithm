function solution(numbers) {
    var answer = [];
    var arr = numbers;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j <arr.length;j++){
            answer.push(arr[i]+arr[j])
        }
    }

    answer  = [...new Set(answer)]
    answer.sort((a,b)=>a-b)
    console.log(answer)
    return answer;
}