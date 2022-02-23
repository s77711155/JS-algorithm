// 이차원 배열
/*
*  화면 그리기(이차원 배열)
* 클릭시 칸 이벤트
* */
// 테이블 그리기
const date = [];
for (let i = 0; i<3 ; i++){
    data.push([])
}
// ui 그리기
const $table= document.createElement('table');
let turn = 0
for (let i = 0; i<3 ; i++){
    const $tr = document.createElement('tr');
    for (let j = 0; j<3 ; i++){
        const $td = document.createElement('td');
        $td.addEventListener('click',(event)=>{
            console.log('click')
            // 이미 그려진 ㅎ칸엔 클릭 금지
            if (event.target.textContent) return
            // 턴 넘기기

        })
        $tr.append($td)
    }
    $table.append($tr)
}

//  칸 클릭 시 데이터 그리기

document.body.append($table)