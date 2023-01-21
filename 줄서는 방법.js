// 순열

function sol(n,k){
    let result = []
    const people = Array.from({ length: n }, (_, i) => i + 1);
    // 경우의 수는 n! => 1명일때 1개 2먕일때 1*2 3명일땐 1*2*3
    // console.log(people,'pp')
    let caseNumber = people.reduce((acc,cur)=> acc *cur,1)
    console.log(result)
    while (result.length <n){
        caseNumber = caseNumber /people.length
        let c =Math.floor((k-1)/caseNumber)
        console.log(people,'pppp')
        let d = people.splice(c,1)

        console.log(caseNumber,d)// 몫만 옿ㅁ
        result.push(d);
        console.log(result,'rrr')
        k = k% caseNumber
    }
}

console.log(sol(3,5))