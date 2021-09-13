// // 순서대로 누를 번호가 담긴 배열,  왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가
// function solution(numbers, hand) {
//     // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
//     var answer = '';
//     let left = [1,4,7] // *
//     let right = [3,6,9]
//     let start = ['*','#'];
//     let mid = [0,2,5,8];
//
//     let lhand = '*';
//     let rhand = '#';
//
//     for(let i in numbers) {
//         if(left.includes(numbers[i])) {
//             answer += 'L';
//             lhand = numbers[i];
//         } else if(right.includes(numbers[i])){
//             answer += 'R';
//             rhand =  numbers[i];
//         } else if (mid.includes(numbers[i])){
//             let prev = i === 0 ? numbers[0] : numbers[i-1]
//             let prevs = [lhand,rhand,prev];
//
//             closer(prevs, numbers[i], hand);
//         }
//
//     }
//
//     //console.log(answer)
//     // 147 왼쪽
//
//     // 369 오른쪽
//
//     // 258 더 가까운곳
//     //return answer;
// }
//
// function closer(pre, current, hand) {
//     // prevs = [lhand,rhand,prev];  // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
//     // console.log(pre, current, hand);
//     let result =[];
//     let count = 0;
//     let graph = {
//         2: [5,1,3],
//         5: [2,4,6,8],
//         8: [5,0,7,9],
//         0: [8, '*','#']
//     }
//
//     let left = graph[pre[0]];
//     let right = graph[pre[1]];
//     for(let i in graph){
//         current
//     }
//
//
//     for(let key in graph){
//         if( key === current ){
//
//             // 2
//             if(graph[key].includes(left)) {
//                 result = 'L'
//             }else if (graph[key].includes(right)) {
//                 result = 'R'
//             } else {
//                 // 7 6
//                 for(let i in graph[key]){
//
//                 }
//
//             }
//
//         }
//
//
//     }
//     count = 0;
// }
// return result
//
// }
//

// find 메소드
//.find()는 .filter()와 다르게 찾고 싶은 요소를 검색한 후에는 즉시 검색을 종료한다.
// |왼손x - 버튼x| + |왼손y - 버튼 y|


// 내풀이
function solution(numbers, hand) {
    // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
    var answer = '';
    let left = [1,4,7] // *
    let right = [3,6,9]
    let mid = [0,2,5,8];

    let lhand = '*';
    let rhand = '#';
    let dockHand = hand === 'left' ? 'L' : 'R';

    for(let i in numbers) {
        if(left.includes(numbers[i])) {
            answer += 'L';
            lhand = numbers[i];
        } else if(right.includes(numbers[i])){
            answer += 'R';
            rhand =  numbers[i];
        } else if (mid.includes(numbers[i])){
            let prevs = [lhand,rhand];
            let r = closer(prevs, numbers[i], dockHand);
            // console.log(r)

            if(r === 'L') {
                lhand = numbers[i]
            }else {
                rhand =  numbers[i]
            }
            answer += r
        }

    }

    //console.log(answer)
    // 147 왼쪽

    // 369 오른쪽

    // 258 더 가까운곳
    return answer;
}

function getKeyByValue(obj,value) {
    return Object.keys(obj).find(key => obj[key].includes(value));
}

function closer(pre, current, hand) {
    // prevs = [lhand,rhand,prev];  // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
    // console.log(pre, current, hand);
    let result =[];
    let count = 0;
    let graph = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1], 6: [1, 2], 7: [2, 0], 8: [2, 1], 9: [2, 2], "*": [3, 0], 0: [3, 1], "#": [3, 2],
    }

    // 왼쪽 손과 현재 키번호 거리
    let left =  Math.abs(graph[pre[0]][0] - graph[current][0]) + Math.abs(graph[pre[0]][1] - graph[current][1])
    // 오른 손과 현재 키번호 거리
    let right =Math.abs(graph[pre[1]][0] - graph[current][0]) + Math.abs(graph[pre[1]][1] - graph[current][1])

    if (left === right) return hand;

    console.log(left,right)

    return left < right ? 'L' : 'R'

}

// 다른이 풀이

function solution(numbers, hand) {
    const keypad = {
        1:[0,3], 2:[1,3], 3:[2,3],
        4:[0,2], 5:[1,2], 6:[2,2],
        7:[0,1], 8:[1,1], 9:[2,1],
        '*':[0,0], 0:[1,0], '#':[2,0],
    }
    const len = numbers.length;

    let answer = '';
    // 처음 엄지손가락의 위치
    let leftFinger = '*';
    let rightFinger = '#';

    for (let i = 0; i < len; i++) {
        let num = numbers[i];
        // 1, 4, 7
        if (num % 3 === 1) {
            // 'L'을 더해주고 해당 숫자를 leftFinger에
            // 재할당(왼쪽 엄지손가락 위치 기억)
            answer += 'L';
            leftFinger = num;
        }
        // 0을 제외한 3, 6, 9
        else if (num !== 0 && num % 3 === 0) {
            // 'R'을 더해주고 해당 숫자를 rightFinger에
            // 재할당(오른쪽 엄지손가락 위치 기억)
            answer += 'R';
            rightFinger = num;
        }
        // 2, 5, 8, 0
        else {
            answer += getDistance(keypad, num, hand, leftFinger, rightFinger);
            // answer 문자열의 마지막 index를 확인 후 2, 5, 8, 0 재할당(위치 기억)
            answer[answer.length - 1] === 'L'
                ? (leftFinger = num)
                : (rightFinger = num);
        }
    }

    return answer;
}

function getDistance(keypad, num, hand, leftFinger, rightFinger) {
    const handed = hand === 'left' ? 'L' : 'R';
    const left =
        Math.abs(keypad[num][0] - keypad[leftFinger][0]) +
        Math.abs(keypad[num][1] - keypad[leftFinger][1]);
    const right =
        Math.abs(keypad[num][0] - keypad[rightFinger][0]) +
        Math.abs(keypad[num][1] - keypad[rightFinger][1]);

    if (left === right) return handed;

    return left < right ? 'L' : 'R';
}
