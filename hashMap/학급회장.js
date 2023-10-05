function sol(s){
    let sh =  new Map()
    let result;

    for(let x of s){
        if (sh.has(x)){
            sh.set(x, sh.get(x)+1)
        }else {
            sh.set(x,1)
        }
    }
    console.log(sh)
    let max = Number.MIN_SAFE_INTEGER
    for ([key, val] of sh){
        if (val>max) {
            max =  val;
            result = key
        }
        console.log(key,val,'shj')
    }
    return result
}

console.log(sol("BACVCCACCDADAA"))