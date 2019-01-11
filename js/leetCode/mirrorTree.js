class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
// 分解问题后的子问题是什么，也就是重复的那一部分是什么？
// 什么时候结束重复？即终止条件是什么
// 重复的问题就是交换左右子树
function mirror (root) {
  if (!root) {
    return
  }
  [root.left, root.right] = [root.right, root.left]
  mirror(root.left)
  mirror(root.right)
}

function mirror2 (root) {
  if (!root) {
    return
  }
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let cur = queue.shift()
    if (cur) {
      [cur.left, cur.right] = [cur.right, cur.left]
      queue.push(cur.left)
      queue.push(cur.right)
    }
  }
}