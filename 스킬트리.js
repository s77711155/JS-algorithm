/*
  제코베 66번 문제랑 유사
  프로그래머스 스킬트리
*/
const skil = "CBD";
const skil_tree = ["BACDE", "CBADF", "AECB", "BDA"];

function solution(skil, skil_tree) {
  let result = 0;
  let split = skil.split('');


  for (let word of skil_tree) {
    for(let i in split){
      if (word.includes(split[i])) {
        result +=0
    }else {
        result += wordOrder(word, skil);
    }
    }
    
   
  }
  return result;
}

function wordOrder(word, skil) {
  let index = skil.indexOf(skil[0]);
  for (let s of word) {
    if (skil.includes(s)) {
      if (index > skil.indexOf(s)) {
        return 0;
      }
      index = skil.indexOf(s);
    }
  }
  return 1;
}

//BACDE
//CBD

//=> 저방식은 테스트케이스 통과 x


// 다른 방법
function solution(skill, skill_trees) {
    const skill_split = skill.split(''); // ['C', 'B', 'D']
    let count = 0; // 통과한 skill 갯수  
    let str = ''; // 체크 할 string 
    
    for (let i in skill_trees) {
      str = skill_trees[i].split('').filter(e => skill_split.includes(e)).join('');
      /*
        filter를 통해 C, B, D 포함된 값만 추출 할 수 있다 
          BCD
        CBD
        CB
        BD
        추출한 후 기존 skill과 순서가 같은지 체크해주면 된다
      */
      if (skill.substr(0, str.length) === str) {
          count++;
      }
    }
    
    return count;
  }