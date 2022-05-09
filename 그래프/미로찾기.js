let maze = [
    [0,0 ,0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0 ,0 ,0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0 ,0 ,0 ,0, 0]
];

function f(arr) {
    let level = arr.length;
    console.log(level,'level')
    let UpDownLeftRight = [
        [-1,0],[1,0],[0,1],[1,0]
    ];
    let result = 0;
    let temp = []
    function dfs(l) {
        if (l === level){
            resul++

            //console.log(temp)

        }else {

            for (let i=0; i<UpDownLeftRight.length; i++){
                let line = UpDownLeftRight[i][0] // 행
                let row = UpDownLeftRight[i][1] // 열
                //console.log(line, row)
                //console.log(arr[row][line],'arr[row][line]')
                if (arr[row][line]=== 0){
               console.log(arr[row][line],'arr[row][line]')
                    temp.push(arr[row][line]);
                    arr[row][line] = 1
                    dfs(l+1);
                    arr[row][line] = 0
                }

            }
        }
    }


    arr[0][0] = 1
    dfs(0)

    console.log(result,'result')
}

console.log(f(maze))