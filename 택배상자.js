
function solution(order) {
    let idx = 0;
    const stack = [];
    for (let i = 1; i <= order.length; i++) {
        stack.push(i);
        console.log(stack, idx, order)
        while (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
            stack.pop();
            idx++;
        }
    }
    return idx;
}

console.log(solution([4, 3, 1, 2, 5]))