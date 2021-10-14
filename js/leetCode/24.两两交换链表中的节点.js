/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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

var swapPairs = function(head) {
  // 1 确认head 大于等于2个
  if (!head || !head.next) return head;
  // 2 新建链表哨兵头并创建指针cur
  let result = new ListNode(null);
  result.next = head;
  let prev = result;
  // 3 循环开始 3.1 走两步，存为first second
  // 3.2 prev.next:second  first.next:second.next  second.next:first
  // 3.3 推进prev: prev.next.next
  while(prev.next && prev.next.next) {
    let [first, second] = [prev.next, prev.next.next];
    // 注意要加分号，不然会报错
    [prev.next, first.next, second.next ] = [second, second.next, first];
    prev = prev.next.next;
  }
  return result.next;
};

// @lc code=end

