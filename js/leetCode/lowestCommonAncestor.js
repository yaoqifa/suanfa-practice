//示例 1:
// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出: 3
// 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
// 示例 2:

// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// 输出: 5
// 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。


// 说明:

// 所有节点的值都是唯一的。
// p、q 为不同节点且均存在于给定的二叉树中。

class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function commonAncestor (r, p, q) {
  if (r === null || r === p || r === q) {
    return r
  }
  let left = commonAncestor(r.left, p, q)
  let right = commonAncestor(r.right, p, q)
  if (left === null && right === null) {
    return r
  }
  return left !== null ? left : right
}