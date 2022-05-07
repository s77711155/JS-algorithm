let arr =[4,9,8,2,9]
let k =3
function f(arr, k){
    arr.sort((a,b)=> a-b)
    console.log(arr)
}

console.log(f(arr,k))