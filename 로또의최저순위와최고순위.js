// 다른사람 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

// 내풀이
// 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums
function solution(lottos, win_nums) {
    const ranking = {
        6: '1',
        5: '2',
        4: '3',
        3: '4',
        2: '5',
        1: '6',
        0: '6'
    };


    // 알아볼수 없는 수
    let zero = lottos.filter(n => n === 0).length;
    // 교집합 []: 최저
    let min = lottos.filter(n => win_nums.includes(n)).length;
    let max = zero + min
    //당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에
    console.log(ranking[min],ranking[max])
    let answer = [parseInt(ranking[max]),parseInt(ranking[min])];

    return answer;
}