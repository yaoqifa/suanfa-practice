/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

 // 前缀和

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const len = nums.length
  let count = 0
  // 初始化减k后为0的map是1
  let map = {0: 1}
  let sumI = 0

  for(let i = 0; i < len; i++) {
    sumI += nums[i]
    let sumJ = sumI - k
    if (map[sumJ]) {
      count += map[sumJ]
    }
    map[sumI] = map[sumI] ? map[sumI] + 1 : 1
  }

  return count
};
// time limit exceeded
// var subarraySum = function(nums, k) {
//   const len = nums.length
//   let sums = new Array(len + 1).fill(0)

//   for(let i = 0; i < len; i++) {
//     sums[i + 1] = sums[i] + nums[i]
//   }
//   let count = 0

//   for (let i = 1; i < len + 1; i++) {
//     for (let j = 0; j < i; j++) {
//       if (sums[i] - k === sums[j]) {
//         count++
//       }
//     }
//   }
//   return count
// };
// @lc code=end

