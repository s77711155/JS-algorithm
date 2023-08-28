// 원형테이블
function sol(n,k){
     let q = [1,2,3,4,5]
    let idx = 0
    // 2는 남겨야하는 반찬수와 동이하게
    while (q.length>2){
         // 전체 길이보다 클때
         if(idx > q.length-1){
             // 길이가 5인데 idx 8이면 8-5 해주면 인덱스가 앞으로 돌아가도록 3이됨
            idx =  idx - q.length
         }
         q.splice(idx,1)
        idx += K;
         idx -=1

    }
}

// 순회
function rotate(){

}