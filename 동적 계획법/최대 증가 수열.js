// 2,7,5,8,6,4,7,12,4 가장 길게 증가하는  최대 길이
// 다이나믹 프로그래밍으로 풀기


function solution(arr) {
    let answer =0;
    // 0으로 초기화된 배열
    let dy = Array.from({length: arr.length},() =>0)
    // 처음 인덱슨 초기화
    dy[0] = 1;
    for (let i = 1; i<arr.length; i++){
        // dy 배열에 가장 큰 값을 다음으로 갖고 오기 위해
        let max =0;
        for (let j=i-1; j>=0; j--){
            // arr[i]> arr[j] 이런 조건들이 많이 잇을테니 그중에서 최대 길이값이 저장된 dy이  ->
            if (arr[i]> arr[j] && dy[j]> max){
                console.log(dy[j],'=====')
                max = dy[j]
            }
        }

        dy[i] = max +1;
        answer = Math.max(answer, dy[i]);
        console.log(max,'mmmmmaaaaa')
    }
    return answer
}

console.log(solution([2,7,5,8,6,4,7,12,3]))