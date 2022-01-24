function sol(w) {
    let shape = {
        '(': ')',
        ')': '('
    }

    let base = []


    cutStr(w)
    function cutStr(str) {
        let u = [str[0]];
        let idx = 0;
        let plus = 1
        for (let i in str){
            if (i == 0) continue;
            if (plus <= 0) {
                idx = i;
                break;
            }
            if (u[i-1] === str[i]) {
                u.push(str[i])
                plus += 1
            }else {
                plus -= 1;
                u.push(str[i])
            }
        }
        let v = w.slice(idx);
        console.log(u,v,'???')
        // 재귀 함수
        base = [...base, ...u]

        // u가 올바른 문자열이면 v를 재귀
        let copy = [...u]
        for (let i in u){
            // )
            if ('C')
            shape['c']
        }
        //return [u,v]
    }

}


console.log(sol("()))((()"))


function solution(w) {

}


function reverse(str) {
    return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
}

function solution(p) {
    if (p.length < 1) return "";

    let balance = 0;
    let pivot = 0;
    do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0);

    const u = p.slice(0, pivot);
    const v = solution(p.slice(pivot, p.length));

    if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
    else return "(" + v + ")" + reverse(u);
}

function f(w) {
    if (w === '') return ''
    let u, v;
    let cnt = 0
    const wLen = w.length;
    for (let i =0; i<wLen; i++){
        w[i] === '(' ? cnt++ : cnt--;
        if (cnt === 0){
            u = w.slice(0, i+1);
            v = w,slice(i+1);
            break;
        }
    }// w에서 균형잡린 문자열까지 u로 선언 나머지를 v로 선언

    const uLen = u.length;
    for (let i=0; i<uLen; i++){
        u[i] === '(' ?  cnt++ : cnt--
        if (cnt < 0){ // 올바른 문자열이 아닌 분기처리
            let str ='';
            str +=`(${f(v)})`

            for (let j =1; j<uLen -1; j++ ){
                u[j] === '(' ? str += ')' : '('
            }
            return str
        }
    }

    return u+ f(v)// u가 올바른 문자열이면 해당 u에[ 재귀함수 붙인다.
}
//
// 재귀함수에 인자 w로 문자열 v를 넣어 결과를 반환받는다.
//     문자열 u의 처음, 마지막 문자를 제거하고, 나머지 문자열에서 모든 괄호를 반대방향으로 바꾼다.
// "("  solution(v)  ")"  변화된 문자열 u 을 이어 붙여 반환한다.


/*
* do{
*  조건이 참일 동안 실행할 코드
* }
* while(조건)
*
* */


4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
function reverse(str) {
    return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
}

function solution(p) {
    if (p.length < 1) return "";

    let balance = 0;
    let pivot = 0;
    do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0);

    const u = p.slice(0, pivot);
    const v = solution(p.slice(pivot, p.length));

    if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
    else return "(" + v + ")" + reverse(u);
}