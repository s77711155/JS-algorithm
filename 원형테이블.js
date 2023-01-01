//
function sol(n,k){
    let idx = 0;
    let q = []
    for (let i=0; i<n; i++){
        q.push(i+1)
    }

    console.log(q.at(-2), q.length -1)

    while (q.length > 2){
        console.log(idx,'dddddd')
        if (idx >  q.length -1){
            console.log(idx-q.length,q,idx,'ids')
            idx -= q.length
            console.log(idx,'읭?')
        }
        q.splice(idx,1)
        idx +=k;
        idx -=1
    }
    console.log(q, 'qqqq')
    return q
}

console.log(sol(6,3))