/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const memo = Array.from({length: n + 1}, () => new Array(n + 1).fill(0))
  function count(lo, hi) {
    if (lo > hi) return 1
    if (memo[lo][hi] !== 0) {
      return memo[lo][hi]
    }
    let res = 0
    for (let i = lo; i <= hi; i++) {
      const left = count(lo, i - 1)
      const right = count(i + 1, hi)
      res += left * right
    }
    memo[lo][hi] = res
    return res
  }
  return count(1, n)
};
// @lc code=end

