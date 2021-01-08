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