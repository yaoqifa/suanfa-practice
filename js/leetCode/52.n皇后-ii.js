/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let num = 0
  const board = Array.from({length: n}, () => new Array(n).fill('.'))
  function check(row, col) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 'Q' && (j === col || i - j === row - col || i + j === row + col)) {
          return false
        }
      }
    }
    return true
  }
  function backtrace(row) {
    if (row === n) {
      num++
      return
    }
    for (let col = 0; col < n; col++) {
      if (check(row, col)) {
        board[row][col] = 'Q'
        backtrace(row + 1)
        board[row][col] = '.'
      }
    }
  }

  backtrace(0)
  return num;
};
// @lc code=end

// console.log(totalNQueens(4),
// totalNQueens(5),
// totalNQueens(6),
// totalNQueens(7),
// totalNQueens(8),
// totalNQueens(9),
// totalNQueens(10))


