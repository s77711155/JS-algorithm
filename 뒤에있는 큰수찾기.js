// function solution(numbers) {
//     let dy = []
//     for(let i=0;i<numbers.length;i++){
//         for(let j=i+1;j<numbers.length;j++){
//             if(numbers[i]<numbers[j]){
//                 dy[i] = numbers[j]
//                 break
//             }else{
//                 dy[i] = -1
//             }
//         }
//     }
//     dy.push(-1)
//     return dy
// }
/*
* 주어진 배열 numbers를 뒤에서부터 한 번 순회하면서 스택에 숫자들을 저장하고,
스택의 맨 위에 있는 숫자들과 현재 숫자를 비교하여 뒷 큰수를 찾는다.
뒤에서부터 접근 및 stack사용이 관건
* */
// 시간 초과
// function solution(numbers) {
//
//     const length = numbers.length;
//     const answer = Array.from({length}, () => -1);
//     console.log(answer,'aaaaaa')
//     const stack = [];
//
//     for (let i = length - 1; i >= 0; i--) {
//         while (stack.length !== 0 && numbers[i] >= stack.at(-1)) stack.pop();
//         if (stack.length !== 0) {
//             answer[i] = stack.at(-1);
//         }
//         stack.push(numbers[i]);
//     }
//     return answer;
// }

// function solution(nums) {
//     const dp = new Array(nums.length).fill(-1);
//     const stack = [0];
//     for (let i = 1; i < nums.length; i++) {
//         while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
//             console.log(nums[i],i,'nums[i]')
//             dp[stack.pop()] = nums[i];
//         }
//         stack.push(i);
//     }
//     return dp;
// }
function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let stack = [];
    for(let i =0;i<numbers.length;i++){
        console.log(stack,'IIIII')
        console.log(numbers[stack.at(-1)],'s')
        console.log(numbers[i],'i')
        while(stack&&numbers[stack.at(-1)]<numbers[i]){
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
}
console.log(solution([9, 1, 5, 3, 6, 2]))