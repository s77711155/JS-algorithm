/*
    스택/큐
 */

// while문안에서 splice를 해서 같이 배포할 날을 빼주니깐 인덱스 값이 바뀌면서 forEach 돌때 혼란이 옴
// 해결 방안이 필요함
function sol(process, speed) {
    let day = [];
    let result = [];
    let get =[];
    let new =[]
  
    for (let i in process) {
      day.push(Math.ceil((100 - process[i]) / speed[i]));
    }
    console.log(day,'첫 데이')
  
    while(day.length > 0){
       get[0] = day.shift();
       console.log(get,'get')
      day.forEach((v)=>{
        if(v <= get[0]){
          get.push(v)
          day.splice(i,1)
        }
        console.log(day,'day1')
      })
      console.log(get,'푸시전 get')
      result.push(get.length)
      get = []
//       5
// 10  
// 1
// 1
// 20
// 1
    }
  
  
  
    return result;
  }
  
  console.log(sol(	[95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

  /*
5
10  
1
1
20
1
  */


  //다른 사람 풀이
  function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}

/* 남은 시간을 가져옵니다. */
function getLeftTime(progresse, speed) {
    return Math.ceil((100 - progresse) / speed);
}

function solution(progresses, speeds) {
    var answer = [];

    // 프로그래스가 없을 경우를 처리해 줍니다.
    if (progresses.length <= 0) return [];

    // 남은 시간들을 정리해 줍니다.
    const ledtTimes = progresses.map((progresse, idx) => getLeftTime(progresse, speeds[idx]));

    let temp = 1;
    let prev = ledtTimes[0];
    for (let i = 1; i < ledtTimes.length; i++) {
        let curr = ledtTimes[i];
        if (prev >= curr) {
            temp += 1;
        } else {
            answer.push(temp);
            prev = curr;
            temp = 1;
        }
    }
    answer.push(temp);

    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));