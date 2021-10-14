/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const len = coins.length
  if (len === 0) {
    return -1
  }
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < len; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
};
// @lc code=end

