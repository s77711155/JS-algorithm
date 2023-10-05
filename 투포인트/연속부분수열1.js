function sol(arr,m){
    let lt =0;
    let sum = 0;
    let result=0
    let resultArr =[]
    for (let rt =0; rt<arr.length; rt++){
        sum+= arr[rt]
        if (sum === m){
            result++
            resultArr.push(arr.slice(lt,rt+1))
            console.log(lt,rt)
        }
        // lt를 빼라
        while (sum>=m){
            sum-= arr[lt++]
            if (sum === m){
                result++
                resultArr.push(arr.slice(lt,rt+1))
                console.log(lt,rt)
            }
        }
    }
    console.log(resultArr,'re')
}
let m = 6
let arr = [1,2,1,3,1,1,1,2]
console.log(sol(arr,m))