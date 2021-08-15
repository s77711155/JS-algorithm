//[LeetCode Medium] Merge Intervals JavaScript
/*
 input : [[1, 3], [2, 4], [5, 8]]
 output: [[1, 4], [5, 8]]
 입력: 간격 = [[1,3],[2,6],[8,10],[15,18]]
출력: [[1,6],[8,10],[15,18]]
설명: 구간 [1,3]과 [2,6]이 겹치므로 [1,6]으로 병합합니다.


*/
function sol (arr) {

    let newArr =
        arr.sort((a,b) => a[0]-b[0]).map(v =>{
        let s = v[0];
        let e = v[1];
        let mid = [];
        for (let i = s; i<=e; i++){
            mid.push(i)
        }
        return mid
    });
    console.log(newArr,'newArr')
}

//console.log(merge([[1,3],[8,10],[15,18],[2,6]]))
console.log(sol([[1,3],[8,10],[15,18],[2,6]]));
// 1 2 3
// 2 3 4 5 6
// 8 9 10
// 15 16 17 18
[t,t,t,f,f,t,t,,0,0,0,0,0,0,0,0,0,0,0]
    [ [ 1, 2, 3 ], [ 2, 3, 4, 5, 6 ], [ 8, 9, 10 ], [ 15, 16, 17, 18 ] ].for(

)


const merge = intervals => {
    if (intervals.length < 2) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let previous = intervals[0];

    for (let i = 1; i < intervals.length; i += 1) {
        // previous = [1,3],intervals[1] = [2,6] 비교
        // previous[1] = 3 , intervals[1][0] = 2
        if (previous[1] >= intervals[i][0]) {
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];// 머지 시켜준다 그리고 다시 그다음 for문을 위해 previouse에 담아준다
        } else {
            result.push(previous);
            previous = intervals[i];
        }
    }

    result.push(previous);

    return result;
};