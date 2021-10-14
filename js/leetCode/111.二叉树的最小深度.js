/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 递归左右子树的最小值
var minDepth = function(root) {
  if (root === null) {
    return 0
  }
  if (root.left === null) {
    return 1 + minDepth(root.right)
  }
  if (root.right === null) {
    return 1 + minDepth(root.left)
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};

// dfs 找到所有叶子节点中最小level
var minDepth2 = function(root) {
  if (root === null) {
    return 0
  }
  let min = Number.MAX_SAFE_INTEGER
  function dfs(root, level) {
    if (root) {
      // 找到所有叶子节点
      if (!root.left && !root.right) {
        min = Math.min(min, level)
      }
      dfs(root.left, level + 1)
      dfs(root.right, level + 1)
    }
  }
  dfs(root, 1)
  return min
};

// bfs 逐层 第一个叶子节点的层级
var minDepth3 = function(root) {
  if (root === null) {
    return 0
  }
  let queue = [root]
  let min = 0
  while(queue.length) {
    let len = queue.length
    min++
    while(len) {
      let node = queue.shift()
      if (node.left === null && node.right === null) {
        return min
      }
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
      len--
    }
  }
  return min
}

// @lc code=end

