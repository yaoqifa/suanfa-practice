/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function build(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd) {
      return null
    }
    const rootVal = preorder[preStart]
    const index = inorder.indexOf(rootVal)
    const leftTreeLength = index - inStart

    let root = new TreeNode(rootVal)
    root.left = build(preStart + 1, preStart + leftTreeLength, inStart, index - 1)
    root.right = build(preStart + leftTreeLength + 1, preEnd, index + 1, inEnd)
    return root
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1)
};
// @lc code=end

