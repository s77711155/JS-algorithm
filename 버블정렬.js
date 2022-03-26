function f() {
    for (let i=0; i<arr.length-1; i++){
        for (let j=0; j<arr.length-i-1;j++){
            [arr[j], arr[j+1]] = arr[j],arr[j]
        }
    }
}

// 삽입정렬:
function f1(arr) {
    let answer = arr;
    for (let i=0; i<arr.length; i++){
        let temp = arr[i];
        console.log(temp,'temp[')
        let j;
        for (j = i-1; j >=0 ; j--) {
            console.log(j,'j')
            if (arr[j]> temp) arr[j+1] = arr[j]
            else break;
        }
        arr[j+1] = temp
    }
}

// 캐시
function f2(cache) {
    let size = 5;
    let answer= Array.from({length:size}, ()=>0);
    console.log(answer,'answer')

    cache.forEach(v => {
        let compire = arr.unshift()
        let pos = -1;
        for (let i=0; i< size; i++){
            // 기존값 잇는거 쓰는 거라면 기존값 위치를 알아내서 값이 밀어진다
            if (v === answer[i]) pos = i;
        }
        // 없다면
        if (pos === -1){
            for (let i= size-1; i>0; i--){
                answer[i]= answer[i-1];

            }
            answer[0] = v
        }else {
            for (let i= pos; i>0; i--){
                answer[i]= answer[i-1];

            }
            answer[0] = v
        }

    })
}
// console.log(f2([1,2,3,2,6,2,3,5,7]))
// function f3(arr) {
//     arr.sort((a,b)=>{
//         if (a[0]===b[0]) return a[1]-b[1]
//         return  a[0]-b[0]
//     })
//     let count = 0;
//     let newArr = []
//     for (let x of arr){
//         let tempArr = [];
//         for (let i = x[0]; i< x[1]; i++){
//             tempArr.push(i)
//         }
//         newArr.push(tempArr)
//     }
//     newArr.forEach(v => {
//         v.forEach(x =>{
//             for (let i=0; i< newArr.length; i++) {
//                 if ( newArr[i].includes(x)){
//                     count++
//                     break;
//                 }
//                 //count = newArr[i].includes(x) ? count++ : count
//             }
//         })
//
//         console.log(v,' v갸 끝나는 지점')
//
//     })
//     console.log(count,'count')
// }
function f3(arr){

    arr.sort((a,b)=>{
        if (a[0]===b[0]) return a[1]-b[1]
        return  a[0]-b[0]
    })
    console.log(arr,'arr')
    // let sArr = arr.map(v => {
    //     return[v[0], 's']
    // })
    // let eArr = arr.map(v => {
    //     return[v[1], 'e']
    // })
    // let newArr =[...sArr,...eArr]
    let newArr =[]
    for (let x of  arr){
        newArr.push([x[0],'s'])
        newArr.push([x[1],'s'])
    }
    newArr.sort((a,b)=>{
        if(a[0]===b[0]) return  a[1].charCodeAt() - b[1].charCodeAt() // 아스키 코드니깐
        else return a[0]-b[0]
    })
    console.log(newArr,'newArr')
    let cnt = 0;
    let result= 0
    for (let x of newArr){
        if(x[1]==='s') cnt++
        else cnt--;
        result = Math.max(result, cnt)
    }


}
let arr = [[14,18],[12,15],[15,20],[20,30],[5,14]]
console.log(f3(arr))