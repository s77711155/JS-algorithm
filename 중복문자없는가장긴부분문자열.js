// function sol(s) {
// //    let sArr = s.split('');
// //    let word = [];
// //    let wordLength = 0;
// //    for (let i in sArr){
// //        if(!word.includes(sArr[i])){
// //            word.push(sArr[i]);
// //             console.log(word,'word')
// //             console.log(sArr[Number(i)+1],word.includes(sArr[Number(i)+1]),'word.includes(sArr[Number(i)+1])')
// //            if(Number(i) === sArr.length - 1) return word.length;
// //            if (word.includes(sArr[Number(i)+1])) {
// //                console.log(sArr[i], '포함')
// //                wordLength = wordLength < word.length ? word.length :wordLength ;
// //                word = [];
// //            }
// //
// //        }
// //    }
// //    return wordLength;
// // }
/*
slice(start[, end]) end: 추출을 종료할 기준 인덱스. (end를 제외하고 그 전까지의 요소만 추출한다.)
splice(start[, deleteCount[, item1[, item2[, ...]]]])

출처: https://im-developer.tistory.com/103 [Code Playground]
 */
function getLengthOfStr(s) {
    let strArr = [];
    let prevStrArr = [];
    for (let i = 0; i < s.length; i++) {
        let ss = s.slice(i, i + 1); // 현재 i번째를 복사
        // 0, 1
        //1,2
        //2.3
        //dvdf
        console.log(ss,'ss')
        for (let j = 0; j < strArr.length; j++) {
            if (ss === strArr[j]) { // 현재 i가 기존에 넣은 배열에 들어 잇다면 중복되므로
                if (prevStrArr.length < strArr.length) { //0 < 3 이므로 prev에 복사해준다, 최대를 찾기 위해
                    prevStrArr = strArr.slice();
                }
                strArr = strArr.splice(j + 1, strArr.length);
                console.log(strArr.splice(j + 1, strArr.length),'strArr.splice(j + 1, strArr.length);')
                break;
            }
            console.log('???')
        }
        strArr.push(ss);
        console.log(strArr,'strArr')
    }

    return Math.max(strArr.length, prevStrArr.length);
}


//input string
const src = 'thequickbrownfoxjumpsoveralazydog';
//iterate over the string characters and reduce that
//to object where property 'start' stores the beginning
//of the last non-repetitive substring and the property
//'len' would hold the length of the longest such subsstring
const longestUniqueSub = str => [...str].reduce((res, char, index, src) => {
    //find duplicating characters starting from the beginning of the current
    //unique-character substring up until the current character index
    const dupIndex = src.slice(0,index).indexOf(char, res.start + 1);
    //if match is found
    if (dupIndex > -1) {
        //get the length of the current unique substring
        const len = index - res.start - 1;
        //if that substring appears to be the longest, store that
        if(res.len < len) res.len = len;
        //start new unique-character substring
        res.start = dupIndex + 1;
    }
    return res;
}, {start: -1, len: 1}).len;

// console.log(longestUniqueSub(src));
console.log(getLengthOfStr('abcabcdefabc'));