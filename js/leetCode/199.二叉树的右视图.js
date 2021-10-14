/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
// dfs 先right 后 left
var rightSideView2 = function(root) {
  if (root === null) {
    return []
  }
  let res = []
  dfs(root, 0 ,res)
  return res
};

function dfs(root, level, res) {
  if (root) {
    if (res[level] === undefined) {
      res[level] = root.val
    }
    if (root.right) {
      dfs(root.right, level + 1, res)
    }
    if (root.left) {
      dfs(root.left, level + 1, res)
    }
  }
}

// bfs 遍历，取每层的最后一个
var rightSideView = function(root) {
  if (root === null) {
    return []
  }
  let res = []
  let queue = [root]
  while(queue.length) {
    let len = queue.length
    let arr = []
    while(len) {
      const node = queue.shift()
      arr.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      len--
    }
    res.push(arr.pop())
  }

  return res
};
// @lc code=end

