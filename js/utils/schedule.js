// js实现一个带并发限制的异步调度器schedule，保证同时运行的任务最多有两个

class Scheduler {
  constructor() {
    this.count = 2
    this.queue = []
    this.runing = []
  }
  add(asyncFun) {
    this.queue.push(asyncFun)
    return this.schedule()
  }
  schedule() {
    if (this.runing.length < this.count && this.queue.length) {
      const task = this.queue.shift()
      const fn = task().then(() => {
        this.runing.splice(this.runing.indexOf(fn), 1)
      })
      this.runing.push(fn)
      return fn
    } else {
      return Promise.race(this.runing).then(() => this.schedule())
    }
  }
}

// test..........
const scheduler = new Scheduler()
const timeout = (time) => new Promise(r => setTimeout(r, time))
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)