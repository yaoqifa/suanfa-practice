class LinkNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}
/** 1->2->3->4->5->6
                ↑  ↓
                8<-7
通常判断链表是否有环，会采用快慢指针的方法，其实道理很简单，就像两个人赛跑且一个人跑得快一个人跑得慢。
如果赛道是直的，那么快人跑到终点时慢人还未到；如果赛道是环形，则快人和慢人总会相遇。
// 找到入环节点
在确定链表有环之后，慢指针重新指向链表头，快指针留在相遇处；然后快慢指针再以每次移动1个节点的速度前进，最终他们在入环节点相遇
*/

function linkListCircle (head) {
  if (head === null) {
    return
  }
  let fast = head
  let slow = head
  while (fast.next !== null && slow.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (fast === next) {
      break
    }
  }
  if (fast === null || slow === null) {
    return null
  }
  slow = head
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

// 删除有序链表中的重复节点，返回头节点
// 删除掉所有重复节点，例如1->1->2->2->3->4，返回3->4
// 重复的节点中保留一个，例如1->1->2->2->3->4，返回1->2->3->4

function delDulplication (head) {
  if (head === null || head.next === null) {
    return
  }
  let link = new LinkNode(null)
  link.next = head
  let pre = link
  let cur = head
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      // pre = cur 保留一个重复的节点
      let temp = cur.val
      while (cur !== null && cur.val === temp) {
        cur = cur.next
      }
      pre.next = cur
    } else {
      pre = cur
      cur = cur.next
    }
  }
  return link.next
}