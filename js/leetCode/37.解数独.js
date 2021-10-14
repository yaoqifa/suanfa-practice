/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let res = JSON.parse(JSON.stringify(board))

  function backtrace(row) {
    if (row === 9) {
      return
    }
    for(let j = 0; j < 9; j++) {
      if (res[row][j] === '.') {
        for (let val = 1; val <= 9; val++) {
          if (isValid(res, val)) {
            res[row][j] = val
            backtrace(row + 1)
            res[row][j] = '.'
          }
        }
      }
    }
  }
  backtrace(0)
  return res
};

function isValid(board, val) {
  let rows = {}
  let cols = {}
  let sBoard = {}
  for(let i = 0; i < 9; i++) {

  }
}
// @lc code=end

