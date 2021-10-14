/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (root === null) {
    return true
  }
  if (min !== null && root.val <= min) {
    return false
  }

  if (max !== null && root.val >= max) {
    return false
  }

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};


// 中序遍历 inorder
var isValidBST2 = function(root) {
  const queue = []

  function dfs(node) {
    if (node === null) {
      return
    }
    node.left && dfs(node.left)
    queue.push(node.val)
    node.right && dfs(node.right)
  }
  dfs(root)

  for(let i = 0; i < queue.length - 1; i++) {
    if (queue[i] >= queue[i + 1]) {
      return false
    }
  }
  return true
}
// @lc code=end

