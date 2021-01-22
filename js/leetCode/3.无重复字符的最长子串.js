/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   if (!s) {
//     return 0
//   }
//   if (s.length === 1) {
//     return 1
//   }
//   let max = 1
//   for (let i = 0; i < s.length; i++) {
//     let temp = s[i]
//     for (let j = i + 1; j < s.length; j++) {
//       if (temp.indexOf(s[j]) === -1) {
//         temp += s[j]
//         max = Math.max(temp.length, max)
//       } else {
//         break
//       }
//     }
//   }

//   return max
// };

var lengthOfLongestSubstring = function(s) {
  if (!s) {
    return 0
  }
  if (s.length === 1) {
    return 1
  }
  let max = 1
  let arr = []
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i])
    if (index > -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s[i])
    max = Math.max(arr.length, max)
  }

  return max
};
// @lc code=end

