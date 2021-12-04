function solution(s) {
    let strLength = s.length;
    let copy = s.split('');

    let count = 0;
    let stack = [];
    let m = {
        "[": "]",
        "(": ")",
        "{" : "}"
    }

    const func = (arr)  => {
        if(arr.length%2 === 1 ) {
            return false
        }

        for(let i in arr){
            let str = arr[i] // [

            if (m.hasOwnProperty(str)){
                stack.push(str)
            } else {
                // stack =
                // [
                // [ { ( )
                if(m[stack[stack.length-1]] !== str) {
                    return false
                }

                stack.pop()


            }
            // console.log(str,'str')

        }

        if(stack.length) return false
        return true

    }


    for (let i = 0; i < strLength; i++ ){

        let an =  func(copy);
        count = an ?  count + 1 : count


        let picked  = copy.shift();
        copy.push(picked)


        let strJoin = copy.join('')

    }


    return count
}

