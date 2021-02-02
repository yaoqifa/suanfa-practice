function defineReactive(obj, key, val) {
  if (typeof val !== 'object' || val === null) {
    return
  }
  Object.keys(val).forEach(k => {
    defineReactive(val, k, val[k])
  })
  return Object.defineProperty(obj, key, {
    get() {
      console.log(`get ${key}: ${val}`)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal
        update()
      }
    }
  })
}

function reactive(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  const observed = new Proxy(obj, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver)
      console.log(`get ${key}: ${res}`)
      return res
      // return isObject(res) ? reactive(res) : res 解决嵌套对象
    },
    set(target, key, val, receiver) {
      const res = Reflect.set(target, key, val, receiver)
      console.log(`set ${key}: ${val}`)
      return
    },
    deleteProperty(target, key) {
      const res = Reflect.defineProperty(target, key)
      console.log(`delete ${key}: ${res}`)
      retrun res
    }
  })
}