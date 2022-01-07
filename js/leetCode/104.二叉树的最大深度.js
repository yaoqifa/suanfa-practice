/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

// 子问题
var maxDepth = function(root) {
  if (root === null) {
    return 0
  }
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
}

// 遍历
//  var maxDepth = function(root) {
//   let res = 0;
//   let depth = 0
//   function traverse(root) {
//     if (root === null) {
//       res = Math.max(res, depth)
//       return
//     }
//     // 前序位置+
//     depth++
//     traverse(root.left)
//     traverse(root.right)
//     // 后续位置-
//     depth--
//   }
//   traverse(root)
//   return res
// };


// var maxDepth = function(root) {
//   if (root === null) return 0;
//   const leftMaxDepth = maxDepth(root.left);
//   const rightMaxDepth = maxDepth(root.right);
//   return 1 + Math.max(leftMaxDepth, rightMaxDepth);
// };
// @lc code=end

