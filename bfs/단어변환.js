function solution(begin, target, words) {
    let answer = 0;
    let queue = begin.split('');
    let wordSplit = words.map( v=> v.split(''));
    let visited = [];

    while (true) {
        if (queue.join('') === target) break;
        for (let i=0; i<wordSplit.length; i++){
            let count = 0;
            for (let j in wordSplit[i]) {
                if (wordSplit[i][j] === queue[j]) {
                    count +=1;
                }
                if (count == wordSplit[i].length -1) break;
            }


            if (count == wordSplit[i].length -1) {
                console.log(visited,'visited')
                for (let s in wordSplit[i]) {
                    if (visited.includes(wordSplit[i][s])) break
                   if (queue[s] === wordSplit[i][s]) {
                        visited.push(wordSplit[i][s]);
                        console.log(queue, 'queue1111111111111111')
                    }
                    else {
                       queue[s] = wordSplit[i][s]
                   }

                }
            }

            count = 0;
            console.log(queue, 'queue')

            // console.log(visited,'visited')
        }
    }
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))

