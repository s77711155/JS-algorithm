// // function solution(str1, str2) {
// //     // str1, str2 각 다중 집합 만들기
// //     let arr1 = multipleSets(str1)
// //     let arr2 = multipleSets(str2)
// //
// //     let same = findSameElement(arr1, arr2).filter((v)=> v.length ===2 )
// //    let add =  findAddElement(arr1, arr2).filter((v)=> v.length ===2 )
// //
// //     console.log(same,'add')
// //     console.log(same.length,add.length,'add')
// //     return  Math.floor((same.length /add.length) *  65536)
// //
// //
// // }
// // // 합집합 만들기 hundefined
// // function findAddElement(arr, arr2){
// //     // 종벅 숫자 잇는지
// //     let map1 = arr.reduce((acc,cur) => {
// //         acc.set(cur, (acc.get(cur) || 0) + 1);
// //         return acc;
// //     }, new Map());
// //
// //     let map2 = arr2.reduce((acc,cur) =>{
// //         acc.set(cur, (acc.get(cur) || 0) + 1)
// //         return acc;
// //     }, new Map());
// //
// //     //{ 'AA' => 3, 'AB' => 1, 'BUNDEFINED' => 1 }
// //     let result = []
// //     for (let m of map1) {
// //         // m이 [ 'FR', 2 ] 배열로 나옴/????
// //         let key = m[0];
// //         // 중복이 잇다면!
// //         if( result.includes(key)) continue;
// //         if(map2.has(key)) {
// //             let repeat = Math.max.apply(null,[m[1],map2.get(key)])
// //             for(let i = 1;  i<= repeat; i ++) {
// //                 result.push(key)
// //             }
// //         }else {
// //             // 중복 없는 거 처리
// //             result.push(key)
// //         }
// //         map2.delete(key)
// //
// //     }
// //
// //     for (let k of map2.keys()) {
// //         //console.log(k.length,'kkk');
// //         if (escape(k).length <3) {
// //             result = [...result,k]
// //         }
// //     }
// //
// //     return result
// //
// // }
// //
// // // 교집합 만들기(
// // function findSameElement(arr, arr2){
// //     // 종벅 숫자 잇는지
// //     let map1 = arr.reduce((acc,cur) => {
// //         acc.set(cur, (acc.get(cur) || 0) + 1);
// //         return acc;
// //     }, new Map());
// //
// //     let map2 = arr2.reduce((acc,cur) =>{
// //         acc.set(cur, (acc.get(cur) || 0) + 1)
// //         return acc;
// //     }, new Map());
// //
// //     //{ 'AA' => 3, 'AB' => 1, 'BUNDEFINED' => 1 }
// //     console.log(map1);
// //     console.log(map2);
// //     // arr, arr2
// //     let result = []
// //
// //     // {FR, RA, AN, NC, CE
// //     for (let c in arr){
// //         let is = arr2.includes(arr[c]);
// //         console.log(is,'is')
// //         if (is) {
// //             let num1 = map1.get(arr[c])
// //             let num2 = map2.get(arr[c])
// //             // 둘다 하나씩만 잇을경우
// //             if (result.includes(arr[c])) continue;
// //
// //             //if(map2.has(key))
// //             if(num1 === 1 && num2 === 1){
// //                 result.push(arr[c])
// //             }else {
// //                 let repeat = Math.min.apply(null,[num1,num2])
// //                 for(let i = 1;  i<= repeat; i ++) {
// //                     result.push(arr[c])
// //                 }
// //             }
// //
// //         }
// //
// //
// //     }
// //     return  result
// // }
// //
// //
// //
// // // 다중집합 만들기
// // function multipleSets(str) {
// //     let result = []
// //     for(let i in str) {
// //         let nextIdx = Number(i) +1
// //         let join = str[i] + str[nextIdx];
// //             join = join.toUpperCase();
// //         let pattern_spc = /[~!@#$%^&*()_+|<>?:{}=]/; // 특수문자
// //         let pattern_num = /[0-9]/;	// 숫자
// //         if(!(pattern_spc.test(join)) && !(pattern_num.test(join)) && join.includes('')) result.push(join)
// //     }
// //     return result
// // }
// // console.log(solution(					"FRANCE", "french"))
// // //console.log(solution(			"handshake", "shake hands"))
//
// let s1 = ["1", "2", "4", "4", "4"]
// let s2 = ["4", "4", "5", "6", "7", "8", "8"]
//
// function solution(str1, str2) {
//     // str1, str2 각 다중 집합 만들기
//     let arr1 = multipleSets(str1)
//     let arr2 = multipleSets(str2)
//
//    // let same = findSameElement(arr1, arr2).filter((v)=> v.length ===2 )
//     //let add =  findAddElement(arr1, arr2).filter((v)=> v.length ===2 )
//     let add =  findAddElement(s1, s2).filter((v)=> v.length ===2 )
//
//   //  console.log(add,'add')
//
//     // let result = Math.floor((same.length /add.length) *  65536)
//     // if(!result) result = 65536
//     //
//     // return  result
//
//
//
// }
// // 합집합 만들기 hundefined
// function findAddElement(arr, arr2){
//     // 종벅 숫자 잇는지
//     let map1 = arr.reduce((acc,cur) =>{
//         acc.set(cur, (acc.get(cur) || 0) + 1);
//         return acc;
//     }, new Map());
//
//     let map2 = arr2.reduce((acc,cur) =>{
//         acc.set(cur, (acc.get(cur) || 0) + 1)
//         return acc;
//     }, new Map());
//
//     //{ 'AA' => 3, 'AB' => 1, 'BUNDEFINED' => 1 }
//     console.log(map2)
//     console.log(map1)
//
//     // 합집합이 [4,4,4,1,2,5,6,7,8,8] 나와야 됩니다.
//     // 만약 [4,4,4,1,2,5,6,7,8] 만 나온다면 무슨 문제인지 감이 오실겁니다
//
//     let result = []
//     for (let m of map1) {
//         // m이 [ 'FR', 2 ] 배열로 나옴/????
//         let key = m[0];
//         console.log(key,'key')
//         // 중복이 잇다면!
//         if( result.includes(key)) continue;
//         if(map2.has(key)) {
//             console.log('?')
//             let repeat = Math.max.apply(null,[m[1],map2.get(key)])
//             console.log(repeat,'repeat')
//             for(let i = 1;  i<= repeat; i ++) {
//                 result.push(key)
//             }
//         }else {
//             // 중복 없는 거 처리
//             result.push(key)
//         }
//         map2.delete(key)
//
//     }
//     console.log(Object.fromEntries(map2),'ddd')
//     console.log(map2.keys(),'ddd')
//
//     for (let key in Object.fromEntries(map2)){
//         for(let i = 1;  i<= Object.fromEntries(map2)[key]; i ++) {
//             result.push(key)
//         }
//     }
//
//
//     console.log(result,'result')
//     return result
//
// }
//
// // 교집합 만들기(
// function findSameElement(arr, arr2){
//     // 종벅 숫자 잇는지
//     let map1 = arr.reduce((acc,cur) => {
//         acc.set(cur, (acc.get(cur) || 0) + 1);
//         return acc;
//     }, new Map());
//
//     let map2 = arr2.reduce((acc,cur) =>{
//         acc.set(cur, (acc.get(cur) || 0) + 1)
//         return acc;
//     }, new Map());
//
//     //{ 'AA' => 3, 'AB' => 1, 'BUNDEFINED' => 1 }
//     console.log(map1);
//     console.log(map2);
//     // arr, arr2
//     let result = []
//
//     // {FR, RA, AN, NC, CE
//     for (let c in arr){
//         let is = arr2.includes(arr[c]);
//         if (is) {
//             let num1 = map1.get(arr[c])
//             let num2 = map2.get(arr[c])
//             // 둘다 하나씩만 잇을경우
//             if (result.includes(arr[c])) continue;
//
//             //if(map2.has(key))
//             if(num1 === 1 && num2 === 1){
//                 result.push(arr[c])
//             }else {
//                 let repeat = Math.min.apply(null,[num1,num2])
//                 for(let i = 1;  i<= repeat; i ++) {
//                     result.push(arr[c])
//                 }
//             }
//
//         }
//
//
//     }
//     return  result
// }
//
//
//
// // 다중집합 만들기
//
//
// function multipleSets(str) {
//     let result = []
//     for(let i in str) {
//         let nextIdx = Number(i) +1
//         let join = str[i] + str[nextIdx];
//         join = join.toUpperCase();
//         let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
//         let pattern_num = /[0-9]/;	// 숫자
//
//         let pattern = /^[a-zA-Z]+$/
//         //re.compile('[A-Z]+'
//         // "".join(re.compile('[A-Z]+').findall(str1[i].upper() + str1[i+1].upper()))
//         //if(pattern.test(join) && join.includes('')) result.push(join)
//         result.push(join)
//     }
//
//     console.log(result)
//     return str
// }
//
//
//
//
// console.log(solution(s1,s2))
//
// // 합집합이 [4,4,4,1,2,5,6,7,8,8] 나와야 됩니다.
// // 만약 [4,4,4,1,2,5,6,7,8] 만 나온다면 무슨 문제인지 감이 오실겁니다




let s1 = ["1", "2", "4", "4", "4"]
let s2 = ["4", "4", "5", "6", "7", "8", "8"]
function solution(str1, str2) {
    // str1, str2 각 다중 집합 만들기
    let arr1 = multipleSets(str1)
    let arr2 = multipleSets(str2)

  //  let same = findSameElement(['a','a','a','b','b'],['a','a','b','b','b']) ||[]
    // let same = findSameElement(arr1, arr2).filter((v)=> v.length ===2 ) || []
     let add =  findAddElement(s1, s2) || []

    console.log(add,'same')


//     console.log(add,'add')

    // let result = Math.floor((same.length /add.length) *  65536)
    // if(!result) result = 65536
    //
    // return  result



}
// 합집합 만들기 hundefined
function findAddElement(arr, arr2){
    console.log(arr,'arrrrrr')

    let map1 = arr.reduce((acc,cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1);
        return acc;
    }, new Map());

    let map2 = arr2.reduce((acc,cur) =>{
        acc.set(cur, (acc.get(cur) || 0) + 1)
        return acc;
    }, new Map());


    let result = []
    for (let m of map1) {
        // m이 [ 'FR', 2 ] 배열로 나옴/????
        let key = m[0];
        console.log(key,'key')
        // 중복이 잇다면!
        if( result.includes(key)) continue;
        if(map2.has(key)) {
            console.log('?')
            let repeat = Math.max.apply(null,[m[1],map2.get(key)])
            console.log(repeat,'repeat')
            for(let i = 1;  i<= repeat; i ++) {
                result.push(key)
            }
        }else {
            // 중복 없는 거 처리
            result.push(key)
        }
        map2.delete(key)

    }

    for (let key in Object.fromEntries(map2)){
        for(let i = 1;  i<= Object.fromEntries(map2)[key]; i ++) {
            result.push(key)
        }
    }


    console.log(result,'result')
    return result

}

// 교집합 만들기(
function findSameElement(arr, arr2){
    // 종벅 숫자 잇는지
    let map1 = arr.reduce((acc,cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1);
        return acc;
    }, new Map());

    let map2 = arr2.reduce((acc,cur) =>{
        acc.set(cur, (acc.get(cur) || 0) + 1)
        return acc;
    }, new Map());

    //{ 'AA' => 3, 'AB' => 1, 'BUNDEFINED' => 1 }
    console.log(map1);
    console.log(map2);
    // arr, arr2
    let result = []

    // {FR, RA, AN, NC, CE
    for (let c in arr){
        let is = arr2.includes(arr[c]);
        if (is) {
            let num1 = map1.get(arr[c])
            let num2 = map2.get(arr[c])
            // 둘다 하나씩만 잇을경우
            if (result.includes(arr[c])) continue;

            //if(map2.has(key))
            if(num1 === 1 && num2 === 1){
                result.push(arr[c])
            }else {
                let repeat = Math.min.apply(null,[num1,num2])
                for(let i = 1;  i<= repeat; i ++) {
                    result.push(arr[c])
                }
            }

        }


    }
    return  result
}



// 다중집합 만들기


function multipleSets(str) {
    let result = []
    for(let i in str) {
        if (Number(i) +1 < str.length) {
            let nextIdx = Number(i) +1
            let join = str[i] + str[nextIdx];
            join = join.toUpperCase();
            let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
            let pattern_num = /[0-9]/;	// 숫자

            let pattern = /^[a-zA-Z]+$/
            //re.compile('[A-Z]+'
            // "".join(re.compile('[A-Z]+').findall(str1[i].upper() + str1[i+1].upper()))
            if(pattern.test(join) && join.includes('')) result.push(join)
            //result.push(join)
        }

    }

    console.log(result)
    return result
}




console.log(solution())

// 합집합이 [4,4,4,1,2,5,6,7,8,8] 나와야 됩니다.
// 만약 [4,4,4,1,2,5,6,7,8] 만 나온다면 무슨 문제인지 감이 오실겁니다






// // // // 예제의 str1 = "aa1+aa2", str2 = "AAAA12"의 경우 대신 str1 = "aa1+aa2", str2 = "AA12"인 경우를 대입해보세요.
// // // // 이 경우 32768이 나와야 합니다.
// //
// // // // str1에서 2개씩 자른 단어가 str2에서 중복되어 카운트 되었을 수 있습니다.
// //
// // function solution(str1, str2) {
// //     // str1, str2 각 다중 집합 만들기
// //     let arr1 = multipleSets(str1)
// //     let arr2 = multipleSets(str2)
// //
// //     console.log(arr1,arr2,'필터')
// //
// //
// //     var a = [] // 중복포함, 교집합 배열 (multi set)
// //     var b = [] // 중복포함, 합집합 배열
// //
// //
// //     for (var i = 0; i < arr2.length; i++) {
// //         if (arr1.indexOf(arr2[i]) >= 0) {
// //             // 같은걸 푸시
// //             a.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
// //             // console.log(a,'a')
// //         }
// //         //console.log(arr1,'arr')
// //         b.push(arr2[i])
// //     }
// //     //console.log(b,'b-------')
// //     console.log(arr1,' 1차 반복끝내구')
// //     for (var i = 0; i < arr1.length; i++) {
// //         console.log(arr1[i],'arr1[i]')
// //         b.push(arr1[i],'fir ans')
// //         // console.log(arr1[i],b,'b111111')
// //     }
// //     //console.log(b,'b111111')
// //
// //
// //     //console.log(add,'add')
// //
// //     // let result = Math.floor((same.length /add.length) *  65536)
// //
// //
// //     //   return  result
// //
// //
// //
// // }
// //
// // console.log(solution("FRANCE", "french"))
// // 합집합 만들기 hundefined
// function findAddElement(arr, arr2){
//     console.log(arr,'arrrrrr')
//
//     let map1 = arr.reduce((acc,cur) => {
//         acc.set(cur, (acc.get(cur) || 0) + 1);
//         return acc;
//     }, new Map());
//
//     let map2 = arr2.reduce((acc,cur) =>{
//         acc.set(cur, (acc.get(cur) || 0) + 1)
//         return acc;
//     }, new Map());
//
//
//     let result = []
//     for (let m of map1) {
//         // m이 [ 'FR', 2 ] 배열로 나옴/????
//         let key = m[0];
//         console.log(key,'key')
//         // 중복이 잇다면!
//         if( result.includes(key)) continue;
//         if(map2.has(key)) {
//             console.log('?')
//             let repeat = Math.max.apply(null,[m[1],map2.get(key)])
//             console.log(repeat,'repeat')
//             for(let i = 1;  i<= repeat; i ++) {
//                 result.push(key)
//             }
//         }else {
//             // 중복 없는 거 처리
//             result.push(key)
//         }
//         map2.delete(key)
//
//     }
//     console.log(Object.fromEntries(map2),'ddd')
//     console.log(map2.keys(),'ddd')
//
//     for (let key in Object.fromEntries(map2)){
//         for(let i = 1;  i<= Object.fromEntries(map2)[key]; i ++) {
//             result.push(key)
//         }
//     }
//
//
//
//     return result.length  === 0 ? ['1'] : result
//
// }
//
// // 교집합 만들기(
// function findSameElement(arr, arr2){
//     // 종벅 숫자 잇는지
//     let map1 = arr.reduce((acc,cur) => {
//         acc.set(cur, (acc.get(cur) || 0) + 1);
//         return acc;
//     }, new Map());
//
//     let map2 = arr2.reduce((acc,cur) =>{
//         acc.set(cur, (acc.get(cur) || 0) + 1)
//         return acc;
//     }, new Map());
//
//     //{ 'AA' => 3, 'AB' => 1, 'BUNDEFINED' => 1 }
//     console.log(map1);
//     console.log(map2);
//     // arr, arr2
//     let result = []
//
//     // {FR, RA, AN, NC, CE
//     for (let c in arr){
//         let is = arr2.includes(arr[c]);
//         if (is) {
//             let num1 = map1.get(arr[c])
//             let num2 = map2.get(arr[c])
//             // 둘다 하나씩만 잇을경우
//             if (result.includes(arr[c])) continue;
//
//             //if(map2.has(key))
//             if(num1 === 1 && num2 === 1){
//                 result.push(arr[c])
//             }else {
//                 let repeat = Math.min.apply(null,[num1,num2])
//                 for(let i = 1;  i<= repeat; i ++) {
//                     result.push(arr[c])
//                 }
//             }
//
//         }
//
//
//     }
//     return  result.length  === 0 ? ['1'] : result
// }
// //
// //
// //
// // // 다중집합 만들기
// //
// //
// // function multipleSets(text) {
// //
// // //     for(let i in str) {
// // //         if (Number(i) +1 < str.length) {
// // //              let nextIdx = Number(i) +1
// // //             let join = str[i] + str[nextIdx];
// // //             join = join.toUpperCase();
// // //             let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
// // //             let pattern_num = /[0-9]/;	// 숫자
// //
// // //             let pattern = /^[a-zA-Z]+$/
// // //             //re.compile('[A-Z]+'
// // //             // "".join(re.compile('[A-Z]+').findall(str1[i].upper() + str1[i+1].upper()))
// // //            if(pattern.test(join) && join.includes('')) result.push(join)
// // //             //result.push(join)
// // //         }
// //
// // //     }
// //
// // //     console.log(result)
// //     //   for (var i = 0; i < str.length - 1; i++) {
// //     //       var tmp = str.slice(i, i + 2)
// //     //       if (tmp.search(/[^A-Z]/g) >= 0) {
// //     //         continue
// //     //       }
// //     //       result.push(tmp)
// //     // }
// //     //   console.log(result,'result')
// //     //   return result
// //     const result = [];
// //     for (let i = 0; i < text.length - 1; i++) {
// //         const node = text.substr(i, 2);
// //         if (node.match(/[A-Za-z]{2}/)) {
// //             result.push(node.toLowerCase());
// //         }
// //     }
// //     return result;
// // }
// //
// //
// //
// //
// // // // console.log(solution(s1,s2))
// //
// // // // 합집합이 [4,4,4,1,2,5,6,7,8,8] 나와야 됩니다.
// // // // 만약 [4,4,4,1,2,5,6,7,8] 만 나온다면 무슨 문제인지 감이 오실겁니다
//




function solution (str1, str2) {

    function explode(text) {
        const result = [];
        for (let i = 0; i < text.length - 1; i++) {
            const node = text.substr(i, 2);
            if (node.match(/[A-Za-z]{2}/)) {
                result.push(node.toLowerCase());
            }
        }
        return result;
    }

    const arr1 = explode(str1);
    const arr2 = explode(str2);
    console.log(arr1,'arr1')
    console.log(arr2,'arr2')
    const set = new Set([...arr1, ...arr2]);
    //  'fr', 'ra', 'an', 'nc', 'ce', 're', 'en', 'ch'
    let union = 0;
    let intersection = 0;
    console.log(set,'set')
    //합집합의 원소 갯수만 구하면 되므로, 집합1과 집합2의 갯수에서 교집합의 수만 빼면 된다.
    set.forEach(item => {
        const has1 = [ 'fr', 'fr', 'ra', 'an', 'nc', 'ce' ] .filter(x => x === item).length;
        console.log(has1,'g해시1')
        const has2 = arr2.filter(x => x === item).length;
        console.log( arr1.filter(x => x === item),'필터')

        console.log( Math.max(has1, has2),'ath.max(has1, has2')
        // 집합의 갯수가 늘어난다 그러므로 요소의 하나씩 ex);'fr' 비교 후 각각의 arr에서 몇개 잇는지 찾은후 최대 수를 넣어즌다 =>  fr'가 2개 잇을경우
        // ['fr','fr']이렇게 들어가니 union엔 갯수 2개 추가 그다음 ['re']하나일때 푸시되니 nion(2) += 이런식으로/ 
        union += Math.max(has1, has2);

        intersection += Math.min(has1, has2);
    })
    console.log(union,'union')
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}



console.log(solution("FRANCE", "french"))
