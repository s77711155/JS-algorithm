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
                find =  copy.length-1
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


// 다른이 풀이
function solution(priorities, location) { //중요도, 요청 문서 index
    let target_index = location; //user가 선택한 index
    let answer = 1;
    let first = -1;
    
    while (priorities.length > 0) {
        //1. 가장 앞에 있는 문서를 추출
        first = priorities.shift();
        //2. 중요도 높은 문서가 존재 시 뒤로 넣음
        if (priorities.some((value, index) => value > first)) {
            priorities.push(first);
        }
        else {
            if (target_index === 0) {
                break;
            }
            else answer ++;
        }
        /*3. 사용자가 선택한 문서가 중요도가 제일 높지 않은 경우
             현재 대기목록의 맨 끝으로 index를 옮긴다.
        */
        if (target_index === 0) target_index = priorities.length - 1;
        else target_index --;
    }
    return answer;
}