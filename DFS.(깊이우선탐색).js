/*
깊이 우선 탐색 - 스택
한 정점에서 한방향으로 가면서 검사
스택은 늦게들어온애를
큐는 젤먼저들어온애를

DFS와 BFS는 모두 노드 수+간선 수만큼의 복잡도를 지닌다. 즉, O(n)
*/
let graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}


 function sol(graph,start){
    let visited = [];
    let stack = [start];
    while(stack.length!==0){
        //스택에 맨 아래에 잇는 값을 검사한다
        let n = stack.pop();
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
    J: ["I"],
  };
  
  // (graph, 시작 정점)
  const dfs = (graph, startNode) => {
    let needVisitStack = []; // 탐색을 해야 할 노드들
    let visitedQueue = []; // 탐색을 마친 노드들
  
    needVisitStack.push(startNode);
  
    // 탐색을 해야 할 노드가 남아 있다면
    while (needVisitStack.length !== 0) {
      const node = needVisitStack.pop();
      if (!visitedQueue.includes(node)) {
        visitedQueue.push(node);
        needVisitStack = [...needVisitStack, ...graph[node]];
      }
    }
  
    return visitedQueue;
  };
  
  console.log(dfs(graph, "A"));
  
  // ["A", "C", "I", "J", "H", "G", "B", "D", "F", "E"]