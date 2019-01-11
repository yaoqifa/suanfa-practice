class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// 遍历二叉树
function traver (root) {
  if (root) {
    // first
    console.log(root)
    traver(root.left)
    // middle
    // console.log(root)
    traver(root.right)
    // last
    // console.log(root)
  }
}

function maxDepth (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
