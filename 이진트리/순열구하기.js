function f(arr, n) {
    // n자리 수만 출력하기위해 임시 변수
    let temp = Array.from({length:n},()=>0);
    // 중복을 막기위해
    let check = Array.from({length: arr.length}, ()=>0)
    function dfs(L) {
        if (n === L){
            console.log(temp)
        }else {
            for (let i=0; i<arr.length; i++){
                if (check[i] === 0){
                    check[i] =1;
                    temp[L] = arr[i];
                    console.log(temp)
                    dfs(L+1)

                    // 백을 할때는 다시 체크를 풀어줘야함
                    check[i]=0
                }
            }
        }
    }

    dfs(0)
}

console.log(f([3,6,9],2))