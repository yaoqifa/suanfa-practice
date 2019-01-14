function deepClone (obj) {
  if (!isObject(obj)) {
    throw new Error('非对象')
  }
  let newV = Array.isArray(obj) ? [...obj] : {...obj}
  Reflect.ownKeys(obj).forEach(key => {
    newV[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })
  return newV
}
function isObject (obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}