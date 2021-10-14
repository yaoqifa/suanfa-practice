function generator (cb) {
  return (function () {
    let obj = {
      next: 0,
      stop: function () {}
    }
    return {
      next: function () {
        let ret = cb(obj)
        if (ret === undefined) {
          return {
            value: undefined,
            down: true
          }
        }
        return {
          value: ret,
          down: false
        }
      }
    }
  })()
}