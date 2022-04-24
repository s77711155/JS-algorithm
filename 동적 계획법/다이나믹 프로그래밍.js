// 1. 피보나치 수열풀이: n번째 수는 n-1번째와 n-2번째 수를 합하여 나타내는
// 피보나치 수열(0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...)을 구하는 함수

function fibonacci(n) {
    let arr = [0,1];
    let fib = n => {
        if(arr[n] !== undefined) {
            return arr[n] // 이미 있으면 그대로 리턴
        }
        arr[n] = fib(n-1) + fib(n-2); // 없는 건 새로 만들어서 저장  -> ㅠㅣ보나치 수열을 메모이제이션
        return arr[n]
    }
    return fib(n)
}