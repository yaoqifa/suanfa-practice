function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype)
  let res = fn.apply(obj, args)
  if (typeof res === 'object' && res !== null) {
    return res
  } else {
    return obj
  }
}
