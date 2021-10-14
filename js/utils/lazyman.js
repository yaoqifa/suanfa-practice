function lazyMan (name) {
  console.log(`hi i am${name}`)
  this.cbs = []
}
lazyMan.prototype.eat = function (food) {
  this.cbs.push(() => {
    console.log(`i am eating ${food}`)
  })
  return this
}
lazyMan.prototype.sleep = function (time) {
  setTimeout(() => {
    this.cbs.forEach(cb => {
      cb()
    })
  }, time * 1000)
  return this
}
