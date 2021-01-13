/*
    문자열 압추
    85번 문제의 기초문제
    /aaaabbc - a4b2c1
*/

let user = "aaaabbc"
let count = 0;
let store = user[0]
let result =''
// 스트링의 경우 하나씩 순화
for(let i of user){
    // 같은 수 몇인지
    if(i==store){
        count += 1
    }else{
        result += store +String(count)
        // 다시 카운트 초기화 1부터 시작이니 1로
        count =1;
    }
}

console.log(result)