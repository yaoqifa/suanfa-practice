// 重建二叉树

// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function reConstructBinaryTree (pre, mid) {
  let root = reCon(0, pre.length - 1, pre, 0, mid.length - 1, mid)
  return root
}

function reCon (pStart, pEnd, pre, mStart, mEnd, mid) {
  if (pStart > pEnd || mStart > mEnd) {
    return null
  }
  let r = pre[pStart]
  let node = new Node(r)
  for (let i = mStart; i <= mEnd; i++) {
    if (r === mid[i]) {
      node.left = reCon(pStart + 1, pStart + i - mStart, pre, mStart, i - 1, mid)
      node.right = reCon(pStart + i - mStart + 1, pEnd, pre, i + 1, mEnd, mid)
    }
  }
  return node
}