function f(arr, n) {
    arr.sort((a,b)=> a-b)
    let result = arr.indexOf(n)
    return result+1
}
console.log(f([23,87,65,12,57,32,99,81],32))