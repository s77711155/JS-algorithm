/*
    탐욕법

    자바스크립트 아스키코드 변환하기
     charCodeAt 은 문자열중 하나를 선택하여 아스키코드 번호로 변환해주는 함수이며,

   fromCharCode 는 아스키코드번호를 받아 문자열을 구성해주는 함수입니다.
*/


// 순차적으로 순회 0 이 아닌 수가 만나면 빠져나온다 이부분이 해결이 안됨!!
// 다시해보자!
function solution(name) {
    // let answer = 0;
    let arrName = name.split('');
    let z = "Z".charCodeAt();
    let a = "A".charCodeAt();
    let newArr = [];

    for(let i in arrName){
        let n = arrName[i].charCodeAt();
        let decreaseA = Math.abs(a-n);
        let decreaseZ = Math.abs(z-n);
        console.log(n,'n')
        decreaseZ < decreaseA ? newArr.push(decreaseZ) : newArr.push(decreaseA)
    }
    console.log(newArr)//'JEROEN'

    let answer= newArr.reduce((a,b,i,array)=>
        // if(newArr[newArr.length - 1] === 0){
        //      a+b+1
        // }else if(newArr[i] === 0){
        //      a+b+0
        // }else {
        //      a+b+1
        // }
        // 순차적으로 순회 0 이 아닌 수가 만나면 빠져나온다
        array[1] === 0
        (array[array.length - 1] === 0 || array[i] !== 0) ? a+b+1 :  a+b+0
   
        
    )

    let arrLength=newArr.length;
    let idx = 0
    while(idx < arrLength) {
        newArr[idx] = 0
    }
    // let answer = 0
    // for(let i in newArr){
    //     if(newArr[newArr.length - 1] === 0 || newArr[i] !== 0){
    //         answer += newArr[i]+1
    //     }else if(newArr[i] === 0){
    //         answer += newArr[i]
    //     }
    // }
   return answer;
}

console.log(solution('JEROEN'),'정답')