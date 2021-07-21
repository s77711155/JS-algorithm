function sol(answer) {
    // let result = [];
    // let count = 0;
    // for (let i in answer){
    //     let w = answer[i].split('');
    //     console.log(w)
    //     console.log(w)
    //     answer.forEach((word,idx) => {
    //         if (Number(i) !== idx){
    //             for(let c of w){
    //
    //
    //                 count++
    //             }
    //             if (count === 3){
    //                 result.push([])
    //             }ㅋ
    //             console.log(word,'word')
    //         }
    //     });
    //     // w가 해당 word제외한 엔설에 잇는지 잇으면 카운트 업
    //     // 카운트 수가 3이면 리제르에 푸시
    //     answer.includes()
    // }
    let map = new Map();
    let obj = {};
    for(let i in answer){
        let sorted = answer[i].toLowerCase().split('').sort().join('')
        let arr = obj.hasOwnProperty(sorted) ? obj[sorted] : [];
        console.log(obj[sorted])
        console.log(sorted)
        if (obj.hasOwnProperty(sorted)){
           //console.log(arr,'arr')
            obj[sorted] = [arr,answer[i]]
        }else{
            obj[sorted] = arr.push(answer[i])
        }

        //console.log(sorted,answer[i])

        //map.set(sorted,word);
    }
    return Object.values(obj)//Array.from(map.values())
}
//https://ko.javascript.info/task/filter-anagrams

console.log(sol(['eat','tea','tan','ate','nat','bat']));