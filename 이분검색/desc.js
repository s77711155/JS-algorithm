/*
*   lt , rt  양쪽 각각 지정,
*  mid =  (lt+rt)/2
* if(arr[mid]>tartget){
* //오른쪽을 다 날리고 다시 반을 나눠서 rt 지정
* rt = mid -1
* }else if(arr[mid]< target){
* lt = mid +1
* }
*
*  한번 비교시 절반이 나눠짐
* */

function sol(arr, target){
    let result;
    arr.sort((a,b)=>a-b);
    let lt =0;, rt= arr.length-1
    while (lt<=rt){
        let mid = parseInt((lt +rt)/2)
        if (target === mid){
            result == mid+1
        }
        else if (arr[mid]>target) rt = mid-1
        else  lt = mid +1
    }

}

let arr = [23, 87, 65, 12, 57 ,32 ,99 ,81]

console.log(sol(arr, 87))