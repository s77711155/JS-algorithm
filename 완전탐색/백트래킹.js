// N-Queen
let n =8;
let queens =[] // 현재 체스판에 놓인 퀸의 위치 정보들

function possible( x,y){

}
let cnt =0
function dfs(row){
    if (row ===n) {
        cnt +=1 // row 가 n이 면 퀸 배치 햇으니
    }
    for (let i =0; i<n; i++){
        if (!possible(row, i)) continue; // 현재 행에 존재하느느 열을 하나씩 확인
        queens.push()
    }
}
dfs(0)
console.log(cnt)