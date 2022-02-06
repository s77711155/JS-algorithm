let array  = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
let rule =  "ABD";

// 인덱스로 비교한다 인덱스가 들어잇는갑보다 작아지면 불가능
// 순회는 word로 돈다
const checkOder = (word, rule) => {
    // 규칙의 인덱스 0을 먼저 담는다
    let idx = rule.indexOf(rule[0])

    //word 순회
    for(let str of word) {
        if (rule.includes(str)){
            if (idx > rule.indexOf(str)){
                return '불가능'
            }
            idx = rule.indexOf(str)
        }
    }
    return '가능'
}
function sol(array, rule) {
    let result = [];
    for (let word of array){
        result.push(checkOder(word, rule))
    }

    return result
}


console.log(sol(array, rule))