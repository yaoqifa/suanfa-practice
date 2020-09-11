/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = ''
  const m = s.length
  const dp = Array.from({length: m}, () => new Array(m).fill(false))

  for (let i = m - 1; i >= 0; i--) {
    for (let j = i; j < m; j++) {
      dp[i][j] = s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.substr(i, j - i + 1)
      }
    }
  }
  return result
};
// @lc code=end
