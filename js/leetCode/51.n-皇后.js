/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = []
  const board = Array.from({length: n}, () => new Array(n).fill('.'))

  function isValid(row, col) {
    for(let i = 0; i < row; i++) {
      for(let j= 0; j < n; j++) {
        if (board[i][j] === 'Q' && (j === col || i - j === row - col || i + j === row + col)) {
          return false
        }
      }
    }
    return true
  }
  function backtrace(row) {
    if (row === n) {
      const temp = board.slice()
      temp.forEach((item, index) => {
        temp[index] = item.join('')
      })
      res.push(temp)
      return
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q'
        backtrace(row + 1)
        board[row][col] = '.'
      }
    }
  }
  backtrace(0)
  return res
};
// @lc code=end

// console.log(solveNQueens(4),
// solveNQueens(5),
// solveNQueens(6),
// solveNQueens(7),
// solveNQueens(8),
// solveNQueens(9),
// solveNQueens(10))

result = []
function backtrack(root, n) {
  if (fullfilled) {
    result.push(root)
    return
  }
  // for 循环中递归，backtrack前做选择，backtrack后撤销
  for (let i = 0; i < root.length; i++) {
    // chose
    backtrack(root, i)
    // no chose
  }
}