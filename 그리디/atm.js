function sol(){
    const min = [3,1,4,3,2]
    let saveArr = []
    min.sort((a,b) => a-b)
    // for (let i= 0; i< min.length; i++ ){
    //     let reduceMin = 0
    //     // i === 0 일때
    //     if (i === 0){
    //         saveArr.push(min[i])
    //     }else {
    //         let add = saveArr[i-1] + min[i]
    //         saveArr.push(add)
    //     }
    // }
    // let result = saveArr.reduce((arr, crr) => arr+crr,0)
    let add = 0
    let answer = 0
    for (let i= 0; i< min.length; i++ ){
      add  += min[i]
        console.log(add,'add')
        answer += add
    }
    console.log(answer,'answer')
    //console.log(result,'result')

}
console.log(sol())