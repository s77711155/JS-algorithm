// 중복을 허락하지 않는다

function sol(arr, m){
    let ch = Array.from({length: arr.length}, ()=> 0)
    let temp = Array.from({length: m}, ()=>0 )
    let answer = []
    function DFS(L) {
        if (L === m){
            answer.push(temp.slice())
        }else {
            for (let i =0; i< arr.length; i++){
                if (ch[i] === 0){
                    ch[i] = 1;
                    temp[L] = arr[i]
                    DFS(L+1); // 다음 원소
                    // 백
                    ch[L] = 0
                }
            }
        }
    }
    DFS(0)

}
let arr =[3,6,9]
console.log(sol(arr,2))