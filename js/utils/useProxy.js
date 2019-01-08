
const onWatch = (obj, setBind, logger) => {
  let handle =  {
    get (target, property, receiver) {
      logger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set (target, property, value, receiver) {
      setBind(value)
      return Reflect.set(target, property, value, receiver)
    }
  }
  return new Proxy(obj, handle)
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

watch.a
watch.b = 3