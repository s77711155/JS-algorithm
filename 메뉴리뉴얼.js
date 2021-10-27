function solution(orders, course) {
    // str.replace(/\'/gi,"");

    let result = {};
    course.forEach(v => {
        //let condition = findWillCondition(v, orders); // menu.filter(v => length <= v.length )
        //console.log(condition,'조건[[[[[[[[[[]]]]]]]]]]')

        let res = [];
        orders.forEach(str => {
            const dfs = (s =0, arr = "") => {
                res.push(arr)
                for (let i= s; i< str.length; i++){
                    dfs(i+1,[...arr, str[i]].join(""))
                }
            };
            dfs();
        })
        //console.log(res,'res')
        // a,ac

        res = res.filter(str => str.length === v);

        //console.log(res,'temp')

        // 중복 가장 많은거 찾기
        res.sort();
        let obj = {};
        //let count = 0
        for(let i in res){

            if(obj.hasOwnProperty(res[i]) ){
                obj[res[i]] = obj[res[i]] + 1
            } else if( obj.hasOwnProperty(res[i].split("").sort().join("")) ){

                let re = res[i].split("").reverse().join("");
                obj[re] = obj[re] + 1

            }else {
                obj[res[i]] = 1
            }
        }
         console.log(obj,'obj')
        let max = Math.max.apply(null,Object.values(obj))
        console.log(obj,'obj')
        for(let f in obj){
            if(obj[f] === max && max >1) {
                result[f] = obj[f]
            }
        }


    })

    let answer = Object.entries(result)
    console.log('AC'==="AC");
    // let max = Math.max.apply(null,Object.values(obj))
    // console.log(obj,'obj')
    // for(let f in obj){
    //     if(obj[f] === max && max >1) {
    //         result.push(f)
    //     }
    // }


    //
   return answer.sort()
}
console.log('["AC", "ACDE", "BCFG", "CDE"]', '정답')
console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))





function findWillCondition(length, menu) {
    return menu.filter(v => length <= v.length )
}

// 다른사람 풀이
// function solution(orders, course) {
//     console.log(orders,'ordersorders')
//     const orderedCountMap = new Map();
//     const maxCountMap = new Map();
//     const courseSet = new Set(course);

//     function combination(result, index, str) {
//         if (courseSet.has(result.length)) {
//             let count = orderedCountMap.get(result) || 0;
//             orderedCountMap.set(result, ++count);

//             const max = maxCountMap.get(result.length) || 0;
//             if (max < count) {
//                 maxCountMap.set(result.length, count);
//             }
//         }

//         for (let i = index; i < str.length; i++) {
//             combination(result + str[i], i + 1, str);
//         }
//     }

//     orders.map(order => order.split("").sort().join(""))
//         .forEach(e => combination("", 0, e));
//     let a =course
//         .map(length => {
//             const max = maxCountMap.get(length);
//             return Array.from(orderedCountMap)
//                 .filter(e =>
//                     e[0].length === length && e[1] >= 2 && e[1] === max
//                 )
//                 .map(e => e[0]);
//         })
//         .flatMap(e => e)
//         .sort();
//     console.log(a,'a')
//     return  a
// }

