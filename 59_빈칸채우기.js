// 50 글자 제한으로 가운데 매개변수로 받은 문자열을 집어 넣기

function f(s,max) {
    let n = max/2 + parseInt(s.length/2,10);
    console.log(n,'nnnnnnnnnnnnnnnnn')
    let left = s.padStart(n, '=');
    return left.padEnd(max, '=')
}

console.log(f('hiSol',50))
console.log('======================'.length);
console.log('======================='.length);