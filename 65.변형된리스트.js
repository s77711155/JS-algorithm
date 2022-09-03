function s(arr1, arr2){
    let result= []
    for(let i in arr1) {
        let data = i%2 ===0 ?  [arr1[i], arr2[i]] : [arr2[i], arr1[i]];
        result.push(data)

        console.log(data,'ddddddddddddddddd')
    }

    return result
}

let a =[1,2,3,4];
let b = ["a", 'b', 'c', 'd']
console.log(s(a,b))