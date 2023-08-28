// 동전의 종류는 N종류 각각의 동전 사용해서 합을 K ㅅ필요한 동전 갯수의 ㅚ소값
function sol( n, k){
    let count =0
    let money = Number(k);
    n.sort((a,b) => b-a)
    // 몫은 사용한 화폐
    // 나머지는 금액

    for (let i=0; i< n.length; i++){
        count += parseInt(money/Number(n[i]),10)
        console.log( money/Number(n[i]),count,'cccccc')
        money %=Number(n[i])

    }
    console.log(count)
}
console.log(4200/5000,'ss')
let arr = [
    1,
    5,
    10,
    50,
    100,
    500,
    1000,
    5000,
    10000,
    50000
]
let sum = 4200
console.log(sol(arr,sum))