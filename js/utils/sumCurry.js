// 函数柯里化 实现如下效果：
// sum(1,3).sumOf()  4
// sum(1,3)(2,4).sumOf() 10

function sumCurry(...rest) {
  let args = rest

  const fn = function (...params) {
    args = args.concat(params)
    return fn
  }

  fn.sumOf = function () {
    return args.reduce((pre, curr) => pre + curr, 0)
  }

  return fn
}

// plus(1)(2)(3)(4)()

function plus(...rest) {
  let args = rest
  function sum() {
    return args.reduce((pre, cur) => pre + cur, 0)
  }
  const fn = function (...arg) {
    if (arg.length === 0) {
      return sum()
    } else {
      args = args.concat(arg)
    }
    return fn
  }
  return fn
}
console.log(plus(1)(2)(3)(4)())
console.log(plus(1)(2)(3, 6, 7)(4)(5)())

