 // 레벨 탐색
 // 상태 트리
 let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
 let dy=[0, 1, 1, 1, 0, -1, -1, -1];
 // 어떤 상태의 출발 -> 도착 지점으로 가는데 최단 거리(간선 한번으로 갈수 잇는 곳으로 도착지점이 잇는가)
function sol(s, e){
    let queue = []
    let check = Array.from({length: 10001}, ()=>0)
    let dis = Array.from({length: 10001},()=>0)
    queue.push(s)
    check[s] = 1
    dis[s] = 0
    console.log(check)
    while (queue.length){
        let x = queue.shift()
        for (let nx of [ x-1, x+1, x+5]){
            if(nx === e){
                return dis[x] +1
            }
            if (check[nx] ===0){
                check[nx] =1
                queue.push(nx)
                dis[nx] = dis[x] +1
            }
        }
    }
}

console.log(sol(5,14))