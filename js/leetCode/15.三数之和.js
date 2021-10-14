/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双层循环后 map法
var threeSum2 = function(nums) {
  let res = []
  const len = nums.length
  if (len < 3) {
    return res
  }
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 1; i++) {
    let map = {}
    const ni = nums[i]
    if (i >=1 && ni === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < len; j++) {
      const nj = nums[j]
      const nij = -ni - nj
      if (nj === nums[j - 1]) {
        continue
      }
      if (map[nj]) {
        res.push([ni, nij, nj])
      } else {
        map[nij] = 1;
      }
    }
  }
  return res
};

// 双指针逼近法
var threeSum = function(nums) {
  let res = []
  const len = nums.length
  if (len < 3) {
    return res
  }
  nums.sort((a, b) => a - b)
  if (nums)
  for (let i = 0; i < len - 2; i++) {
    const ni = nums[i]
    if (i >= 1 && ni === nums[i - 1]) {
      continue
    }
    let j = i + 1
    let k = len - 1
    while(j < k) {
      const sum = ni + nums[j] + nums[k]
      if (sum === 0) {
        res.push([ni, -ni - nums[j], nums[j]])
        j++
        while(nums[j] === nums[j - 1]) {
          j++
        }
        while(nums[k] === nums[k - 1]) {
          k--
        }
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }
  return res
};
// @lc code=end

