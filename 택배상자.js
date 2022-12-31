function solution(order) {
    let answer = 0;
    const stack = [];
    // idx로 기준점을 정해서 움직인다!!!!!!!!
    let idx = 0;

    for (let i = 1; i <= order.length; i++) {
        if (order[idx] !== i) {
            stack.push(i);
        } else {
            idx++;
            answer++;
        }

        while (stack.length !== 0 && stack.at(-1) === order[idx]) {
            stack.pop();
            idx++;
            answer++;
        }
    }

    return answer;
}

// 다른사람 풀이
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
        console.log(stack)
    }
    return idx;
}

console.log(solution([4, 3, 1, 2, 5]))