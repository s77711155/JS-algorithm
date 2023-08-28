function sol(arr, k,m){
    let count = 0
    let sum = 0
    let temp = Array.from({length:k}, ()=>0)
    function dfs(L,s){
        if (L === k){
            console.log(temp,'tttt')
            if (sum%m === 0){
                count +=1
            }
        } else {
            for (let i =0; i<arr.length; i++){
                temp[L] = s
                console.log(temp,L)
                // sol: 헷갈리는점 재귀가 될때 arr의 인덱스가 연속된 인덱스가 아닌 랜덤값일 경우 매개값으로 어떤 인덱스로 넘길수 있는가
                dfs(L+1,arr[i+1])
            }
        }
    }
    function dfs2(L,s, sum){
        if (L===k){
            if (sum%m===0) return
        }else {
            for (let i=s; i<arr.length; i++){
                temp[L] = arr[i]
                dfs2(L+1,i+1, sum+arr[i])
            }
        }
    }

    //dfs(0,arr[0])

}

// N개의 정수중 K개 뽑아서 그 합이   m의 배수가 몇개 잇는지
let arr = [2,4,5,8,12]
console.log(sol(arr, 3,6))