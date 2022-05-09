// 4) BFS 시작
// 5) 이동할 수 있는 네 방향을 체크하기 위해 4번 루프를 돌린다.
// 6 ) 이동하게 될 x, y 값이 0보다 커야하고 맵 보다는 작아야 한다.
// 7) 해당 위치의 맵이 이동할 수 있는 상황이고 해당 위치를 처음 방문한 경우
function f(map){
    let dx =[0,0,1,-1]
    let dy =[1,-1,0,0]
    let queue = [[0,0]]; // 시작점 넣기
    let row = map.length;
    let col = map[0].length
    let visit = []

    while(queue.length){
        // 배열의 맨 앞에 값을 제거한다.
        let [x,y] = queue.shift()
        // 이동할 수 있는 네 방향을 체크하기 위해 4번 루프를 돌린다.
        for (let i =0; i<4;i++){
            let nx = x+ dx[i]
            let ny = y + dy[i]
                // 이동하게 될 x, y 값이 0보다 커야하고 맵 보다는 작아야 한다.
            if (nx>=0 && ny>=0 && ny<row && nx<col){
                // 해당 위치의 맵이 이동할 수 있는 상황이고 해당 위치를 처음 방문한 경우
                if (map[ny][nx] === 1 && visit[ny][nx] === 1){
                    visit[ny][nx] = 1;
                    queue.push([ny,nx]);
                }
            }
        }
    }
}
