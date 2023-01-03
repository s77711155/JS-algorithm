// 참가자 a,b,c,d, 민규 , 민규 빼고 각각 다들 한번씩 악수를 함 민규는 몇번 악수를 햇는가
function sol(n){
    let person = 0;
    let hands = 0
    let temp =0
    while (true){
        hands = parseInt((person*(person-1))/2,10)
        if (n<hands){
            break
        }
        temp = hands
        person += 1
    }
    return [parseInt(n-temp), person]
}

console.log(sol(59))