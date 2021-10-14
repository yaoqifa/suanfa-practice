/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1
  let max = 0
  while(left < right) {
    max = Math.max(max, (right - left) * (height[right] > height[left] ? height[left++] : height[right--]))
  }
  return max
};
// @lc code=end

