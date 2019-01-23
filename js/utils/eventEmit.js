class eventEmit {
  constructor () {
    this.events = {}
  }
  on (eventType, cb) {
    if (eventType) {
      let list = this.events[eventType] || []
      list.push(cb)
      this.events[eventType] = list
    }
  }
  emit (eventType, ...args) {
    let list = this.events[eventType] || []
    if (list && list.length) {
      list.forEach(cb => {
        cb(...args)
      })
    }
  }
  off (eventType, cb) {
    if (fn) {
      this.events[eventType].splice(fn, 1)
    } else {
      delete this.events[eventType]
    }
  }
}