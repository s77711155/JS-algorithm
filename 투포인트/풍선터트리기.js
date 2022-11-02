function solution(arr) {
    let result = 0;
    let count = 1
    for (let standard = 0; standard < arr.length; standard++){
        let flag = false;
        let last = arr.length - 1
        let lt = 0
        if (standard === lt)  lt = standard+1
        let minR = arr[last]
        let minL = arr[lt]
        for (let rt = arr.length -2; rt<1; rt--){
            if (lt === rt){
                break;
            }
            if (minR > arr[rt]){
                minR = arr[rt]
            }
            if (count>0){
                if(minR <arr[rt]){
                    count--
                }
            } else {
                while (arr[lt]> arr[rt]){
                    minL = arr[lt++]

                }
            }
        }
        let min = Math.min(minR,minL)
        if (count>0){
            if (arr[standard] < arr[min]){
                flag = true
            }
        }else {
            flag = arr[standard] >= arr[min]
        }

        result = flag ? result+1 : result
    }

    return result;
}

let a = [ 5,7,1,8,9]
console.log(solution(a))