function sol(arr, d){
    let result = 0
    let erase = 0
    let rt = 0
    for (let lt =0; lt<arr.length; lt++){
        while (rt<arr.length){
            if (arr[rt] %2 === 0){
                // 짝수일때 증가
                rt++
            }else {
                // 홀수 일때
                    if (erase === d){
                        // 지운 갯수가 다 지웟다면
                            break
                    }
                    // 지울수 있다면 지우고 카운트 올려주기
                    erase++
                    rt++
            }
        }
        // 딱 카운트수가 다 지워졋다는 소
        result = Math.max(result, rt-lt-erase)
        if (arr[lt])
        // 지운 갯수 감수
        erase--
        console.log(result,'re')
    }

}


//
// for (let rt = x; rt<visited.length; rt++){
//     sum += (visited[rt] -  visited[rt-x])
//     if (max === sum){
//         count++
//     }
//     max = Math.max(max,sum)
// }
let arr = [1,4,3,4,9,2,7,8]
console.log(sol(arr, 3))