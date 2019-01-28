// 每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。HF作为牛客的资深元老,自然也准备了一些小游戏。
// 其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。
// 每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,从他的下一个小朋友开始,
// 继续0...m-1报数....这样下去....直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。
// 请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)

// 这是个约瑟夫环的问题，可以上网查查，很经典的题目

// 简单的实现就是使用环形单链表，一圈一圈的绕，到了号为m的节点就删掉继续绕，最后只剩一个节点时，就可以返回了。
// 通过递推出下一次的叫号和编号的关系，来递归操作，详细可以看约瑟夫环

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

function lastRemainChild (n, m) {
  if (n < 1 || m < 1) {
    return -1
  }
  let head = null
  let last = null
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      head = new Node(i)
      last = head
    } else {
      last.next = new Node(i)
      last = last.next
    }
  }
  last.next = head

  let count = 0

  while (head !== last) {
    count++
    if (count === m) {
      last.next = head.next
      count = 0
    } else {
      last = last.next
    }
    head = head.next
  }
  return head.val
}


function lastRemainChild2 (n, m) {
  if (n === 0) {
    return -1
  }
  if (n === 1) {
    return 0
  }
  return (lastRemainChild2(n - 1, m) + m) % n
}