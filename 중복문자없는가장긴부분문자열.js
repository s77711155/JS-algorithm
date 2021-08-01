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

function getLengthOfStr(s) {
    let strArr = [];
    let prevStrArr = [];
    for (let i = 0; i < s.length; i++) {
        let ss = s.slice(i, i+1);
        for (let j = 0; j < strArr.length; j++) {
            if (ss === strArr[j]) {
                if (prevStrArr.length < strArr.length) {
                    prevStrArr = strArr.slice();
                }
                strArr = strArr.splice(j+1, strArr.length);
                break;
            }
        }
        strArr.push(ss);
    }

    return Math.max(strArr.length, prevStrArr.length);
console.log(sol('dvdf'));