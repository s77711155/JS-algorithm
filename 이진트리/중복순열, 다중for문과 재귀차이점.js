// 왜 다중 FOR 문 안쓰고 재귀를 쓰니냐
// => 레벨만큼 FOR 문이 늘어난다
function f(n,m) {
    let temp = Array.from({length:m}, ()=>0);
    function dfs(L) {
        if (L===m){
            console.log(temp)
            return;
        }
        else {
            for (let i=1; i<=n; i++){
                temp[L] = i
                dfs(L+1)
            }
        }
    }
    dfs(0)
}

// 중복을 막을려면 체크 배열로 체크만 해주면됨

console.log(f(5,3))