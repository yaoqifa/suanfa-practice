/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) {
    return x
  }
  let l = 1;
  let r = x;
  let res
  while (l <= r) {
    let mid = parseInt((l + r) / 2)
    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x) {
      l = mid + 1
    } else {
      r = mid - 1
      res = r
    }
  }
  return res;
};

// var mySqrt = function(x) {
//   if (x === 0 || x === 1) {
//     return x
//   }
//   let r = x;
//   while (r > x / r) {
//     r = (r + x / r) / 2
//   }
//   return r;
// };
// @lc code=end

