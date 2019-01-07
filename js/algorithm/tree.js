class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
const BST = (() => {
  class BST {
    constructor () {
      this.root = null
    }
    // 向树中插入一个新的键
    insert (key) {}
    // 在树中查找一个键，节点存在返回true，否则false
    search (key) {}
    // 中序遍历
    inOrderTraverse () {}
    // 前序遍历
    preOrderTraverse () {}
    // 后序遍历
    postOrderTraverse () {}
    // 查找最小值
    min () {}
    // 查找最大值
    max () {}
    // 删除一个值
    remove (key) {}
  }
  return BST
})()