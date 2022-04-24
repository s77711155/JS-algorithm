/*
* 출력의 시점 전위 : 부 왼 오
* 중위: 왼 보 오
* 후위: 왼 오 부
*
* */

// 이진트리로 부분 집합 구하기
function f(n) {
    let checkArr = Array.from({length:n+1}, ()=>0)
    function dfs(v) {
        if (v === n+1){
            // 여기서 출력
            let temp ='';
            for (let i =1; i<= n; i++){
                if (checkArr[i] === 1) temp += i
                console.log(i,'---------------')
            }
            return
        }
        // 포함 시킨다
        checkArr[v] = 0
        dfs(v+1)
        // 노포함
        checkArr[v] = 1;
        dfs(v+1)
    }

    dfs(1)
}


console.log(f(3))