function solution(k, tangerine) {
    const obj = {};
    tangerine.forEach((n) => {
        obj[n] = ++obj[n] || 1;
    });
    const kind = Object.values(obj).sort((a, b) => b - a);
    // kind = [2, 2, 2, 1, 1]

    let sum = 0;
    let answer = 0;
    for (let num of kind) {
        answer++;
        sum += num;
        if (sum >= k) break;
    }

    return answer;
}

// 남풀이
function solution(k, tangerine) {
    let answer = 0;
    const tDict = {};
    tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);
    const tArr = Object.values(tDict).sort((a, b) => b - a);
    for (const t of tArr) {
        answer++;
        if (k > t) k -= t;
        else break;
    }
    return answer;
}

2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
function solution(k, tangerine) {
    let map = {};

    tangerine.forEach((item)=> map[item] = (map[item] || 0) +1);

    const sortArr = Object.values(map).sort((a,b) => b-a)

    let cnt = 0;
    while(k>0) {
        cnt++;
        k-=sortArr.splice(0,1)[0];
    }

    return cnt;
}