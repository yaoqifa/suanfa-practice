/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  let count = 0;
  while (n > 1) {
    if (n === 3) {
      n--
    } else if (n % 2 === 0) {
      n >>>= 1
    } else {
      n = (n + 1) % 4 === 0 ? n + 1 : n - 1
    }
    count++
  }

  return count
};
// @lc code=end

