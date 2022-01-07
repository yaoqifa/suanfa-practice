/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let res = 0
  function traverse(root) {
    if (root === null) {
      return 0
    }
    const leftDiameter = traverse(root.left)
    const rigthDiameter = traverse(root.right)
    res = Math.max(leftDiameter + rigthDiameter, res)
    return 1 + Math.max(leftDiameter, rigthDiameter)
  }
  traverse(root)
  return res
};
// @lc code=end

