
// a의 최대 합계 구하라
function sol(a,b,k){
    let result = 0
    a.sort()
    b.sort((a,b)=>b-a)

    for (let i=0; i<k;i++){
     if (a[i]<b[i]){
         // let temp = a[i]
         // a[i] = b[i]
         // b[i] = temp

         // temp말구 구조 분해도 가능 ex)[arr[1], arr[2]] = [arr[2], arr[1]];
         [a[i],b[i]] = [b[i],a[i]]
     }
    }

    a.forEach(v => result += v )
    return result

}

let A = [1,2,5,4,3]
let B = [5,5,6,6,5]
let K = 3
console.log(sol(A,B,K))