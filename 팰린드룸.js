function sol(answer) {
    let regex =  /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    let base = answer.replace(regex,"").replace(/(\s*)/g,"").toLowerCase().split('');
    let compare = base.slice().reverse().join('');
   console.log(compare,'');
   console.log(base.join(''))

     return compare == base.join('')

}

console.log(sol("A man, a plan, a canal: Panama"));