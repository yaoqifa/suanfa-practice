/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = Number.MIN_SAFE_INTEGER
  let pre = 0
  nums.forEach(v => {
    pre = Math.max(pre + v, v)
    max = Math.max(pre, max)
  })
  return max
};
// @lc code=end

