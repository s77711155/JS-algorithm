// https://jellyinghead.tistory.com/14
//즉, 이분 그래프는 어떤 한 정점에서 연결된 모든 다른 정점이 다른 값을 가져야합니다.


// input:    개수 K, 정점의 개수 V, 간선의 개수 E
/*
3 2
1 3
2 3
 */
function f(a,b,c) {
    let node = a[0];
    let startNode = b[0]
    let visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;

}

console.log([3,2],[1,3],[2,3]);