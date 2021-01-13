/*
    숫자 놀이
    61번 문제의 심화문제

    ex)
    1 (1)
    11 (1이 1개)
    12 (1이 2개)
    1121 (1이3개 2가 1개)
    1321 (1이 3개 2가 1개)
    122131
    132231
*/

function sol(n){
    let anwser =0;
    if(n===1) {
        return '1';
    }
    for(let i=1; i<n; i++){
        anwser = rule(anwser)
    }

    return anwser
}

function rule(anwser){
    // 일단 가장 큰 수를 찾는다 => 그 수 기준으로 for을 돌리면서 순회
   // let maxNum = Math.max(...anwser) // or Math.max.apply( null, jbNumber )
   let maxNum = 9
    let result ='';

    for(let i=1; i<=maxNum ;i++){
        // 정규식으로 i의 수가 몇개 있는지 찾는다 g: 단어의 전체를 의미
        let r =new RegExp(i,'g');
        // 0개일 경우도 체크해서 빈배열로
        let count = ( anwser.match(r) || []).length;

        result =+ String(i) + String(count)
    }
    return result
}

const user_input = 6;
console.log(sol(user_input))