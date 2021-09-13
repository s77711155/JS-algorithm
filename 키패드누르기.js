// 순서대로 누를 번호가 담긴 배열,  왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가
function solution(numbers, hand) {
    // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
    var answer = '';
    let left = [1,4,7] // *
    let right = [3,6,9]
    let start = ['*','#'];
    let mid = [0,2,5,8];

    let lhand = '*';
    let rhand = '#';

    for(let i in numbers) {
        if(left.includes(numbers[i])) {
            answer += 'L';
            lhand = numbers[i];
        } else if(right.includes(numbers[i])){
            answer += 'R';
            rhand =  numbers[i];
        } else if (mid.includes(numbers[i])){
            let prev = i === 0 ? numbers[0] : numbers[i-1]
            let prevs = [lhand,rhand,prev];

            closer(prevs, numbers[i], hand);
        }

    }

    //console.log(answer)
    // 147 왼쪽

    // 369 오른쪽

    // 258 더 가까운곳
    //return answer;
}

function closer(pre, current, hand) {
    // prevs = [lhand,rhand,prev];  // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
    // console.log(pre, current, hand);
    let result =[];
    let count = 0;
    let graph = {
        2: [5,1,3],
        5: [2,4,6,8],
        8: [5,0,7,9],
        0: [8, '*','#']
    }

    let left = graph[pre[0]];
    let right = graph[pre[1]];
    for(let i in graph){
        current
    }


    for(let key in graph){
        if( key === current ){

            // 2
            if(graph[key].includes(left)) {
                result = 'L'
            }else if (graph[key].includes(right)) {
                result = 'R'
            } else {
                // 7 6
                for(let i in graph[key]){

                }

            }

        }


    }
    count = 0;
}
return result

}



