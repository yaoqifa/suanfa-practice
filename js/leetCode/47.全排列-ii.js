/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique2 = function(nums) {
  let res = []
  // nums = nums.sort((a, b) => a - b)
  const len = nums.length
  const map = {}
  function backtrace(path) {
    if (path.length === len) {
      res.push(path.join(','))
      return
    }
    for (let i = 0; i < len; i++){
      if (!map[i]) {
        map[i] = true
        path.push(nums[i])
        backtrace(path.slice())
        path.pop()
        map[i] = false
      }
    }
  }

  backtrace([])
  res = [...new Set(res)]
  return res.map(v => v.split(',').map(i => Number(i)))
};

var permuteUnique = function(nums) {
  let res = []
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  const map = {}
  function backtrace(path) {
    if (path.length === len) {
      res.push(path)
      return
    }
    for (let i = 0; i < len; i++){
      if (!(map[i] || ( i > 0 && !map[i -1] && nums[i - 1] === nums[i]))) {
        map[i] = true
        path.push(nums[i])
        backtrace(path.slice())
        path.pop()
        map[i] = false
      }
    }
  }

  backtrace([])
  return res
};
// @lc code=end

// console.log(permuteUnique([1,1,2]))