function sol(j,s) {
    let num = 0;
    let jArr = j.split('');
    let sArr = s.split('');
    sArr.forEach(v=>{
        if (jArr.includes(v)){
            num++;
        }
    });
    return num
}
let J = 'Z';
let S = 'aAAbbbbbZ';
console.log(sol(J,S));