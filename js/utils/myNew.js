function myNew (func, ...args) {
  let obj = Object.create(func.prototype)
  let res = func.apply(obj, args)
  if (typeof res === 'object' && res !== null) {
    return res
  } else {
    return obj
  }
}