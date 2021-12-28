/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const len1 = word1.length
  const len2 = word2.length

  const memo = Array.from({length: len1}, () => new Array(len2).fill(-1))

  function dp(i, j) {
    if (i === len1 || j === len2) {
      return 0
    }

    if (memo[i][j] !== -1) {
      return memo[i][j]
    }

    if (word1[i] === word2[j]) {
      memo[i][j] = dp(i + 1, j + 1) + 1
    } else {
      memo[i][j] = Math.max(dp(i + 1, j), dp(i, j + 1))
    }

    return memo[i][j]
  }
  const longest = dp(0, 0)
  return len1 - longest + len2 - longest
};
// var minDistance = function(word1, word2) {
//   const len1 = word1.length
//   const len2 = word2.length

//   const dp = Array.from({length: len1}, () => new Array(len2).fill(-1))

//   for (let i = 0; i < len1; i++) {
//     for (let j = 0; j < len2; j++) {
//       const cur = word1[i] === word2[j] ? 1 : 0
//       if (i === 0 && j === 0) {
//         dp[0][0] = cur
//       } else if (i === 0) {
//         dp[0][j] = Math.max(dp[0][j - 1], cur)
//       } else if (j === 0) {
//         dp[i][0] = Math.max(dp[i - 1][0], cur)
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + cur)
//       }
//     }
//   }
//   const longest = dp[len1 - 1][len2 - 1]
//   return len1 - longest + len2 - longest
// };
// @lc code=end

