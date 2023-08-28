function sol(arr){
    // 상화좌우 좌표  top left bottom
    // 0만 갈수 있으며 갔던 길은 1로 변경 백하면 다시 0으로 변경
    let dx = [ -1,0, 1,0]
    let dy = [0,1,0,-1]
    let k = dx.length;
    let result =0
    // sol: 무엇을 넘길것인가 매계변수로: 좌표!!!!!!!
    function dfs(x,y){
        if (x === arr.length -1 && y === arr[0].length-1){
            result +=1
        }else {
            // 상하 좌우가 갈수 있는 길이지 확인
            for (let i =0; i<k; i++){
                let nx = x +dx[i]
                let ny = y + dy[i]

                // 움직일 조건
                if (nx >= 0 && ny >= 0 &&
                    nx<= arr.length -1 &&
                    ny<= arr[0].length -1 &&
                    arr[nx][ny] === 0){

                    arr[nx][ny] = 1
                    dfs(nx,ny)
                    arr[nx][ny] = 0
                }
            }
        }
    }
    arr[0][0] =1
    dfs(0,0)
}
let arr=[
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]];
console.log(sol(arr))