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