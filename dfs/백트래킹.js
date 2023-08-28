// 1. N과 M개의 수만큼(중복없이 수열)
// 1,2 !== 2,1을 같다고 보지 않는 문제
function sol(n,m){
    let check = Array.from({length:n},()=>0)
    let tmp =[]
    let result = []
    function dfs(L){
        if (L===m){
            result.push(tmp.slice())
            return
        } else {
            for (let i =0; i<=n; i++ ){
                if (check[i]===0){
                    check[i] = 1;
                    tmp[L] =i+1
                    dfs(L+1)
                    check[i] = 0;
                }
            }
        }
    }

    dfs(0)
    console.log(result)

}


// 조합 구하기

console.log(sol(4,2))