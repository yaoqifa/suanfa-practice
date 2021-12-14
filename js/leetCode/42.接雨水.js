/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let res = 0
  let len = height.length - 1
  let leftMax = height[0]
  let rightMax = height[len]
  let left = 0
  let right = len
  while(left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (leftMax < rightMax) {
      res += leftMax - height[left]
      left++
    } else {
      res += rightMax - height[right]
      right--
    }
  }

  return res
};

// var trap = function(height) {
//   let res = 0
//   let len = height.length - 1
//   let leftMax = []
//   let rightMax = []
//   leftMax[0] = height[0]
//   rightMax[len] = height[len]

//   for (let i = 1; i <= len; i++){
//     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//   }

//   for (let i = len - 1; i >= 0; i--){
//     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
//   }

//   for (let i = 0; i <= len; i++) {
//     // 每个格子只和左右最大值中的较小值有关
//     res += Math.min(leftMax[i], rightMax[i]) - height[i]
//   }

//   return res
// };
// @lc code=end

