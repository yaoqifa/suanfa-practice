/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) {
    return root
  }

  const queue = [root]
  while(queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()

      if (i < size - 1) {
        node.next = queue[0]
      }

      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }
  }
  return root
};
/**
 * @param {Node} root
 * @return {Node}
 */
// 优化细节为每个节点要做的事
// var connect = function(root) {
//   function traverse(node1, node2) {
//     if (node1 === null || node2 === null) {
//       return
//     }
//     // 两个节点相连
//     node1.next = node2.right
//     traverse(node1.left, node1.right)
//     traverse(node2.left, node2.right)

//     traverse(node1.right, node2.left)
//   }
//   traverse(root.left, root.right)
//   return root
// };
// @lc code=end

