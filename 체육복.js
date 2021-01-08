/*
탐욕법 : 
그리디 알고리즘은 탐욕 알고리즘 또는 욕심쟁이 알고리즘이라고도 불리는데요. 미래를 생각하지 않고 각 단계에서 가장 최선의 선택을 하는 기법입니다. 이렇게 각 단계에서 최선의 선택을 한 것이 전체적으로도 최선이길 바라는 알고리즘이죠.
*/

function solution(n, lost, reserve) {
    var num=0;

    var r = reserve.filter(v =>lost.indexOf(v) == -1) // 정말 여분잇는 애들
    var l = lost.filter(v => reserve.indexOf(v) == -1) // 정말 빌려야하는 애둘
   
    
    var rL = r.length;
    var lL=l.length;
    var All = n-(lL+rL); // 자기 체육복만 가지고 온애
    
    console.log(r+' = r');
    console.log(l+' = l');
    console.log(All +'= all');
    
    for(var i=0; i<r.length; i++){
       if(l.indexOf(r[i+1]) == -1 || l.indexOf(r[i+1]) == -1 ) { // 한번 빌린애의 중복값 
            num++;
       }
    }
console.log(num+' = num');
    return num+rL+All;
}

// 어디 배열에두 속하지 못할경우 전체 수에서 -1 해줫다 
// 정확성 75
// 다시 풀기!!!!!!!!!!!!!!!!!!!!!!!!!11
function solution(n, lost, reserve) {
    let count =0;
    let all = n
   
   for(let i in lost){
       if(reserve.includes(lost[i])){
           count += 1;
           let idx = reserve.indexOf(lost[i]);
           reserve.splice(idx,1)
          
           console.log('본인')
       }else if(reserve.includes(lost[i]+1)){
           count += 2;
           let idx = reserve.indexOf(lost[i]+1);
           reserve.splice(idx,1)
          console.log('+1',count,)
         
          
  
       }else if(reserve.includes(lost[i]-1)){
            count += 2;
           let idx = reserve.indexOf(lost[i]-1);
           reserve.splice(idx,1)
           console.log('-1')
           
       }else{
         all -= 1
       }
     }
   console.log(all,'all')
    count = count + reserve.length 
    return all;
  }
  
  console.log(solution(		9, [2, 4,6,8,9], [1,2,5,8,4]),'해답')

// 다른 사람 풀이 
  function solution(n, lost, reserve) {
    var realLost = lost.filter(a => !reserve.includes(a));
    var realReserve = reserve.filter(a => !lost.includes(a));
    
    return n - realLost.filter(a => {
        var b = realReserve.find(r => Math.abs(r-a) <= 1);
        if(!b) return true;
        realReserve = realReserve.filter(r => r !== b);
    }).length;
}

// 다른 사람 풀이 2
function solution(n, lost, reserve) {
    let answer = 0;
    let uniform = [];
    
    // 초기 셋팅
    // 체육복을 1번씩 가지고 있음
    for(let i = 0; i < n; i++) {
        uniform[i] = 1;
    }
    // 도난당한 사람은 체육복이 0개
    for(let i = 0; i < lost.length; i++) {        
        uniform[lost[i]-1] = 0;
    }
    // 여벌을 가지고 있는 사람은 +1개를 해줌, 2개가 아닌 이유는 도난당했는데 여벌있으면 1개니까
    for(let i = 0; i < reserve.length; i++) {
        uniform[reserve[i]-1] += 1;
    }
    
    for(let i = 0; i < n; i++) { // 체육복이 0개일 경우 빌릴수 있는지 확인
        if (uniform[i] == 0 && uniform[i-1] == 2) { // 앞번호 체육복을 빌리는 경우
        	// 한개씩 나눔
            uniform[i-1] = 1; 
            uniform[i] = 1;
        } else if (uniform[i] == 0 && uniform[i+1] == 2) { // 뒷번호 체육복을 빌리는 경우
            // 한개씩 나눔
            uniform[i] = 1;
            uniform[i+1] = 1;
        }
    }
    
    for(let i = 0; i < n; i++) {
        if (uniform[i] > 0) { // 체육복이 1개 이상 가진 경우
            answer++; // 수업 참여 가능 인원 카운트
        }
    }
    
    return answer;
}