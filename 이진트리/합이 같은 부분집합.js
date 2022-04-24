/*
* 둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주
어진 원래의 집합이 되어야 합니다.
예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이
16으로 같은 경우가 존재하는 것을 알 수 있다
* */

// 모든 합을 구한다
// 내가 선택힌 원소들의 합을 구해본다
// 상대편은 내가 구한 거에 전체를 뺀다

// 재귀의 초보자는 먼저 if문으로 재귀를 빠져나올 조건을 건다
function solution([1,3,5,7,10]) {
    let result = 'NO';
    let flag = 0
    let total = arr.reduce((a,b)=> a+b, 0);
    let n = arr.length;

    function dfs(L,sum) {
        if (flag === 0) return
        if (L === n){
            if ((total-sum) === sum){
                result ="Yes;"
                flag = 1
            }

        }
        // 사용한다
        dfs(L+1,sum+arr[L])
        // 사용안한다
        dfs(L+1,sum)

    }

    dfs(0,0)
}