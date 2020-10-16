/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = []
  const mIndex = matrix.length - 1
  if (mIndex === -1) {
    return res
  }
  const nIndex = matrix[0].length - 1
  let m = mIndex
  let n = nIndex
  let i = 0
  let j = 0
  let direction = 1

  for (let v = 0; v < (mIndex + 1) * (nIndex + 1); v++) {
    res.push(matrix[i][j])
    switch(direction) {
      case 1:
        if (j === n) {
          direction = 2
          i++
        } else {
          j++
        }
        break
      case 2:
        if (i === m) {
          direction = 3
          j--
        } else {
          i++
        }
        break
      case 3:
        if (j === nIndex - n) {
          direction = 4
          m--
          n--
          i--
        } else {
          j--
        }
        break
        case 4:
        if (i === mIndex - m) {
          direction = 1
          j++
        } else {
          i--
        }
        break
    }
  }

  return res
};
// @lc code=end

