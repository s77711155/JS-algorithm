function sol(topping){
    let count  =0;
    let half = Math.ceil(topping.length /2)
    let case1 =  [topping.slice(0,half),topping.slice(half)]
    let case2 = [topping.slice(0,half-1),topping.slice(half-1)]
    let case3 = [topping.slice(0,half+1),topping.slice(half+1)]
    let obj = {
        case1,
        case2,
        case3
    }

    for (let caseArr in obj){
        let [cake1, cake2] = obj[caseArr]
        let same =[]
          cake1.forEach((v,i) =>{
              let flag =  cake2.includes(v)
                  if (flag){
                     same.push(v)
                  }
          })
            let cake1copy = cake1.filter(v => !same.includes(v))
            let cake2copy= cake2.filter(v => !same.includes(v))

        if (cake1copy.length === cake2copy.length){
            count += 1
        }
    }

    return count

}

// console.log(sol([1, 2, 1, 3, 1, 4, 1, 2]))

// 다른 사람 풀이
function solution(topping) {
    let answer = 0;

    const allTopping = new Map();
    const bro = new Map();
    //1, 2, 1, 3, 1, 4, 1, 2
    // Map 자료구조에 각 토핑의 개수가 몇개인지 넣어준다.
    // {1 => 4, 2 => 2, 3 => 1, 4 => 1}
    topping.forEach((n) => {
        allTopping.set(n, (allTopping.get(n) || 0) + 1);
        //console.log(allTopping,'aaaaaa')
    });

    for (let n of topping) {
        // 토핑을 하나씩 확인하면서 (케익을 1부터 자르는 것)
        // allTopping의 목록을 하나씩 빼준다.
        allTopping.set(n, allTopping.get(n) - 1);
        // bro에는 토핑의 갯수가 중요하지 않고,
        // 토핑의 종류가 중요하므로 들어온 토핑의 종류 n과 true를 넣어준다.
        bro.set(n, true);

        // allTopping의 토핑이 0이되면 그 토핑 항목을 지워준다.
        if (!allTopping.get(n)) allTopping.delete(n);

        // allTopping의 크기와 bro의 크기가 같으면
        // 형과 동생이 같은 종류의 토핑을 들고있는 것이기에
        // answer을 1 증가시켜준다.
        if (allTopping.size === bro.size) {

            console.log(allTopping,'aaaaa')
            console.log(bro,'bbbbb')
            answer++;
        }

        // 동생의 가진 토핑 종류가 많아지면 더 이상 케익을
        // 잘라도 동생의 토핑 개수만 증가하는 것이기 때문에
        // break문을 걸어 반복문을 종료시킨다.
        if (allTopping.size < bro.size) break;
    }

    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))
// function solution(topping) {
//     // 1) 전체 토핑별 개수가 담긴 Map 객체를 생성한다.
//     const map = new Map();
//
//     // 2) 형의 토핑의 종류를 담을 Set 객체 생성한다.
//     const bro = new Set();
//
//     // 3) 형과 동생이 케이크를 공평하게 나누어지는 횟수
//     let answer = 0;
//
//     // 4) Map에 토핑별 개수를 담는다.
//     for(let i=0; i<topping.length; i++){
//         map.has(topping[i]) ? map.set(topping[i], map.get(topping[i])+1) : map.set(topping[i], 1);
//     }
//
//     // 5) 토핑의  개수 만큼 반복한다.
//     for(let i=0; i<topping.length; i++){
//         // 6) Map에 담긴 토핑을 하나씩 빼고 형에게 준다.
//         let count = map.get(topping[i])-1;
//         bro.add(topping[i]);
//
//         // 7) 토핑의 개수가 0이 되면 삭제하고, 남아 있으면 하나씩 뺀다.
//         count === 0 ? map.delete(topping[i]) : map.set(topping[i], count);
//
//         /*
//         	8) Map에 남아있는 토핑의 종류가 곧 동생의 토핑의 종류이기 때문에
//               형의 토핑의 개수와 동생의 토핑의 개수릴 비교하여 같으면 answer를 증가시킨다.
//         */
//         if(bro.size === map.size) answer++;
//
//     }
//     // 9) 총 공평하게 나누어지는 횟수를 return한다.
//     return answer;
// }
//
//
//
// function solution(topping) {
//     const a = new Set()
//     const b = {}
//
//     let answer = 0;
//     let check = 0
//
//     for (let i = 0; i < topping.length; i++) {
//         if (b[topping[i]]) {
//             b[topping[i]]++
//         } else {
//             b[topping[i]] = 1
//             check++
//         }
//     }
//
//     for (let i = 0; i < topping.length; i++) {
//         a.add(topping[i])
//         b[topping[i]]--
//
//         if (!b[topping[i]]) check--
//         if (a.size === check) answer++
//     }
//
//
//     return answer;
// }