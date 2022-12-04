/*
*  정렬: 데이터를 특정한 기준으로 따라 순서대로 나열
* - 선택정렬: 처리되지 않은 데이터중에 가장 작은 테이더를 선택해 맨앞에 있는 데이터와 바꾸는것을 반복(이중포문)
* - 삽입정렬: 처리되지 않은 데이터를 하나씩 골라 적절한 곳한 삽입
* - 퀵정렬: 기준 데이터 설정, 기준본다 큰데이터와 작은 데이터의 위치르르 바꾸는 방법(제일 많이사용), pivot을 설정
* */

// 삽입 정렬
for(let i=1; i<n; i++){
    // 인덱스 j부터 1까지 감소하며 반복하는 문법
    for(let j = i; j>0; j--){
        // 한칸씩 왼쪽으로 이동(자기가 왼쪽보다 더 작으면 스와프 하면서)
        if (arr[j]< arr[j-1]){
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
        }
        else break
    }
}

// 퀵정렬
function quickSort(arr) {
    if(arr.length <=1) return arr

    const pivot = arr[0]
    const left = []
    contt right = []

    for(let i= 1; i<arr.length;i++){
        if (arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return quickSort(left).concat(pivot,quickSort(right))
}
