// 크루스칼 알고리즘

// https://muhly.tistory.com/124
// 가장 적은 비용으로 모든 노드를 연결
// 노드가 사이클을 발생하는지 사이클 포함된 간선은 포함 하지 않는다 => 합집합 찾기
// 연결된 노드 중 작은 값이 부모가 된다

//1,2,3
//1,1,2
function unionFind(n,parent) {

    if (parent[n] === n){
        return n
    }

    return parent[n] = unionFind(parent[n], parent)

}

//start와 end => 시작점의 부모 번호와 도착점의 부모 번호가 같지 않다면 최소 비용으로 한번도 가지 않은 다리를 최소 비용으로 건넜다는 의미가 되기 때문에 answer += costs[i][2]를 더해준다.
//
// 또한, 이미 건넜다는 표시를 위해 parent[start] = end로 다시 갱신해주면 된다.

//
function solution(n, costs) {
    let sortCosts=  costs.sort((a,b) =>  {
       return  a[2] - b[2]
    });

    const parent = Array(n).fill(0);
    for(let i = 0; i < n; i++){
        parent[i] = i;
    }

    console.log(parent,'parent')

    let result = []
     sortCosts.forEach((v, i) => {
        const start = unionFind(sortCosts[i][0], parent);
        const end = unionFind(sortCosts[i][1], parent);

         const cost = costs[i][2];

         if (start !== end) {
             result +=cost;
             parent[start] = end
         }
    })

}


// function solution(n, costs) {
//     // let costsArr = costs.map(v => v[2])
//     // costsArr.sort();
//     //
//     //
//     // costsArr.splice(n-1)
//     // console.log(costsArr,'costsArr');
//     // let answer = costsArr.reduce((previousValue, currentValue, currentIndex, arr) => {
//     //     return previousValue += currentValue
//     //
//     // })
//     //
//     // console.log(answer,'answer')
//     //
//     // return answer;
// }
console.log(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]))


// 다른 사람 풀이


5
6
7
8
9
10
11
12
13
14
15
16
function solution(n, costs) {
    costs.sort((a,b) => a[2] - b[2]);
    let [from, to, answer] = costs.shift();
    let connected = new Set([from, to]);
    while (connected.size < n) {
        let index = costs.findIndex(([from, to]) =>
            connected.has(from) && !connected.has(to)
            || connected.has(to) && !connected.has(from)
        );
        let [[from, to, cost]] = costs.splice(index, 1);
        answer += cost;
        connected.add(from).add(to);
    }
    return answer;
}
