//현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities
// 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location

// some() 함수 사용
function solution(priorities, location) {
    let answer = 0
    let find = priorities[location];
    let copy = priorities.slice();
    let first = 0;
    while(copy.length > 0){
        first = copy.shift()
        
        // 첫 번째 값이랑 다른 원소 비교
        if(copy.some((v,i)=>v > first)){
            // 다른 값이 더 클경우 첫번째 값을 맨뒤로 보낸다.
            copy.push(first)
            // location 의 위치도 변경해주자
            if(find===0){
                find +=  priorities.length-1
            }else {
                find--
            }
        }else{
            if(find==0){
                break
            }else{
                // fitst가 크다면 인쇄수(answer)를 높여줌
            answer++
            }
        }


    }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0), '결과')