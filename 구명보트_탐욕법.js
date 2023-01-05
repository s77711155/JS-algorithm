function solution(people, limit) {
    //한 보트에 2명이 탈 수 있는지를 검사하자
    let answer = 0;
    //내림차순 정렬
    people.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0, j = people.length - 1; i <= j; j--) {
        if (people[i] + people[j] <= limit) {
            answer++;
            i++;
        } else {
            answer++;
        }
    }

    return answer;
};