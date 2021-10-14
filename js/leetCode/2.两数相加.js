/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = null
  let tail = null
  let carry = 0
  while(l1 || l2) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0
    let res = n1 + n2 + carry

    if (!head) {
      head = tail = new ListNode(res % 10)
    } else {
      tail.next = new ListNode(res % 10)
      tail = tail.next
    }
    carry = Math.floor(res / 10)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry) {
    tail.next = new ListNode(carry)
  }
  return head
};
// @lc code=end

