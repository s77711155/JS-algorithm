// 가장 큰수를 k번 더하구 두번째 큰수를 한번 더하라

// 단순 풀이
function f() {
    let arr = [2,4,5,4,6];
    let n = 8;
    let k = 3

    arr.sort((a,b)=>b-a);

    let first = arr[0];
    let second = arr[1];
    let result = 0;
    while(true){
        for (let i = 1; i<= k;i++){
            if(n === 0)break
                console.log(n,i,'nnn');
            result += first;
            n -= 1;
        }
        if(n === 0) break;
        result += second;
        n -= 1
    }
    console.log(result,'sssss')
    return result
}

console.log(f())

