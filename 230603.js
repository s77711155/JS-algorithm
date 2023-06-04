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


// 가장 짧은 문자거리 구하기 한개의 문자열 문자 문자열sㅇ 문자 t와 떨어진 최소거리르 출
// e, taecherrmode
/* 문자 e 가 문자열에서 본인이 각 문자들과 거리가 얼마인지를 구하는 알고리즘 대신 e가 중복일 가능성도 있다. 그럼 최소일 경우만 노출@*/
function sol4(){

}


// 완전탐색

//Two pointer: 포인트를 두개를 둬서// 문제풀이 연속된 수열의 합이 n이 되는 수를 구하라

// 탐욕 알고리즘은 말 그대로 선택의 순간마다 당장 눈앞에 보이는 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법이다.


//스택
//문제풀이
//쇠막대기
//
function sol5(s){
    let answer =0;
    let stack=[]
    for(let i=0; i<s.length;i++){
        if (s[i]==='(')stack.push(s[i])
        else {
            stack.pop() // pop을 먼저헤줘야햄!!!!!!!!
            if (s[i-1] === '(') answer +=(stack.length);
            else answer+=1

        }
    }
}

console.log(sol5())

//DFS
//으으아아아아가아아 진쏠!!!! 정신차뤼자자자자ㅏㅏ자ㅏ자자자자자집주우중주우중중주웆웆우중주웆웆우주우중중중중주웆웆웆우중푸
/*
* 출력 기준
* 전위순회: 부/왼/오
* 중위순회: 왼/부/오
* 후위순회:왼/오/부부* */

function DFS(v){
    // 재귀의 탈출이 되는 조건!!!
    if (v>7) return
    else {
        // 재귀가 이루어지는 부분
        DFS(v*2)
        DFS(v*2+1)
    }
    DFS(v)
}

//부분집합 구하기 DFS
function sol6(){
    let answer = []
    let ch = Array.from({length:n+1},()=>0)
    function DFS2(v){
        if (v === n+1) {
            let temp = ""
            for (let i=1; i<=n; i++){
                // check 조건에 따라뿌려지는 부분집합을 판단
                if (ch[i]===1) tmep+= i+"";
            }
            if (temp.length>0) answer.push(temp.trim())
        }
        else {
            ch[v] = 1
            DFS(v+1)
            ch[v]=0
            DFS(V+1)
        }
        DFS(v)
    }
}

// 합이 같은 부분집합
