let n = 3;
let arr = [1,2,5]

function f(n,arr,money) {
    // dy 배열의 길이를 거스름돈줘야할 금액으로 맞춰춘다
    let dy = Array.from({length:money +1}, ()=> 0);
    // i는 arr의 인덱스를 가리킴
    for (let i = 0; i<arr.length; i ++){
        //코인이 1이면 1부터 돌아야하기 때문에
        for (let j=arr[i]; j<=money; j ++) {
            let target = arr[i];
            console.log(target,'===========================')
            console.log(dy[j],dy[j-target] +1 )
            console.log(dy[j]>dy[j-target] +1)
            dy[j] = dy[j-target] +1;
            // if(dy[j]>dy[j-target] +1){
            //     dy[j] = dy[j-target] +1;
            // }
            dy[j] = Math.min(dy[j], dy[j - arr[i]]+ 1)
        }
        console.log(dy,'dyy')
    }
        //console.log(dy,'dddyyyy')

}

console.log(f(n,arr,15))