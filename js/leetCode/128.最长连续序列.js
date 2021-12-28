/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums)
  let res = 0

  for (let num of set) {
    if (!set.has(num - 1)) {
      let curNum = num
      let curLongest = 1
      while(set.has(++curNum)) {
        curLongest++
      }
      res = Math.max(res, curLongest)
    }
  }
  return res
};
// @lc code=end

