/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = []
  const len = nums.length
  if (len < 4) {
    return []
  }
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 3; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break
    }
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
      continue
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break
      }
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
        continue
      }
      let third = j + 1;
      let forth = len - 1;
      while(third < forth) {
        const sum = nums[i] + nums[j] + nums[third] + nums[forth]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[third], nums[forth]])
          while(third < forth && nums[third] === nums[third + 1]) {
            third++
          }
          third++
          while(third < forth && nums[forth] === nums[forth - 1]) {
            forth--
          }
          forth--
        } else if (sum > target) {
          forth--
        } else {
          third++
        }
      }
    }
  }
  return res
};
// @lc code=end

