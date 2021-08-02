/*
    제자리 정렬(In-place sort) : 주어진 공간 외에 추가적인 공간을 사용하지 않는 정렬(https://hellowoori.tistory.com/48)
    제자리 정렬중 하나인 선택정렬 풀이예정
*/

function sol(arr) {
    for (let i =0; i < arr.length; i++){
        let min = arr[i];
        for (let j= i+1; j<arr.length; j++){
            let replceArr = arr[i];
            if (arr[i]>arr[j]){
                min = j;
                arr[i] = arr[min];
                arr[j]= replceArr;
                console.log(arr,'arrrrr')
            }
        }
    }
    return arr

}

console.log(sol([2,0,2,1,1,0,1]));
//[0,2,2,1,1,0]
//[0,0,2,1,1,2]
