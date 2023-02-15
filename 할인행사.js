// 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개이며

// 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀,] 냄비, 바나나, 사과, 바나나인
// 회원을 대상으로 매일 한 가지 제품을 할인하는 행사를 합니다. 할인하는 제품은 하루에 하나씩만 구매할 수 있습니다.
// 알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서


function solution(want, number, discount) {
    // 가입 날을 구하라
    let obj = {}
    let result;
    for(let i in want){
        let key = want[i]
        let value = number[i]
        obj[key] = value
    }


    for (let i=0; discount.length>i; i++){
        // 10일간
        let end = 10 + i >= discount.length-1 ? discount.length-1 :  10+i
        end = i === 0 ? 1 : end
        let tenPeriod = discount.slice(i, end);
        let copyObj = Object.assign({}, obj);
        let flag = true
        for (let k in tenPeriod) {

            if ( tenPeriod[k] in copyObj){// tenPeriod[k] in copyObj
                copyObj[tenPeriod[k]] = copyObj[tenPeriod[k]] -1 < 0 ? 0:copyObj[tenPeriod[k]] -1

            }else {
                flag = false
                break
            }
        }
        if (!flag) continue

        // values 0 -> turn
        let bul = Object.values(copyObj).every((v) =>  v === 0)
         console.log(Object.values(copyObj))
        if (bul){
            result = i +1
            break
        }

    }


    return result === undefined ? 0 : result
}
let w = ["banana", "apple", "rice", "pork", "pot"];
let n = [3, 2, 2, 2, 1]
let d =["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
console.log(solution(w,n,d ))

function solution(want, number, discount) {
    var answer = 0;

    const isMatch = (arr) => { // 할인 품목과 원하는 제품이 일치하는지 확인하는 함수
        var map = new Map();   // 매번 map을 초기화 해준다.
        arr.forEach(v=>map.set(v,(map.get(v)||0)+1)); // 할인 품목들을 map에 셋팅한다.
        for(let i = 0; i < want.length; i++){
            if(map.get(want[i])!==number[i]) return false;
        }             // 원하는 품목의 수량과 할인 품목이 일치하지 않으면 false
        return true;  // 일치하면 true를 리턴한다
    }

    for(let j = 0; j <= discount.length - 10; j++){
        var arr = discount.slice(j, j+10); // 10일동안 할인이 되므로 10개씩 배열을 잘라준다.
        if(isMatch(arr)){
            answer++;
        }
    }
    return answer;
}