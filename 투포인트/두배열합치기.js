// 2개의 포인트를 잡았다
function sol(){
    let a = [1,3,5]
     let b =[2,3,6,7,9]
    // 포인트 인덱스를 잡는다
    let p1, p2= 0
    let answer =[]


    // 포인트 인덱스가 두배열중 하나라도 길이만큼 된다면 해당 반복문은 멈춤
    while (p1< a.length && p2<b.length){
        // a[p1++] 은 answer에 푸시를 하고 그다음 p1을 올려라
        if (a[p1]<=b[p2]) answer.push(a[p1++])
        else answer.push(b[p2++])
    }
    // 한쪽 포인트가 끝난다면 남은 포인트의 배열을 쭉 넣어준다.
    while (p1<a.length) answer.push(p1++)
    while (p2<b.length) answer.push(p2++)

    return answer

}