// // let n = 3;
// // let arr = [1,2,5]
// //
// // function f(n,arr,money) {
// //     // dy 배열의 길이를 거스름돈줘야할 금액으로 맞춰춘다
// //     let dy = Array.from({length:money +1}, ()=> 0);
// //     // i는 arr의 인덱스를 가리킴
// //     for (let i = 0; i<arr.length; i ++){
// //         //코인이 1이면 1부터 돌아야하기 때문에
// //         for (let j=arr[i]; j<=money; j ++) {
// //             let target = arr[i];
// //             console.log(target,'===========================')
// //             console.log(dy[j],dy[j-target] +1 )
// //             console.log(dy[j]>dy[j-target] +1)
// //             dy[j] = dy[j-target] +1;
// //             // if(dy[j]>dy[j-target] +1){
// //             //     dy[j] = dy[j-target] +1;
// //             // }
// //             dy[j] = Math.min(dy[j], dy[j - arr[i]]+ 1)
// //         }9
// // }
//
// function getIdsByMessage(xml, message) {
//     //  Write your code here
//     console.log(xml.indexOf(message),'message')
//     let result = [];
//     let str = xml;
//     function dfs(s){
//         let findStr = s.indexOf(message);
//         console.log(findStr)
//         if (findStr === -1) return ;
//         let foundId = str.indexOf('id');
//         console.log(foundId,'foundId')
//         let ss = str.substring(findStr,str.length+1)
//         console.log(ss,'sssssss')
//         dfs(ss)
//     }
//
//     dfs(str)
//
//
//
//     // while(str.indexOf(message)!== -1){
//     //     let found = str.indexOf(message);
//     //     if(found === -1) break;
//     //     let foundId = str.indexOf('id');
//     //     console.log(found)
//     //     console.log(str)
//     //     result.push(str.substring(foundId+4,2))
//     //     str.substring(found)
//     //
//     // }
//
//     return result
// }
// var xmlData =
//     `<?xml version="1.0" encoding="UTF-8"?>
// <log>
//   <entry id="1">
//     <message>Application started</message>
//   </entry>
//   <entry id="2">
//     <message>Application ended</message>
//   </entry>
//   <entry id="3">
//     <message>Application ended</message>
//   </entry>
// </log>`;
//
// var ids = getIdsByMessage(xmlData, "Application ended");
// console.log(ids == undefined ? ids : ids.join())
//


function f(arr,str) {
    let count = 0;

    function dsf(a) {
        if (a.length <2) {
            return
        }else {
            for (let i =0;i< a.length; i++){

                if (Array.isArray(a[i])) {count = a[i].includes(str) ? count++ : count;}
                else{
                    console.log(a[i] === str,'a[i] === stra[i] === stra[i] === str')
                    count = a[i] === str ? count + 1 : count;
                }
                console.log(a[i], count)

                dsf(a[i])
            }
        }

    }

    dsf(arr)

    console.log(count,'count')

}
let arr = [
    25,
    'apple',
    [25, 1, 'love', [25]]
]
console.log(f(arr, 25))