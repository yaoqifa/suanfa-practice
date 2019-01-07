let proxy = new Proxy(target, handler)

const onWatch = (target, setBind, logger) => {
  return new Proxy(target, {
    get (target, property, receiver) {
      logger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set (target, property, value, receiver) {
      setBind(value)
      return Reflect.set(target, property, value, receiver)
    }
  })
}

let obj = {
  a: 1,
  b: 2
}
let watch = onWatch(obj, (v) => {
  console.log(`set ${v}`)
}, (target, property) => {
  console.log(`get ${property} : ${target[property]}`)
})

obj.a
obj.b = 3