/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let res = nums[0]
  let curMax = res
  let curMin = res
  const len = nums.length

  for (let i = 1; i < len; i++) {
    let tempMax = curMax * nums[i]
    let tempMin = curMin * nums[i]

    curMax = Math.max(tempMax, tempMin, nums[i])
    curMin = Math.min(tempMax, tempMin, nums[i])

    res = Math.max(res, curMax)
  }

  return res
};

// var maxProduct = function(nums) {
//   let res = nums[0]
//   const len = nums.length
//   const dp = Array.from({length: len}, () => [])
//   dp[0] = [nums[0], nums[0]]

//   for (let i = 1; i < len; i++) {
//     dp[i][0] = Math.max(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])
//     dp[i][1] = Math.min(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])
//     res = Math.max(res, dp[i][0])
//   }

//   return res
// };
// @lc code=end

