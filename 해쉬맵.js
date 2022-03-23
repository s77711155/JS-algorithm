function f(alphabet) {
    let arr = alphabet.split('');
    let obj = {}
    for(let i in arr) {
        if (obj.hasOwnProperty(arr[i])){
            console.log( arr[i],' arr[i]')
            obj[arr[i]]++
        }else {
            obj[arr[i]] = 1
        }
    }
    console.log(obj,'sss')
}

console.log(f('BACDBBAA'))

let sh = new Map();
for (let x of s) {
    if (sh.has(x)) sh.set(x, sh.get(x+1))
    else sh.set(x,1)
}

let max = 0;
for (let [key,val] of sh){

}