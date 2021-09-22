// 다른이 풀이
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;
//
//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         console.log('numbers[i] :',numbers[i], 'arr: ',arr)
//         answer = arr.join(i);
//     }
//
//     return Number(answer);
// }
// solution("1zerotwozero3")

function solution(s) {
    let charSet = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }

    for(let [key, value] of Object.entries(charSet)) {
        let re = new RegExp(`${key}`,"g");
        s = s.replace(re, value);
    }
    return parseInt(s);
}
//
//
// // 내풀이
//
// function solution(s) {
//     const card = {
//         0: 'zero',
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine',
//     }
//
//     let text= ''
//     let result =''
//
//
//     for(let str of s) {
//         text += str
//
//         for(let key in card){
//             if([card[key]].includes(text)) {
//                 result += key;
//                 text = '';
//                 break;
//             }else if([key].includes(text)){
//                 result += key;
//                 text = '';
//                 break;
//             }
//
//         }
//     }
//     console.log(result)
//     return parseInt(result,10);
// }