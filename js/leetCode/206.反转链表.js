/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let [prev, cur] = [null, head]
  while(cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  return prev
};

// @lc code=end

// var reverseList2 = function(head) {
//   return reverse(null, head)
// };

// function reverse(prev, cur) {
//   if (!cur) return prev
//   const temp = cur.next
//   cur.next = prev
//   return reverse(cur, temp)
// }

