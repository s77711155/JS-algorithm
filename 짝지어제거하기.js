// function solution(s){
//     //console.log(s)
//     let temp = s;
//     let char = s.split('');
//     while(temp) {
//         for(let i in char) {
//             let nextIdx = i + 1;
//             if(i - 1<= nextIdx) {
//                 if(char[i] === temp[nextIdx]) {
//                     temp.splice(i,2)
//                      console.log(temp)
//                 }
//             }

//             //console.log(char)
//         }
//     }
//       // for(let i in char) {
//       //     console.log(char[i])
//       // }






// }

function solution(s){
    var arr = [];
    for(var i=0; i<s.length; i++){
        if(arr[arr.length-1] != s[i]){
            arr.push(s[i]);
        }else{
            arr.pop();
        }
    }
    return (arr.length>0) ? 0:1;
}