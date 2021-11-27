function solution(rows, columns, queries) {
    let board =
        Array(rows).fill().map((row, i) => {

            return Array(columns).fill().map((column, j) => {
                return i * columns + j + 1
            });

        })
    console.log(board)


    const rotate = function (query) {
        let [x1, y1, x2, y2] = query;
        x1--, y1--, x2--, y2--;
        // 2,2,5,4
        // [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]))
        console.log(x1, y1, x2, y2,'x1, y1, x2, y2]')

        // 1 1 4 3
        const ft = board[x1][y1];



        const arr = [ft];
        console.log(arr,'arr')
        // left
        for (let i = x1; i < x2; i++) {
            arr.push(board[i][y1] = board[i + 1][y1]);
        }
        console.log(arr,'left')
        console.log(board,'left')
        //bottom
        for (let j = y1; j < y2; j++) {
           console.log( board[x2][j + 1],'?')
            arr.push(board[x2][j] = board[x2][j + 1]);
        }
        console.log(arr,'left')
        console.log(board,'bottom')

        // 오른측면
        for (let i = x2; i > x1; i--) {
            arr.push(board[i][y2] = board[i - 1][y2]);
        }
        console.log(arr,'left')

        console.log(board,'sssss')



        for (let j = y2; j > y1; j--) {
            arr.push(board[x1][j] = board[x1][j - 1]);
        }

        board[x1][y1 + 1] = ft;

        return Math.min(...arr);
    }

    return queries.reduce((ans, query) => {
        ans.push(rotate(query));
        return ans;
    }, []);


}


console.log(solution(	6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]));
// (2, 2, 5, 4)
// 행렬의 세로 길이(행 개수) rows, 가로 길이(열 개수) columns