function sol(mk, arr){
    let answer = Number.MAX_SAFE_INTEGER; // 큰수
    let n = arr.length;
    function DFS(L, sum){
        if (sum >m) return
        if (L>=answer) return;
        if (sum === m){
            console.log(L, answer)
            answer = Math.min(answer,L)
        }else {
            for (let i=0; i<0; i++){
                DFS(L+1, sum+arr[i])
            }

        }
    }
    DFS(0,0)
    return answer

}

let arr =[1,2,5]
// 15는 거스름돈
console.log(sol(15, arr))