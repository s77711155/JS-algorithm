// 우선순위 큐
function hourToMin(time) {
    const [st, ed] = time.split(':');
    return Number(st*60) + Number(ed);
}

function sol(bookTime){
    let result = 0
    let convertMin = bookTime.map(time => {
        let startTime = hourToMin(time[0])
        let endTime = hourToMin(time[1])
       return [startTime, endTime]
    })
    convertMin.sort((a,b)=>  Number(a[0]) - Number(b[0]) )
    console.log(convertMin)
    let room = []
    convertMin.forEach(([startTime, end]) => {
       console.log(startTime,end)
        // times 배열에서 시작 시간과 같거나 시작 시간보다 작은 수를 찾는다.
        const idx = room.findIndex((e) => e <= startTime);
        // 만약 없다면 room을 추가하고 새로운 종료시간을 넣어준다.
        if (idx === -1) room.push(end);
        // 만약 있다면 기존 room의 종료시간을 변경해준다.
        else room[idx] = end
        console.log(room,'room')
    });
}


console.log(sol([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"],["14:10", "19:20"], ["18:20", "21:20"]]))