
// nCr => 5C3 = 4C2 + 4C3 (5개중 나를 포함하지 않는 4개중 2개를 뽑음, 5개중 나를 포함하지 않는 4개중 3개를 뽑음)
function f(n,r) {
    let answer;
    // 메모제이션해준다 안해줄 경우 이미 계산해준 애들도 또 재귀로 계산해줘야하기 때문에 이차원 배열에 담아준다
    let dy = Array.from(Array.(35), ()=>Array.fill(0));
    function dfs(n,r) {
        if(dy[n][r]>0) return dy[n][r]
        if (n === r || r ===0) return 1
        else  {
            return dy[n][r] =  dfs(n-1, r-1) + dfs(n-1, r)
        }
    }

    answer = dfs(n,r)
}

console.log(f(5,3))