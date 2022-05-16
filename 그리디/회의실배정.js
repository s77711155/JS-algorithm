function f(mt) {
    let count = 0;
    let end = 0
    // 정렬먼저
    mt.sort((a,b)=>{
        if (a[1] === b[1]) return a[0]-b[0]
        else return a[1]-b[1]
    })
    console.log(mt,mt)

    for (let time of mt){
        if (time[0]>= end){
            count++;
            end=time[1];


        }
    }

    return count
}
let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(f(arr))