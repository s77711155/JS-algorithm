//[LeetCode Medium] Merge Intervals JavaScript
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
        if (previous[1] >= intervals[i][0]) {
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];
        } else {
            result.push(previous);
            previous = intervals[i];
        }
    }

    result.push(previous);

    return result;
};