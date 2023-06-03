// 점수 계신
function sol(arr){
    // 아오 그동안 아프고 힘든 내상반기가 너무 아깝고 주변 사들에게 너무 미안하누...후.....정신차리구!!!! 서진솔 다시 아자아자!!!!!!!!!!!!!!마무리 되지 않았던 4년 끝이 더럽고 다시는 그리고싶지않다!!!! 내 인생에서 없었던 4년이라 생각하자!!!!!!!! 아자아자!!!!!!!!!!!!!!!!!
    // 상반기를 함께 아파해주고 기다려주고 지켜봐줫던 사람들한테 잘하자!!!!! 오늘부터 다시 열심히 살자!!!!!!!!!
    let answer=0;
    let cnt =0;
    for (let x of arr){
        if (x ===1){
            cnt++
            answer +=cnt;
        }
        else cnt=0
    }
}

console.log(sol([1,0,1,1,1,0,0,1,1,0]))

//등수 구하기
function sol2(a){
    // 1로 초기화
    let answer = Array.from({length: a.length}, ()=>1)
 for (let i=0; i<a.length; a++){
     // a[i] 가 기준
     for (let j=0; j<a.length; j++){
        if (a[j]> a[i]){
            // a[i]가 나라고 기준했을때
            answer[i]++
        }
     }
 }
}
const arr2 = [87,89,92,100,76]
console.log(sol2(arr2))

/*
*  행과 열/ 가로세
* arr[행][열로
* * */
// top,left, down, right
const dx = [ -1, 0,1,0]
const dy = [0,1,0,-1]


//회문문자열
function sol3(text){
    text.toLowerCase()
    text.split('')
    // case1. 내장 함수를 사용하지않고
    const len =text.length;
    for (let i=0;i<len;i++){
        // i만큼 빼줘야 반복문 i가 증가 될수록 행렬의 대각선 원리처럼 점진적 반대되는 비교값을 만날수 있다
        if (text[i] !== text[len-i-1]) return "NO"
    }

    // case2. 내장 함수 사용 reverse
    return  text.split('').reverse().join() !== text ? "NO" :  "YES"
}
console.log(sol3('Gooogg'))