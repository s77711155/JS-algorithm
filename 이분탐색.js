/*
* 이분탐색이란
* 오름차순으로 정렬된 리스트에[서 특정한 값 위치를 찾는 알고리즘
* low, high mid
* 2.설정된 중앙값(mid)가 31보다 작으므로, low 의 인덱스를 mid+1로 설정하여 우측을 선택한다.
(반대로, 중앙값이 31보다 큰 경우라면, high 인덱스를 mid-1로 설정하여 좌측을 선택한다.)
*
* */


// 반복문을 이용
public static int binarySearch_loop(int[] arr, int target) {
    Arrays.sort(arr);		// 0번 과정 : 오름차순 정렬

    int low = 0;
    int high = arr.length-1;
    int mid = 0;

    // 제일 작은수가 큰수보다 커지면 탐색 종료
    while(low <= high) {
        mid = (low + high) /2;		// 1번 과정 : 중앙값 찾기

        if(arr[mid] == target) {
            return mid;
        }else if(arr[mid] > target) {	// 현재의 중앙값보다 작으면,
            high = mid-1;		// 왼쪽요소를 선택하기 위해 high = mid -1로 설정
        }else {
            low = mid+1;		// 현재의 중앙값보다 크면, 오른쪽 요소를 선택하기 위해 low = mid+1로 설정
        }
    }
    // 탐색해도 결과가 없는 경우
    return -1;

}