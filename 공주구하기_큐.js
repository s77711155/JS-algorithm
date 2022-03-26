function f(n,x) {
    // for 문으로 배열 만들기
    let prince = []
    for (let i=0; i<n;i++){
        prince[i] = i+1
    }

    console.log(prince)
    // true 면 돈다 계속
    while (prince.length !== 1){
       for (let i=0; i<prince.length; i++){
           console.log(i,x-1,'i?')
           if (i === x-1){
               prince.splice(i,1)
               console.log(prince,'?')
                break
           }else  {
               // let shift = prince.shift();
               // console.log(shift,'sssss')
               // prince.push(shift)
           }
       }
    }

}

console.log(f(8,3))

let n = 8;
let k = 3;

console.log(solution(n, k));

function solution(n, k) {
    let princes = Array.from({ length: n }, (value, idx) => idx + 1);
    let cnt = 0;

    while (princes.length >= 2) {
        if (cnt === k - 1) princes.splice(0, 1), (cnt = 0);
        else princes.push(princes.shift()), cnt++;
    }

    return +princes;
}