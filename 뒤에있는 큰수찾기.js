function solution(numbers) {
    let dy = []
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]<numbers[j]){
                dy[i] = numbers[j]
                break
            }else{
                dy[i] = -1
            }
        }
    }
    dy.push(-1)
    return dy
}


console.log(solution([9, 1, 5, 3, 6, 2]))