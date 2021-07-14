function sol(answer) {
    let result = [];
    let count = 0;
    for (let i in answer){
        let w = answer[i].split('');
        console.log(w)
        console.log(w)
        answer.forEach((word,idx) => {
            if (Number(i) !== idx){
                for(let c of w){


                    count++
                }
                if (count === 3){
                    result.push([])
                }
                console.log(word,'word')
            }
        });
        // w가 해당 word제외한 엔설에 잇는지 잇으면 카운트 업
        // 카운트 수가 3이면 리제르에 푸시
        answer.includes()
    }
}

console.log(sol(['eat','tea','tan','ate','nat','bat']));