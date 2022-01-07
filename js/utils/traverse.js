function traverse(root) {
 if (root === null) {
   return
 }
 // 前序位置，进入节点时, 自顶向下
 traverse(root.left)
 // 中序位置， bfs
 traverse(root.right)
 // 后序位置，离开节点时，自底向上
}

// 倒序打印链表

/* 递归遍历单链表，倒序打印链表元素 */
void traverse(ListNode head) {
  if (head == null) {
      return;
  }
  traverse(head.next);
  // 写在后序位置
  print(head.val);
}

// 1. 遍历思维 遍历一遍，比如最大深度，前序位置+，后序位置-
// 2. 子问题思维，分解成子问题

// lc 104

// 意味着前序位置的代码只能从函数参数中获取父节点传递来的数据，而后序位置的代码不仅可以获取参数数据，还可以获取到子树通过函数返回值传递回来的数据。

// 比如
// 1. 如果把根节点看做第 1 层，如何打印出每一个节点所在的层数？
// 前序位置打印，level参数传递
function traverse(root, level){
  if (root === null) return
  console.log(root, level)
  traverse(root.left)
  traverse(root.right)
}
// 2、如何打印出每个节点的左右子树各有多少节点？
// 后续位置打印，结果可以通过子问题返回值拿到
function traverse(root){
  if (root === null) return 0
  const leftCount = traverse(root.left)
  const rigthCount = traverse(root.right)
  console.log(root, leftCount, rigthCount)
  return 1 + leftCount + rigthCount
}