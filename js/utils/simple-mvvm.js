const observe = (obj) => {
  if (!obj || typeof obj !== 'object') {
    return
  }
  Object.keys(obj).forEach(item => {
    defineReactive(obj, item, obj[item])
  })
}
const defineReactive = (obj, key, val) => {
  observe(val)
  let dp = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get () {
      console.log('get ', val)
      if (Dep.target) {
        dp.addSub(Dep.target)
      }
      return val
    },
    set (newVal) {
      console.log('set ', newVal)
      val = newVal
      dp.notify()
    }
  })
}

class Dep {
  constructor () {
    this.subs = []
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  notify () {
    this.subs.forEach(sub => sub.update())
  }
}

Dep.target = null

class Watcher {
  constructor (obj, key, cb) {
    Dep.target = this
    this.obj = obj
    this.key = key
    this.value = obj[key]
    this.cb = cb
    Dep.target = null
  }
  update () {
    this.value = this.obj[this.key]
    this.cb(this.value)
  }
}


let obj = {
  a: {
    b: 9
  }
}

observe(obj)

new Watcher(obj, 'a', (val) => {
  document.querySelector('ul').innerText = val
})

obj.a.b = 99

