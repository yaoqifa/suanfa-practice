// 用两个栈模拟队列

let s1 = [] // s1 用于入栈
let s2 = [] // s2 用于出栈

function push (val) {
  if (s1.length === 0 && s2.length > 0) {
    transfer(s2, s1)
  }
  s1.push(val)
}

function pop () {
  if (s1.length > 0 && s2.length === 0) {
    transfer(s1, s2)
  }
  return s2.pop()
}

function transfer (a, b) {
  while (a.length > 0) {
    b.push(a.pop())
  }
}