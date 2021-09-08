/*

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

    문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
    첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.


*/

// 내풀이 => 케이스 몇개가 틀림...
function solution(s) {
    var answer =[]
    let str = ''
    for(let word of  String(s).split(' ')) {
        if(word.length !== 0) {
            console.log(word.length)

            let arr = word.split('');


           // console.log(arr)
            arr.forEach((v,i) =>{
                str += i % 2 === 0 ?  v.toUpperCase() : v.toLowerCase()
                //console.log(v)
            })     


            str += ' '
            //console.log(str)
        }
    }
      //console.log(str)
        
    return str.trimRight();
}
function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}

console.log("결과 : " + toWeirdCase("try hello world"));
