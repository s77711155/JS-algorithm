/*
깊이 우선 탐색 - 스택
한 정점에서 한방향으로 가면서 검사
스택은 늦게들어온애를
큐는 젤먼저들어온애를
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