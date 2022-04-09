// 모든 합을 구한다
// 내가 선택힌 원소들의 합을 구해본다
// 상대편은 내가 구한 거에 전체를 뺀다

// 재귀의 초보자는 먼저 if문으로 재귀를 빠져나올 조건을 건다
function solution([1,3,5,7,10]) {
    let result = 'NO';
    let total = arr.reduce((a,b)=> a+b, 0);
    let n = arr.length;

    function dfs(L,sum) {
        if (L === n){
            if ((total-sum))
        }  else {
            // 사용한다
            dfs(L+1,sum+arr[L])
            // 사용안한다
            dfs(L+1,sum)
        }
    }

    dfs(0,0)
}