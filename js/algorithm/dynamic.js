// 1.自底向上分解子问题 2.通过变量存储已经计算过的解

function fib (n) {
  let arr = new Array(n + 1).fill(null)
  arr[0] = 1
  arr[1] = 1
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

// 最长递增子序列意思是在一组数字中，找出最长一串递增的数字，比如 0, 3, 4, 17, 2, 8, 6, 10

function fis (n) {
  if (n.length === 0) return 0
  let arr = new Array(n.length).fill(1)
  for (let i = 1; i < n.length; i++) {
    for (let j = 0; j < i; j++) {
      if (n[i] > n[j]) {
        arr[i] = Math.max(arr[i], 1 + arr[j])
      }
    }
  }
  let max = arr[0]
  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k])
  }
  return max
}

// 0 1 背包

/**
 *
 *
 * @param {*} w Array 重量
 * @param {*} v Array 价值
 * @param {*} C 总容量
 */
function bag (w, v, c) {
  let len = w.length
  if (len === 0) return 0
  // 对照表格，生成的二维数组，第一维代表物品，第二维代表背包剩余容量
  // 第二维中的元素代表背包物品总价值
  let arr = new Array(len).fill(new Array(c + 1).fill(null))

  for (let i = 0; i <= c; i++) {
    arr[0][i] = i >= w[0] ? v[0] : 0
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= c; j++) {
      arr[i][j] = arr[i - 1][j]
      if (j >= w[i]) {
        arr[i][j] = Math.max(arr[i][j], v[i] + arr[i - 1][j - w[i]])
      }
    }
  }
  return arr[len - 1][c]
}