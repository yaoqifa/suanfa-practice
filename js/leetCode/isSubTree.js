// 输入两棵二叉树A，B，判断B是不是A的子结构

// 假设树A的根节点ra和树B的根节点rb值相同，那么接下来就以这两个节点开始依次比较ra.left和rb.left、ra.right和rb.right，
// 过程中只要有一个不相同则返回；继续比较ra.left和rb是否相同、ra.right和rb是否相同，就这样依次进行下去，
// 时间复杂度则为O(树A的节点数)*O(树B的节点数)

class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function isSubTree (r1, r2) {
  if (r1 === null || r2 === null) {
    return false
  }
  return check(r1, r2) || isSubTree(r1.left, r2) || isSubTree(r1.right, r2)
}

function check (a, b) {
  // 边界
  if (b === null) {
    return true
  }
  if (a === null || a.val !== b.val) {
    return false
  }
  return check(a.left, b.left) && check(a.right, b.right)
}