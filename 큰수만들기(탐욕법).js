/*
* 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
* */
//탐욕법
// function solution(number, len) {
// //     let arr = Array.from(String(number));
// //     let result = [];
// //     let cul = (pre, char) => {
// //         for (let i=0;i<char.length; i++){
// //             result.push(pre+ char[i]);
// //             console.log(result,'log')
// //             // ''+1 924
// //             // l9
// //             cul(pre+char[i], char.slice(i + 1))
// //         }
// //     }
// //     cul('',arr);
// //     let newR = result.filter(v => v.length === len);
// //
// //     console.log(newR,'result')
// //
// //
// //
// //     return Math.max.apply(null,newR);
// // }
// //
// // console.log(solution("1924",2))
// function solution(number, len) {
//     let arr = Array.from(String(number));
//     let result = [];
//     let cul = (pre, char) => {
//         for (let i=0;i<char.length; i++){
//             result.push(pre+ char[i]);
//
//             // ''+1 924
//             // l9
//             cul(pre+char[i], char.slice(i + 1))
//         }
//     }
//     cul('',arr);
//     // 20
//     // [10]
//     let newR = result.filter(v => v.length === number.length - len);
//
//
//     return String(Math.max.apply(null,newR));
// }
//
//
// for(){
//     while(l 1234){
//         // 23
//     }
// }

// todo
function solution(number, len) {
    let result = []
    for(let i =0; i<= number.length; i++){
        // 일단 값을 넣고
        let a = number[i];
        let b = number[i+1]
        while (a<b){
            result.shift();
        }
       result.push(number[i])

        // let k= i+1;
        // console.log(result,'처음')
        // if(result[i] < number[k])
        // console.log(result,'ㄹforans')
         if(result.length === number.length-len) break;

    }
    console.log(result)
    return result.join('')
}

console.log(solution("1924",2))