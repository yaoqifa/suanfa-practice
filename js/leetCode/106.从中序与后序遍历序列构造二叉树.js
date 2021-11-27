/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  function build(inStart, inEnd, postStart, postEnd) {
    if (postStart > postEnd) {
      return null
    }
    const rootVal = postorder[postEnd]
    const index = inorder.indexOf(rootVal)
    const LeftTreeLength = index - inStart

    let root = new TreeNode(rootVal)
    root.left = build(inStart, index - 1, postStart, postStart + LeftTreeLength - 1)
    root.right = build(index + 1, inEnd, postStart + LeftTreeLength, postEnd - 1)
    return root
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1)
};
// @lc code=end

// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solution/tu-jie-guan-jian-dian-tong-guo-hou-xu-ji-q68f/