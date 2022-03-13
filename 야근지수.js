function solution(n, works) {
    whule
    //console.log(Math.pow(2,3))

    let reduce = (time, arr) => {
        for(let i=0; i<= arr.length-1; i++){
            if(arr[i] === 0) continue;
            if(time === 0) return arr;
            arr[i] = arr[i] -1
            time -= 1
        }
        let t = time
        return time !== 0 ? reduce(t, arr) :  arr

        //reduce(time, arr)
    }

    let result = reduce(n, works);
    console.log(result,'result')

}

function solution(n, works) {
    let sort = works.sort((a,b) => a-b);
    let last = sort.length - 1
    let max  = sort[last]
    while(n){
        for(let i=0; i<= works.length-1; i++){
            if(max === works[i]){
                works[i] -= works[i] === 0 ? 0 : 1
                n -= 1
            }
            if(!n) break;
        }
        max -=1;
        if(!max) break;
    }
    console.log(works,)

    let result = works.reduce((acc,cur) => acc + Math.pow(cur,2),0)
    Nan
    console.log(result,'result')
    return result
}