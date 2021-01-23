/*
    데이터 처리 전문가가 되고 싶은 어피치는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 
    최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 
    문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 
    더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
    간단한 예로 aabbaccc의 경우 2a2ba3c(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 
    같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 
    예를 들면, abcabcdede와 같은 문자열은 전혀 압축되지 않습니다. 어피치는 이러한 단점을 해결하기 위
    해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

    예를 들어, ababcdcdababcdcd의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 
    2개 단위로 잘라서 압축한다면 2ab2cd2ab2cd로 표현할 수 있습니다. 다른 방법으로 8개 
    단위로 잘라서 압축한다면 2ababcdcd로 표현할 수 있으며, 이때가 가장 짧게 압축하여 
    표현할 수 있는 방법입니다.

    다른 예로, abcabcdede와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 abcabc2de가 
    되지만, 3개 단위로 자른다면 2abcdede가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다.
    이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

    압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 
    문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(s) {
    let answer = [];

    // 첫 글자를 subString 으로 빼기위해서 1로 둔다 && 문자열의 /2 을 순회한다 /2 된 수보다 최대 반복이 없으니깐
    for(let i=1; i<=s.length/2; i =+1){
        // 반복문 돌때마다 나온 값을 최소 길이를 구하기 위해 담아준다.
        let comArr = [];
        let cnt=1;
        // 기준이 될 문자열 뽑기
        let prev = s.substring(0,i)
        comArr[0]=prev

        // 기준이 될 문자열 뒤에 잇는 문자열들을 순회 하기 위해여 j=i 로 해준다. &&  반복할 문자열 갯수를 위해 j=+i)
        for(let j=i, c=0;j<=s.length;j=+i){
            let now = s.substring(j,j+i)
            if(prev === now){
                comArr[c] = ++cnt + now
            }else{
                cnt=1;
                comArr[++c] = now
                console.log(c,'c')
                console.log(comArr,'comArr')
            }
          
            prev = now
        }

        answer[i-1] = answer.reduce((total,len)=>(total= len.length),0)
        
    }

}

console.log(solution('abcabcdede'))


// // a b c a b c d e d e
// 0 1 2 3 4 5 6 7 8 9
   //[풀이 계산]                          5
// for (let i = 1; i <= length / 2; i += 1) {  // i=1 // i=2 // i=3// i=4
//     let compArray = [];
//     prevValue = s.substring(0, i);  //pre = a// pre=ab //pre=abc//pre = abca
//     cnt = 1; // i가 돌때마다 초기화
//     compArray[0] = prevValue;  //com = ['a'] com = ['ab']  com = ['abc']

//     for (let j = i, c = 0; j < length; j += i) {  //j=4
//         // 비교 대상의 수만큼 그 후에 잇는 문자열 갯수에 비교
//       let nowValue = s.substring(j, j + i);   //substring(4,4+4)  now=abc now = ded
//       if (nowValue === prevValue) { 
//         compArray[c] = ++cnt + nowValue; //com =[2abc]
//       } else {  // com=['2abc','ded']
//         cnt = 1;
//         compArray[++c] = nowValue;
//       }
//       prevValue = nowValue;
//     }

//     result[i - 1] = compArray.reduce((total, cur) => (total += cur.length), 0);
//     //  반복문에서 나온 값들의 길이를 담아줌 
//     result[]



// const solution = s => {
//     if (s.length === 1) return 1;
//     let length = s.length;
//     let prevValue = "";
//     let cnt = 0;
//     let result = [];
//     for (let i = 1; i <= length / 2; i += 1) {
//       let compArray = [];
//       prevValue = s.substring(0, i);
//       cnt = 1;
//       compArray[0] = prevValue;
//       for (let j = i, c = 0; j < length; j += i) {
//         let nowValue = s.substring(j, j + i);
//         if (nowValue === prevValue) {
//           compArray[c] = ++cnt + nowValue;
//         } else {
//           cnt = 1;
//           compArray[++c] = nowValue;

//           console.log(compArray,'compArray',c,'c')
//         }
//         prevValue = nowValue;
//       }
//       result[i - 1] = compArray.reduce((total, cur) => (total += cur.length), 0);
//     }
//     return result.sort((a, b) => a - b)[0];
//   };

//   console.log(solution('abcabcdede'))