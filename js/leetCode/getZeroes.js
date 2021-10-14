// 给定一个整数 n，返回 n! 结果尾数中零的数量。
// 示例 1:
// 输入: 3
// 输出: 0
// 解释: 3! = 6, 尾数中没有零。
// 示例 2:
// 输入: 5
// 输出: 1
// 解释: 5! = 120, 尾数中有 1 个零.
// 说明: 你算法的时间复杂度应为 O(log n) 。

function getZeroes (n) {
  let count = 0
  while (n) {
    count += devide(n, 5)
    n = devide(n, 5)
  }
  return count
}

function devide (n, m) {
  return Math.floor(n / m)
}

function getZeroes2 (n) {
  let count = 0
  for (let i = 0; i < n; i++) {
    let temp = i
    while (temp % 5 === 0) {
      temp = temp / 5
      count++
    }
  }
  return count
}