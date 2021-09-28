//다른 사람 풀이


function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

function solution(numbers) {
    let cnt = 0;
    for(let i=0; i<10; i++){
        if(!(numbers.includes(i))) cnt+= i
    }
    return cnt

}

function solution(numbers) {
    var answer = -1;

    answer = 45 - numbers.reduce((acc, curr) => acc + curr)
    return answer;
}

// 내풀이
function solution(numbers) {
    let compare = [...Array(10).keys()].slice(1)

    // [1,2,3,4,5,6,,7,8,9] [5, 8, 4, 0, 6, 7, 9]
    numbers.forEach((v)=> {
        let i =  compare.indexOf(v);
        // copmare에 numver 가 들어 잇다면
        if(i>-1){
            compare.splice(i,1)
        }
    })
    let result = compare.reduce((a,c) => a +c)
    console.log(compare)
    return result

