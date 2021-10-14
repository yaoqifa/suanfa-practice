/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = {}
  let col = {}
  let smallBoard = {}
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j]
      if ( val !== '.') {
        const smallIndex = parseInt(i / 3) * 3 + parseInt(j / 3)
        if (row[i + '-' + val] || col[j + '-' + val] || smallBoard[smallIndex + '-' + val]) {
          return false
        }
        row[i + '-' + val] = 1
        col[j + '-' + val] = 1
        smallBoard[smallIndex + '-' + val] = 1
      }
    }
  }

  return true
};

// @lc code=end

