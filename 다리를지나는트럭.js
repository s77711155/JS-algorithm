/*
.push() : 배열의 맨 끝에 값을 추가한다.
.unshift() : 배열의 맨 앞에 값을 추가한다.

.pop() : 배열의 맨 끝에 값을 제거한다.
.shift() : 배열의 맨 앞에 값을 제거한다.

new Array(배열 갯수).fill(0); => 0으로 배열 갯수 만큼 채워진 배열 만들기

큐문제
다시 풀어보기
*/
    function solution(bridge_length, weight, truck_weights) {
        let answer = 0;
        let end = []; // 다리를 지난 트럭
        let ing = []; // 다리를 건너고 있는 트럭
        let nowWeight = 0;// 현재 다리의 무게 (ing 무게를 더해라)
            
        // 현재 다리 상태 FIFO - queue의 길이는 다리 길이로 하고 다리 하나하나를 0으로 초기화
        let queue = new Array(bridge_length).fill(0);
        // 현재 다리 무게 
        let queueSum = 0;
    
        // solution (2, 10, [7, 4, 5, 6])
        // 트럭중에 맨앞 트럭 넣기
        ing = truck_weights.shift() // 7
        
        queue.unshift(ing) //[ 7, 0, 0 ]
        queue.pop()  //[ 7, 0]
    
        //console.log(nowTruck,'nowTruck 중')
        // 무게 더하기
        queueSum += ing;
        answer++;

    

        // queueSum이면 다리 무게가 0이므로 지나가는 트럭은 없다.
        while(queueSum) {
            queueSum -= queue.pop();  //queue.pop(), -> 하나를 뺀다. 7-0 // 다리의 남은 무게
            ing = truck_weights.shift();  //4
            console.log(queue,'처음')
            
            // 다리의 무게가 트럭을 무게를 버틸수 잇다면 ing(새로건널 트럭 무게) +queueSum(제일먼저 건너구 이던 트럭)
            if(ing + queueSum <= weight){
                queue.unshift(ing); // 제일 앞에 추가해라
                queueSum += ing;
                console.log(queue,'2개 같이 고고')
            }   else {
                queue.unshift(0);
                truck_weights.unshift(ing)
                console.log(queue,'하나오만 버타ㅏ')
            }
            answer++;
        }
        return answer;
    

        
    //     return answer;
    }


    // 다른이 풀이
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let total_truck_weight = 0;
    let bridge_queue = [], weight_queue = [];

    //while(truck_weights.length > 0) {
    do {
        // 다리를 건너는 트럭 이동
        for(let i in bridge_queue) {
            bridge_queue[i]--;
        }
        if(bridge_queue[0] == 0) {
            total_truck_weight -= weight_queue.shift();
            bridge_queue.shift();
        }

        // 다리가 견딜 수 있으면 트럭 1개 올리기
        if(total_truck_weight + truck_weights[0] <= weight) {
            weight_queue.push(truck_weights[0]);
            bridge_queue.push(bridge_length);
            total_truck_weight += truck_weights.shift();
        }
        answer++;
    } while(bridge_queue.length > 0)

    return answer;
}
