/*
Array.from(
  {length: 20}, // 배열
  () => Array(10).fill(0) // 각각의 배열에 적용할 함수
);

=>(20) [Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]


ECMAScript 6부터 추가된 Array.from() 메소드는 다음 객체들을 배열처럼 변환시켜 줍니다.

*/

/*
너비우선탐색
bfs
큐를 사용한다

*/

// function solution(n) {
//   var answer = [];
//   let len = Math.floor(n/2)
//   let arr = Array.from({length : len},
//     ()=>      (
//       Array(n+(n-1)).fill(0);
//       n-=2
//     )
   
    
   
//   )
//   console.log(len,'len', arr )

//  // return answer;
// }

// console.log(solution(6))


// function makeEmptyArr(n){
//   let arr = [];
//   for(let i = 0; i < n; i++){
//       arr.push(Array.from ({length: i+1}, () => 0));
//   }
//   return arr
// }

// function solution(n) {
//   let num = 1;
//   let x = 0;
//   let y = -1; 
//   let arr = makeEmptyArr(n)
//   for(let i = 0; i < n; i++){
//       let type = i % 3;
//       let k = i;
//       switch(type){
//           case 0 :
//               while(k < n){
//                   arr[y+1][x] = num;
//                   k++;
//                   y++;
//                   num++;
//               }
//               break;
//           case 1 : 
//               while(k < n){
//                   arr[y][x+1] = num;
//                   k++;
//                   x++;
//                   num++;
//               }
//               break;
//           case 2 : 
//               while(k < n){
//                   arr[y-1][x-1] = num;
//                   k++;
//                   y--;
//                   x--;
//                   num++;
//               }
//               break;
//           default: 
//               break;
//       }
  
//   }
//   return arr.reduce((result, row)=>{return [...result, ...row]}, [])



// function solution(n) {
//   const answer = [];
//   const totalNumber = (n * (n + 1)) / 2;
//   const dx = [1, 0, -1];
//   const dy = [0, 1, -1];
//   let x = 0;
//   let y = 0;
//   const matrix = Array.from(new Array(n), () => new Array(n).fill(0));
//   let direction = 0;

//   for (let i = 1; i <= totalNumber; i++) {
//     matrix[x][y] = i;
//     const nx = x + dx[direction];
//     const ny = y + dy[direction];
//     if (nx >= n || ny >= n || nx < 0 || ny < 0 || matrix[nx][ny] !== 0) {
//       direction = (direction + 1) % 3;
//       x += dx[direction];
//       y += dy[direction];
//       continue;
//     }
//     x = nx;
//     y = ny;
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       answer.push(matrix[i][j]);
//     }
//   }
//   return answer;
// }




// function solution(n) {
//   let a = Array(n).fill().map((_, i) => Array(i + 1).fill())
//   let row = -1
//   let col = 0
//   let fill = 0
//   for (let i = n; i > 0; i -= 3) {
//     a[++row][col] = ++fill
//     for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill
//     for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill
//     for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill
//   }
//   return a.flat()
// }



function solution(n) {

    let a = Array(n).fill().map((v, i) => Array(i + 1).fill())

    console.log(a,n)
    let row = -1
    let col = 0
    let fill = 0
    for (let i = n; i > 0; i -= 3) {
      a[++row][col] = ++fill
      for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill
      for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill
      for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill
    }
   return a.flat()
  }

  console.log(solution(6))