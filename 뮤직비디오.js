function f(arr,m) {
    let min = 0
    for(let i=0;i<arr.length; i++){
        min +=arr[i]
    };
    min = min / m;

    let a = 0;
    let copy = [...arr]
    for(let i=0;i<arr.length; i++){
        if (min>=a){
            console.log(a,'aaa')
            console.log(copy,'aaa')
            a +=arr[i];
            copy.shift()
        }else{

            a =arr[i];
            copy.shift()
        }
    };

    console.log(copy,'min')
}

console.log(f([1,2,3,4,5,6,7,8,9],3))