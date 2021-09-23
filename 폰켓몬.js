// 내풀이,다른 이와 똑같다
function solution(nums) {
    let setNum = new Set(nums);
    let half = nums.length / 2
    setNum = [...setNum].length;
    let result = setNum >= half ? half : setNum
    return result
}