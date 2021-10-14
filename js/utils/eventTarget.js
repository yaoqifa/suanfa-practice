class EventTarget {
  constructor() {
    this.listeners = {}
  }

  addEventListener(type, callback) {
    if (!this.listeners[type]) {
      this.listeners[type] = []
    }
    this.listeners[type].push(callback)
  }

  removeEventListener(type, callback) {
    if (!this.listeners[type]) {
      return
    }
    let stack = this.listeners[type]
    for (let i = 0, len = stack.length; i < len; i++) {
      if (stack[i].toString() === callback.toString()) {
        stack.splice(i, 1)
        return this.removeEventListener(type, callback)
      }
    }
  }

  dispatchEvent(event) {
    if (!this.listeners[event.type]) {
      return
    }

    let stack = this.listeners[event.type]
    event.target = this
    stack.forEach(item => {
      item.call(this, event)
    })
  }
}