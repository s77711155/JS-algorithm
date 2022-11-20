function sol(frame){
   // 좌우 상하 a[y][x]
    let dx = [-1,1, 0,0 ]
    let dy = [0,0,-1,1]
    let count = 0
    // // 좌우 상하가 1일때 카운트를 올린다
    //
    // const dfs = (x,y) => {
    //     for (let v in frame){
    //         console.log(x,y,'xxxxxxxxxx')
    //         console.log(frame[v],'vvv')
    //     }이

    // 왓던 길은 1로 변경
    function dfs(x,y) {
        // 재귀를 멈출 조건문, ** 1을 만나면 얼음을 얼릴수 잇으므로 조건에 추가!
        /*
        * 특정한 지점의 주변 상하좌우ㅡㄹ 살펴본다 주변 지점이 0이면서 아직 방문하지 않은 지점이 있다면 해당 지점을 방문
        * 방문한 지점에서 다시 상하좌우를 살펴봄 방문ㄴ을 진핼하는 과정을 반복하면 연결된 모든 지점 방문 할수 잇다
        * */
        if(x===1 && y===1){
            count++
            return
        }else {
            for(let k =0; k<4; k++){
                // 주어진 행렬의 각각 상하좌우를 살피기 위해 상하좌우 인덱스 값 구하기
                let nx = x + dx[k]
                let ny = y +dy[k]
                // 뻗어나가야함
                if (nx>=0 && nx<=frame[0].length && ny>=0 && ny<=frame.length){
                    if (frame[nx][ny] === 0) {
                        // 방문 처리 해줘야함
                        frame[nx][ny] === 1
                        dfs(nx,ny)
                        // 다시 백하니깐 다시 0으로
                        frame[nx][ny] === 0
                    }
                }
            }
        }
    }

    frame[0][0] =1
    dfs(0,0)
    console.log(frame,'ff')
    return count



}
let frame = [[0,0,1,1,0], [0,0,0,1,1],[1,1,1,1,1],[0,0,0,0,0]]
console.log(sol(frame))