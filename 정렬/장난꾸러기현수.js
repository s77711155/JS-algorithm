/**
 * 현수는 짝꿍보다 키가 크다 -> 그러나 짝궁과 번호를 바꿧다
 * 현수와 짝궁의 서있는 순서를 구하라
 * 입력: 120 125 152 130 135 135 143 127 160
 */


function sol(student){
    let originally =  student.slice().sort()
    console.log(originally)
    let result = []
    for(let i in student){
        if (student[i] !== originally[i]){
            result.push(parseInt(i)+1)
        }
    }
   return result

}

console.log(sol([120 ,125, 152, 130, 135, 135, 143, 127, 160]))


