class Node {
  constructor (ele) {
    this.element = ele
    this.next = null
  }
}

const linkedList = (() => {
  class linkedList {
    constructor () {
      this.head = null
      this.length = 0
    }
    // 向链表尾部追加元素
    append (ele) {
      let node = new Node(ele)
      let current
      if (this.head === null) {
        this.head = node
      } else {
        current = this.head
        while (current.next) {
          current = current.next
        }
        current.next = node
      }
      this.length++
    }
    // 向链表特定位置插入一个新的项, 0~length
    insert (position, ele) {
      if (position >= 0 && position <= this.length) {
        let node = new Node(ele)
        let current = this.head
        let pre
        let index = 0
        if (position === 0) {
          node.next = current
          this.head = node
        } else {
          while (index < position) {
            pre = current
            current = current.next
            index++
          }
          node.next = current
          pre.next = node
        }
        this.length++
      } else {
        return new Error('插入位置超出范围')
      }
    }
    // 根据元素的值删除元素,删除第一个与ele相等的元素
    remove (ele) {
      if(this.length === 0) {
        return new Error('链表为空，不如先插入元素试试')
      }
      let index = this.indexOf(ele)
      if (index === -1) {
        return new Error('链表里没有该元素')
      }
      return this.removeAt(index)
    }
    // 特定位置删除一个元素
    removeAt (position) {
      if (position >= 0 && position <= this.length) {
        let current = this.head
        let pre
        let index = 0
        if (position === 0) {
          this.head = current.next
        } else {
          while (index < position) {
            pre = current
            current = current.next
            index++
          }
          pre.next = current.next
        }
        this.length--
        return current.element
      } else {
        return new Error('删除位置超出范围')
      }
    }
    // 判断链表中是否有某项,没有则返回-1
    indexOf (ele) {
      let current = this.head
      let index = 0
      while (current) {
        if (current.element === ele) {
          return index
        }
        index++
        current = current.next
      }
      return -1
    }
    // 判断链表是否为空
    isEmpty () {
      return this.length === 0
    }
    // 返回长度
    size () {
      return this.length
    }
    // 返回头
    getHead () {
      return this.head
    }
    // 打印
    toString () {
      let current = this.head
      let str = ''
      while (current) {
        str += current.element + ' '
        current = current.next
      }
      return str
    }
  }

  return linkedList
})()

let ll = new linkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(1)
ll.toString()
ll.insert(5,5)
ll.remove(2)
ll.removeAt(4)
console.log(ll.toString())