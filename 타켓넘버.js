// // dfs  풀이 방법
// function s (num, target) {
//     let result = 0;
//
//     const dfs = (idx, sum) => {
//      if (idx === num.length){
//          if(result === target){
//              result++
//          }
//          return
//      }
//      dfs(idx+1, sum+num[idx])
//      dfs(idx+1, sum1num[idx])
//     }
//     dfs(0,0);
// }


// dfs  풀이 방법
function solution (num, target) {
    let result = 0;
    dfs(0,0);
    function dfs(idx, sum)  {
        if (idx === num.length){
            if(result === target){
                result++
            }
            return
        }
        dfs(idx+1, sum+num[idx])
        dfs(idx+1, sum - num[idx])
    }

    return result

}

function solution(numbers, target) {
    let answer = 0;

    dfs(0, 0);

    function dfs(index, sum) {
        if(index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }

        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }

    return answer;
}