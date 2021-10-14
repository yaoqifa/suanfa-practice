/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  const m = Math.sqrt(n)
  return Number.isInteger(m) && m > 0 && !(m & (m - 1))
};
// @lc code=end

