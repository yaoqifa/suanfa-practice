/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//  var longestCommonSubsequence = function(text1, text2) {
//   const len1 = text1.length
//   const len2 = text2.length
//   const dp = Array.from({ length: len1 }, () => new Array(len2).fill(0))

//   for (let i = 0; i < len1; i++) {
//     dp[i][0] = text1[i] === text2[0] ? 1 : 0
//   }
//   for (let j = 0; j < len2; j++) {
//     dp[0][j] = text1[0] === text2[j] ? 1 : 0
//   }

//   for (let i = 1; i < len1; i++) {
//     for (let j = 1; j < len2; j++) {
//       if (text1[i] === text2[j]) {
//         dp[i][j] = 1 + dp[i - 1][j - 1]
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1])
//       }
//     }
//   }

//   return dp[len1 - 1][len2 - 1]
// };

// 自顶向下带备忘录 递归写法
var longestCommonSubsequence = function(text1, text2) {
  const len1 = text1.length
  const len2 = text2.length
  const memo = Array.from({ length: len1}, () => new Array(len2).fill(-1))

  function dp(i, j) {
    if (i === len1 || j === len2) {
      return 0
    }
    // 计算过
    if (memo[i][j] !== -1) {
      return memo[i][j]
    }
    if (text1[i] === text2[j]) {
      memo[i][j] = 1 + dp(i + 1, j + 1)
    } else {
      memo[i][j] = Math.max(dp(i + 1, j), dp(i, j + 1))
    }
    return memo[i][j]
  }

  return dp(0, 0)
};

// var longestCommonSubsequence = function(text1, text2) {
//   const len1 = text1.length
//   const len2 = text2.length
//   const dp = Array.from({ length: len1}, () => new Array(len2).fill(0))
//   let res = 0
//   if (!len1 || !len2) {
//     return res
//   }

//   for (let i = 0; i < len1; i++) {
//     for (let j = 0; j < len2; j++) {
//       let cur = text1[i] === text2[j] ? 1 : 0
//       if (i === 0 && j === 0) {
//         dp[i][j] = cur
//       } else if (i === 0) {
//         dp[i][j] = Math.max(dp[i][j - 1], cur)
//       } else if (j === 0) {
//         dp[i][j] = Math.max(dp[i - 1][j], cur)
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1] + cur)
//       }
//       res = Math.max(cur, dp[i][j])
//     }
//   }

//   return res
// };
// @lc code=end

