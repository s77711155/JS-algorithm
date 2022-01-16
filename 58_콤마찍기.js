// 재귀함수 사용, 혹은 반복문 사용
// 내장 객체 사용 toLocaleString()
function comma(s) {
    if (s.length<=3){
        return s
    } else {
        // 끝의 세자리는 분리 시켜
        return comma(s.slice(0, s.length -3)) + ',' + s.slice(s.length - 3)
    }
}

// 123, 456

console.log(comma('100000000000000000000000'))