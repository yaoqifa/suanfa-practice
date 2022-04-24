// function deepClone (obj) {
//   if (!isObject(obj)) {
//     throw new Error('非对象')
//   }
//   let newV = Array.isArray(obj) ? [...obj] : {...obj}
//   Reflect.ownKeys(obj).forEach(key => {
//     newV[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
//   })
//   return newV
// }
function isObject (obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

let cache = []

function deepCopy(obj) {
  if (!isObject(obj)) return
  let cacheV = findCache(obj)
  if (cacheV) {
    return cacheV
  }
  let newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let oldV = obj[key]
      cache.push([obj, newObj])
      newObj[key] = isObject(oldV) ? deepCopy(oldV) : oldV
    }
  }
  return newObj
}

function findCache(source) {
  console.log(cache)
  for (let i = 0; i < cache.length; i++) {
    if (cache[i][0] === source) {
      return cache[i][1]
    }
  }
}

const map = new WeakMap()
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  if (map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, obj)
  let newObj = Array.isArray(obj) ? [] : {}
  Reflect.ownKeys(obj).forEach((key) => {
    newObj[key] = obj[key]
  })
  return newObj
}