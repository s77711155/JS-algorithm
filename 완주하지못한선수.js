function solution(p, c) {
    p =p.sort()
    c= c.sort()
    return p.filter((v,i)=> v !==c[i]  )[0]


}