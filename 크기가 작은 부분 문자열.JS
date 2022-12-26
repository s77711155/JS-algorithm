// s내풀이
function solution(t, p) {

    let arr =[]
    for(let i=0; i<t.length;i++){
        let temp = t.slice(i,i+p.length)
            if(temp.length>=p.length)arr.push(temp)
    
    
    }
   let result = arr.filter(v => parseInt(v)<=p)
    console.log(result,'sss')
    return result.length;
}

//다른 사람 풀이

2
3
4
5
6
7
8
9
function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
    }
    return count;
}
