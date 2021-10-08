function solution(new_id) {
    //1. 대-> 소
    new_id.toLowerCase();
    //2. 제거할 정규식 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자
    let removeStr = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
    let answer = new_id.replace(removeStr, "");

    // 3.'...'와 '..' 가 '.'로 바뀌었습니다.
    // if(preg_match("/([\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])\\1\\1\\1/", $str)) // 같은 특수문자 연속 4번 정규식
    let arr = answer.split('');
    let leng = arr.length -1;
    console.log(leng)
    if(arr[0] === '.') arr.splice(0,1)
    if(arr[leng] === '.') arr.splice(leng,1)

    let str = arr.join('')
    arr = str.split('');
    //  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 //16
    if(str.length >= 16) {
        arr = arr.slice(0,15)
        leng = arr.length -1
        if(arr[leng] === '.') arr.splice(leng,1)
        console.log(arr)

    }
    let result = ''
    if(arr<=2) {
        leng = arr.length
        let num = leng -1
        let last = arr[num];
        result = arr.joio('')
        for(let leng; arr.length<=3; leng++){
            result =+ last
        }
    }
    return result
}

// 다른 사람 풀이
function solution(new_id) {
    const answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, '');
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
function solution(nid) {
    var ans = "";
    for (let i = 0; i < nid.length; i++) {
        let c = nid[i].toLowerCase();
        if ("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(c) === -1) continue;
        if (c === "." && ans[ans.length - 1] === "." && nid[i - 1]) continue;
        ans += c;
    }
    if (ans[0] === ".") ans = ans.slice(1);
    ans = ans.slice(0, 15);
    if (ans[ans.length - 1] === ".") ans = ans.slice(0, ans.length - 1);
    if (!ans) ans = "a";
    while (ans.length < 3) ans += ans[ans.length - 1];
    return ans;
}


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
const solution = id => {
    id = id.toLowerCase()
    id = removeInvalidChar(id)
    id = removeInvalidDots(id)

    if (!id) {
        id = 'a'
    }

    if (id.length > 15) {
        id = id.slice(0, 15)
    }

    id = removeInvalidDots(id)

    if (id.length < 3) {
        let lastChild = id.charAt(id.length - 1)

        do {
            id += lastChild
        }
        while (id.length === 2)
    }

    return id
}

const removeStrIndex = (str, index) => {
    let result = str.split('')
    result.splice(index, 1)

    return result.join('')
}

const removeInvalidChar = str => {
    for (let i = 0; i < str.length; i++) {
        if (!(
            str.charCodeAt(i) === 45 ||
            str.charCodeAt(i) === 46 ||
            str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 ||
            str.charCodeAt(i) === 95 ||
            str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
        )) {
            str = str.replace(str[i], '')
            i--
        }
    }

    return str
}

const removeInvalidDots = str => {
    do {
        str = str.replace('..', '.')
    }
    while (str.indexOf('..') > -1)

    if (str.startsWith('.')) {
        str = removeStrIndex(str, 0)
    }
    if (str.endsWith('.')) {
        str = removeStrIndex(str, str.length - 1)
    }

    return str
}


2
3
4
5
6
7
8
9
10
11
12
const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')
    return id.padEnd(3, id[id.length-1])
}


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
function solution(nid) {
    var ans = "";
    for (let i = 0; i < nid.length; i++) {
        let c = nid[i].toLowerCase();
        if ("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(c) === -1) continue;
        if (c === "." && ans[ans.length - 1] === "." && nid[i - 1]) continue;
        ans += c;
    }
    if (ans[0] === ".") ans = ans.slice(1);
    ans = ans.slice(0, 15);
    if (ans[ans.length - 1] === ".") ans = ans.slice(0, ans.length - 1);
    if (!ans) ans = "a";
    while (ans.length < 3) ans += ans[ans.length - 1];
    return ans;
}
