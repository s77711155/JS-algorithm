/*
너비 우선 탐색 - 큐
한 정점에서 가까운 정점부터 방문
스택은 늦게들어온애를
큐는 젤먼저들어온애를


대표적인 그래프 탐색 알고리즘
너비 우선 탐색(Breadth First Search): 정점들과 같은 레벨에 있는 노드들(형제 노드들)을 먼저 탐색하는 방식
두 개의 큐를 사용한다.
root와 가까운 node들부터 찾기 때문에 최단거리를 탐색할 때 유용하다.
queue에 각 노드의 정보를 기록해야 하기 때문에 메모리를 많이 잡아 먹는다.
찾고자 하는 target node가 root node와 가까이 있다고 예상될 경우 BFS를 사용한다.
지도 어플에서 특정 위치까지의 최단거리 안내, 혹은 소셜미디어에서 친구 추천 등에 이용된다.
깊이 우선 탐색(Depth First Search): 정점의 자식들을 먼저 탐색하는 방식
한 개의 큐와 한 개의 스택을 사용한다.

BFS보다 속도가 느릴 수 있다.
미로 게임 등에서 경로가 존재하는지를 판별할 때 유용하다.
*/
let graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}


 function sol(graph,start){
    let visited = [];
    let que = [start];
    while(que.length!==0){
        // 큐의 맨 위에 잇는 애를 꺼내준다
        let n = que.shite();
        // 이미 방문한 노드라면 다시 visited 에 넣어줄 필요없다
        if(!visited.includes(n)){
            visited.push(n);
            // n의 자식 노드를 탐색한다
            let sub = graph[n];
            for(let i of sub){
                visited.push(i)
            }
        }
    }
 }

 console.log(sol(graph,'E')


 const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
  };
  
  const bfs = (graph, startNode) => {
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
  };
  
  console.log(bfs(graph, "A"));
  // ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]