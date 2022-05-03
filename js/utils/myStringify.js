function stringify(obj) {
  // if (!isObject(obj) || !Array.isArray(obj)) {
  //   throw new Error('error')
  // }
  let str = ''
  if (isObject(obj)) {
    let arr = []
    for (let key in obj) {
      arr.push(`"${key}":${stringify(obj[key])}`)
    }
    str += `{${arr}}`
  } else if (Array.isArray(obj)) {
    let arr = []
    for (let i = 0; i < obj.length; i++) {
      if (obj[i] === undefined) {
        arr[i] = 'null'
      } else {
        arr[i] = stringify(obj[i])
      }
    }
    str += `[${arr}]`
  } else {
    str += String(obj)
  }
  return str
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

var test = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
}

console.log(1, JSON.stringify(test) === stringify(test))
// console.log(2, stringify(test))

