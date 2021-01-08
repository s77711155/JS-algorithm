/*
    https://hyem-study.tistory.com/49
참고 한 풀이
*/

/*
24 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.
자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.
*/
// 다시풀어보기!
function solution(n) {
    var answer = '';
    var reduce = 0;
    var arr = [4,1,2] // 3으로 나눳을경우 나머지가 0일때는 124진법의 수는 4가 되므로 인덱스 0에 4로 넣어준다.
    while(n>0){ // 0이 될때까지 나눠준다  
        reduce= n%3 // 나머지를 담아주고  
        
        n=parseInt(n/3) // n을 0을 만들기 전까지는 반복문을 돌아야하기 때문에  
        
        if(reduce === 0) {n = n-1}  // 두벉째 수가 되면 앞 수는 n-1의 값이 된다 
        
        answer = arr[reduce] +answer
    }
    
    return answer;
}
