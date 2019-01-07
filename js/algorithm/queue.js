const Queue = (() => {
  const wp = new WeakMap()
  class Queue {
    constructor () {
      wp.set(this, [])
    }

    enqueue (ele) {
      wp.get(this).push(ele)
    }
    dequeue () {
      return wp.get(this).shift()
    }
    front () {
      return wp.get(this)[0]
    }
    isEmpty () {
      return wp.get(this).length === 0
    }
    size () {
      return wp.get(this).length
    }
    print () {
      return wp.get(this).toString()
    }
  }

  return Queue
})()

let q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

q.dequeue()

console.log(q.print())

function flower (arr, num) {
  let que = new Queue()

  for (let i = 0; i < arr.length; i++) {
    que.enqueue(arr[i])
  }
  let name = ''
  while (que.size() > 1) {
    for (let i = 0; i < num; i++) {
      que.enqueue(que.dequeue())
    }
    name = que.dequeue()
    console.log(name + '  get out')
  }
  console.log(que.dequeue() + '  win')
}
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

flower(arr, 8)


// i  get out
// a  get out
// c  get out
// f  get out
// d  get out
// e  get out
// b  get out
// g  get out
// h  win