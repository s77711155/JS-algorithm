function solution(n, times) {
    times.sort((a, b) => a-b)
    let right = times[times.length -1] * n
    let left = 0;
    let mid = Math.floor((left+right) / 2);
    let min = right
    while(left<=right){
        let count= times.reduce((acc, el) => {
            return acc+= Math.floor(mid/el)
        }, 0)
        //14>6
        if(count >=n) {
            min = Math.min(min, mid);
            right = mid -1
        }else {
            left = mid+1

        }
        mid = Math.floor((left+right) / 2);
    }
    return min;
}