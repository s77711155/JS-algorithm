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

function f() {

}