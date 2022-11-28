/*
* 시작 위치 1,1
* 미로의 탈출 n,m
* 괴물이 있는 부분 0/ 없는 부분 1
* 최소 칸을 갯수
* */

function sol(arr){
    let n = arr.length ;
    let m = arr[0].length;
    console.log(n,m)
    let level = 1
    let queue = []
    let dx = [-1,1, 0,0 ]
    let dy = [0,0,-1,1]
    //  Array.from({ length: n }, (value, idx) => idx + 1);
    let ch = Array.from({length:n},() => Array(m).fill(0))
    queue.push([1,1])
    ch[1][1] = 1
    //ch[0][0] =1

    console.log(ch,'board')

    while (queue.length){
        let [x,y] =queue.shift()
        console.log(queue,'q')
        for (let i=0; i<dy.length; i++){
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (nx<0 || ny<0) continue
            console.log(n,nx,'::::::',m,ny)
            if (nx === n && ny === m) {
                let a = ch[x][y]
                console.log(a+1,"a::::::::::::::::::::::")
                ch[nx][ny] = a + 1
                break
            }
            if (nx<n && ny<m && ch[nx][ny] === 0 && arr[nx][ny] === 1){
                console.log('둥둥장')
                console.log(nx,ny,'xy')
                ch[nx][ny] = ch[x][y] + 1
                queue.push([nx,ny])

            }
        }

        console.log(x,y)

    }

    console.log(ch,'ch',n,m)
    console.log(ch[n-1][m-1],'정답')
    return level


}

let arr = [[1,0,1,0,1,0], [1,1,1,1,1,1], [0,0,0,0,0,1], [1,1,1,1,1,1], [1,1,1,1,1,1]]
console.log(sol(arr))