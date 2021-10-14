/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {}
  let res = []
  nums.forEach((v, index) => {
    if (obj[v] === undefined) {
      obj[target - v] = index
    } else {
      res = [obj[v], index]
    }
  })
  return res
};
// @lc code=end

