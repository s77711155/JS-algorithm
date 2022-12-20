/**
 * 캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면 N개의 작업을 처리한 후
 * 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램을 작성하세요.
 *
 * 59
 * 123262357
 */


function sol(size,print,array){
    let result = Array.from({length:size}, ()=>0);
    console.log(result)
    array.forEach(v=> {
        let pos= -1
        for (let i in size) if (v === result[i]) pos = i;
        if (pos === -1){
            result.unshift(v)렬
            // a[i] = a[i-1]
            if (result.length >size) result.pop()
        }else {
            result.splice(pos, 1)
            result.unshift(v)
        }
    })
    console.log(result)
}

let size = 5;
let print = 9;
let array = [1,2,3,2,6,2,3,5,7]
console.log(sol(size,print,array))


//10000 21000 32100 23100 62310 26310 32610 53261 75326