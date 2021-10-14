/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = []
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for(let i = 0; i < s.length; i++) {
    let v = s[i]
    if (!map[v]) {
      arr.push(v)
    } else if (map[v] && arr.length && map[v] === arr[arr.length - 1]) {
      arr.pop()
    } else {
      return false
    }
  }
  return arr.length === 0
};
// @lc code=end

