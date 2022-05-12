function solution(n, start, end, roads, traps) {
    let q = [start];
    let visited = [];
    let result = 0;


    let count = 0
    while (count<10){
        let node =q.shift();
        console.log(node,'node===================================')
        if(node===end) break;
        count++

        for(let i =0; i<roads.length; i++) {
            console.log(roads[i][0],node,'roads[i][0]')
            console.log(visited,'visitedvisitedvisitedvisitedvisited[i][0]')
            let time = roads[i][2];
            let trapFlag = false

            if(visited.includes(roads[i][0]))continue
            if (!traps.includes(roads[i][0]))  visited.push(roads[i][0])

            if(traps.includes(roads[i][1])){
                console.log('트랩존')
                trapFlag =true
                if (!q.includes(roads[i][1])){
                    q.push(roads[i][1])
                }

                result += time

                for (let j=0; j<n-1; j++){
                    let startNode = roads[j][0]
                    roads[j][0]= roads[j][1],
                    roads[j][1] = startNode

                    console.log(roads,'roads의 모양')
                }

            }

            // 이어주는 다리
            if (roads[i][0] === node && !trapFlag){
                if (!visited.includes(roads[i][1])){
                    console.log(q,'이어주는 다리 ')
                    q.push(roads[i][1])
                    result += time
                }


            }

        }


    }



    console.log(result,'result')

    return result
}

let n = 4
let start =1
let end = 4
let roads =[[1, 2, 1], [3, 2, 1], [2, 4, 1]]
let traps = [2,3]
console.log(solution(n, start, end, roads, traps))