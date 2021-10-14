/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// backtrace + 剪枝
var generateParenthesis = function(n) {
  let res = []
  if (n === 0) {
    return []
  }
  function generateOneByOne(n, left, right, str) {
    if (left === n && right === n) {
      res.push(str)
    }
    if (left < n) {
      generateOneByOne(n, left + 1, right, `${str}(`)
    }
    if (left > right && right < n) {
      generateOneByOne(n, left, right + 1, `${str})`)
    }
  }
  generateOneByOne(n, 0, 0, '')
  return res
};
// @lc code=end

