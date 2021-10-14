/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  if (!len) return []

  let window = []
  let res = []

  for (let i = 0; i < len; i++) {
    // 窗口左边的不在范围内移除
    if (i >= k && window[0] <= i - k) {
      window.shift()
    }

    // 从右边开始，删除所有比进来的数小的
    while (window.length && nums[window[window.length - 1]] < nums[i]) {
      window.pop()
    }
    window.push(i)
    if (i >= k - 1) {
      res.push(nums[window[0]])
    }
  }

  return res
};
// @lc code=end

