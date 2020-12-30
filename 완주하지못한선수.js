function solution(p, c) {
    p =p.sort()
    c= c.sort()
    return p.filter((v,i)=> v !==c[i]  )[0]
}
/*
 잠시 깃 테스트
 커밋해보자
 */