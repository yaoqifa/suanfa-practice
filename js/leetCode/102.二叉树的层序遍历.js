/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 // bfs queue
var levelOrder = function(root) {
  let res = []
  if (root === null) {
    return res
  }
  let queue = [root]

  while(queue.length) {
    let length = queue.length
    let arr = []
    while(length) { // 把当前层所有节点都遍历完
      let node = queue.shift()
      arr.push(node.val)
      // 每个节点的下一层子节点 都重新添加进去，用于下一次遍历
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      length--
    }
    res.push(arr)
  }
  return res
}


 // dfs
var levelOrder2 = function(root) {
  if (root === null) {
    return []
  }
  let res = []
  dfs(root, 0 , res)
  return res
};

function dfs(root, level, res) {
  if (root === null) {
    return
  }
  if (!res[level]) {
    res[level] = []
  }
  res[level].push(root.val)
  dfs(root.left, level + 1, res)
  dfs(root.right, level + 1, res)
}
// @lc code=end

