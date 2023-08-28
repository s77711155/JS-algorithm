/*
* 이진트리
* 백트래킹
* 깊이 탐색
* 스
* 재귀
* 부분집합
* 순열에서는 1,2와 2,1은 다르나
* 조합에서는 같음 주의
* */


/*
* 인접 행렬
*: 체크배열이 필요하다 -> 방문노드 체크 -> 갈수 있는 노드 체크(인접행렬뒤져봐서 가능하면 재귀  )
* */

// 조합 구슬 뿁기 4개의 구슬중 2개 뽑기
function sol(n,m){
    let answer = []
    // 뽑은 구슬 담기
    let tmp = Array.from({length:m},()=>0)
    // 레벨과 스타트 중복되지 않도록
    function DFS(L, s){
        if (L ===m){
            console.log(tmp)
        }else {
            for (let i=s; i<=n;i++){
                tmp[L]=i;
                DFS(L+1, i+1)
            }
        }
    }
    DFS(0,1)
}

console.log(sol(4,2))