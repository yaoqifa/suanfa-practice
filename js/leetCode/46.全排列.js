/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  const len = nums.length
  function backtrace(path) {
    if (path.length === len) {
      res.push(path)
      return
    }
    for (let i = 0; i < len; i++){
      if (!path.includes(nums[i])) {
        path.push(nums[i])
        backtrace(path.slice())
        path.pop()
      }
    }
  }

  backtrace([])
  return res
};
// @lc code=end

// console.log(permute([1,3,2]))