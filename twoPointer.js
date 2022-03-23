function s(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;

    let p1,p2=0;
    // 둘중 하나가 거짓되면 거짓되니깐 or 가아니라 and
    while (p1<n && p2<m){
        if (arr1[p1]<= arr2[p2]) answer.push(arr1[p1++])
        else answer.push(arr2[p2++])
    }

    // 두가지의 경우 모두 기재
    while (p1<n) answer.push(arr1[p1++])
    while (p2<n) answer.push(arr1[p2++])
}

// 공통 원소 구하기

/// 최대 매출 구하기
function f(arr,k) {
    let max = 0;
    let result = []
    for(let i=0; i<= arr.length-1; i++){
        let temp=0;
        let r =[];
        console.log(i,'=======================')
        for (let j=i; j<=k+i-1;j++){
            console.log(j,'jjjjjjjjjjjjjj')
            temp += arr[j];
            r.push(j);
            console.log(r,'r')
            if (j === k+j) {
                if (max > temp) {
                    r = [];
                }else  {
                    max = temp
                    result = r
                }
            }
        }
    }
    return result
}
console.log(f([12,15,11,20,25,10,20,19,13,15],4))

// 슬라이드 윈도우 => 밀어 간다
function f1() {
    let answeer, sum=0;

    return answeer
}