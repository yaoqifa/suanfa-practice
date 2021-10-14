Promise.prototype.finally = function (cb) {
  const p = this.constructor
  return this.then(
    (value) => p.resolve(cb()).then(() => value),
    (reason) => p.resolve(cb()).then(() => { throw reason })
  )
}