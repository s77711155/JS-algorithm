let a= [5,1,3,7]
let b =    [2,2,6,8]
// 정렬과 큐를 이용한 방법방법
// function sol(a,b){
//
//     let count = 0
//     // b를 최소값으로 정렬
//     b.sort((c,d)=> c -d)
//     console.log(b,'b')
//     for (let i in a){
//         let compare  = a[i];
//         if (compare <  b[i]){
//             b.splice(i, 1)
//             console.log('첫빠로')
//             count +=1
//         }else {
//             // b의 그다음
//             for(let j=0; j<b.length;j++){
//                 //console.log(b[j])
//                 if(compare < b[j]){
//                     b.splice(j, 1)
//                     count +=1
//                     console.log(b[j],'zz')
//
//                 }
//             }
//         }
//         console.log(b,'b 배열')
//     }
//     return count
// }
//[2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2]
//console.log(sol(a,b))
//
// function solution(A, B) {
//     A.sort((a, b) => b - a);
//     B.sort((a, b) => b - a);
//
//     let j = 0; // B를 가리키는 인덱스
//     let ans = 0; // 점수
//     console.log(A,B)
//
//     for (let i = 0; i < A.length; i++) { // i는 A를 가리키는 인덱스
//         if (A[i] < B[j]) { // B가 더 클 때
//             ans++; // 점수 증가
//             j++; // B를 가리키는 인덱스 증가
//         }
//         console.log(A[i],j, ans)
//     }
//     //console.log(ans)
//
//     return ans;
// }
function solution(A, B) {
    console.log(A,B)
    var answer = 0;
    let left = 0; //a를 가리키는 인덱스
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    for (let i = 0; i < B.length; i++) {
        if (A[left] < B[i]) {
            left++;
            answer++;
        }
    }
    return answer
}

// 기준점에 따라서 오름차순 내림차순이 달라짐
console.log(so ution(a,b))