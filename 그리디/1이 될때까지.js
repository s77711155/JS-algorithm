// n: 17, k:4 => n-1, n/k
//n이 1이 될때까지 1번 혹은 2번의 과정을 수행해야하는 최소 횟수를 구하라

function sol(){
    let n = 25;
    let k = 3
    let result = 0
 while (true){
        // n이 k로 나누어 떨어지는 수가 될때까지 빼기
    let target = (n/k)*k // targetd은 k호 나눠어 떨어지는 수가 되겟음
    // result에 n이 1로 몇번 빼야하는지 횟수룰 담아준다.-> 그러기 위해선 target을 n으로 빼면 된다
     result += n - target
    n = target
     // n이 k보다 작으면 더이상 나눌수 없기때문에 반복문 탈출
     if (n<k){
         break
     }else  {
         result +=1
         n = n/k
     }
     console.log(n)
    }
    console.log(n,'n')
    result += n-1
    console.log(result)
}

console.log(sol())