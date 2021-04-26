/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let sum = 0
  if (!s.length) {
    return 0
  }
  let res = s
  while(res) {
    let step = map[res.substr(0, 2)] ? 2 : 1
      sum += map[res.substr(0, step)]
      res = res.substr(step)
  }
  return sum
};
// @lc code=end

