/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n
  }
  let x = 1
  let y = 2
  for (let i = 3; i <= n; i++) {
    [x, y] = [y, x + y]
  }
  return y
};
// var climbStairs = function(n) {
//   if (n < 3) {
//     return n
//   }
//   let dp = Array.from({length: n})
//   dp[1] = 1
//   dp[2] = 2
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }
//   return dp[n]
// };
// @lc code=end

