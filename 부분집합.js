function sol(nums) {
   const res = [];
   const dfs = (s =0, arr =[]) => {
       console.log(arr,'여기로는?arr')
       res.push(arr)
       for (let i= s; i< nums.length; i++){
           console.log(arr,'arr')
           console.log(i,[...arr, nums[i]],'시작')
           dfs(i+1,[...arr, nums[i]])
           console.log(i,[...arr, nums[i]],'끝')
       }
   };
    dfs()
    return res
}
console.log(sol([1,2,3]));