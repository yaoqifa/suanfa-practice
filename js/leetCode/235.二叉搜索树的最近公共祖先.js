/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// recursion
var lowestCommonAncestor2 = function(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor2(root.left, p , q)
    }
    if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor2(root.right, p , q)
    }
    return root
  };

// not recursion
var lowestCommonAncestor = function(root, p, q) {
  let ancestor = root
  while (true) {
    if (ancestor.val > p.val && ancestor.val > q.val) {
      ancestor = ancestor.left
    } else if (ancestor.val < p.val && ancestor.val < q.val) {
      ancestor = ancestor.right
    } else {
      break
    }
  }
  return ancestor
};
// @lc code=end
