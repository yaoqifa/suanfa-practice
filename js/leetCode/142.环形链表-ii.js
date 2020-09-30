/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/141ti-de-kuo-zhan-ru-guo-lian-biao-you-huan-ru-he-/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast) {
      if (!fast.next) return null;
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) { // 相遇
        fast = head;
        while(true) {
          if (fast === slow) {
            return fast;
          }
          fast = fast.next;
          slow = slow.next;
        }
      }
    }
    return null;
};
// @lc code=end

