// 多维数组降级
export const reduceArr = (arr) => {
  return Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...reduceArr(b)], []) : [arr]
}

export function once (fn) {
  let flag = false
  return function () {
    if (!flag) {
      flag = true
      fn.apply(this, arguments)
    }
  }
}

export function memorized (fn) {
  let obj = {}
  return function (arg) {
    return obj[arg] || obj[arg] = fn(arg)
  }
}

let factorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n -  1)
}
let f2 = memorized((n) => {
  if (n === 0) {
    return 1
  }
  return n * f2(n - 1)
})

export const arrayFunction = {
  map (arr, fn) {
    let ret = []
    for (let v of arr) {
      ret.push(fn(v))
    }
    return ret
  },
  filter (arr, fn) {
    let ret = []
    for (let v of arr) {
      if (fn(v)) {
        ret.push(v)
      }
    }
    return ret
  },
  reduce (arr, fn, initV) {
    if (arr.length === 0) { return }
    let res
    if (typeof initV !== 'undefined') {
      res = initV
      for (let v of arr) {
        res = fn(res, v)
      }
    } else {
      res = arr[0]
      for (let i = 1; i < arr.length; i++) {
        res = fn(res, arr[i])
      }
    }
    return res
  }
}

export function curry (fn) {
  if (typeof fn !== 'function') {
    throw new Error('must be function')
  }
  return function curriedFn (...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn.apply(null, [...args, ...arguments])
      }
    }
    return fn.apply(null, args)
  }
}

// test curry
let testMap = curry((fn, arr) => arr.map(fn))
let mult5 = testMap(x => x * 5)
mult5([1, 2, 3, 4]) // [5, 10, 15, 20]

// test settimeout, 隐藏相同的ms参数
let setTimeoutWrapper = (time, fn) => {
  setTimeout(fn, time)
}
const delay500ms = curry(setTimeoutWrapper)(500)
delay500ms(() => console.log('first'))
delay500ms(() => console.log('second'))
delay500ms(() => console.log('third'))

// 组合函数，返回一个参数c的函数，先执行b函数，再执行a函数，b(c)的输出作为a的输入
export const compose = (a, b) => {
  return (c) => a(b(c))
}

export const compose2 = (...fns) => {
  return (value) => {
    return arrayFunction.reduce(fns.reverse(), (acc, fn) => fn(acc), value)
  }
}