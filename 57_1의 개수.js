// 0~1000의 1이 갯수를 구해라
// 방법 3가지 제공


// 1.
let s = '';
let count = 0
for (let i = 0; i <=100; i++){
    s += i
}

for (let str of s) {
    if (str === '1'){
        count++
    }
}
console.log(count)

// 2. 정규식 사용
let s2 = '' ;
for (let i = 0; i <=100; i++){
    s2 += i
}
let result = s2.match(/1/g).length

// 방법3 소인수 분해(이걸로는 사용 노우)
const obj = {};

for (let i = 0; i<100; i++) {
    let tmp = i;
    while (tmp > 0) {
        // 나머지 값 담는다
        let num = tmp % 10;
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
        tmp = parseInt(tmp/10, 10)
    }
}
