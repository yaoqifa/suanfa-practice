// 后一个函数作为前一个函数的参数
// 最后一个函数可以接受多个参数，前面的函数只能接受单个参数；后一个的返回值传给前一个
// // Demo:
// const add = num => num  + 10
// const multiply = num => num * 2
// const foo = compose(multiply, add)
// foo(5) => 30

function compose(...fns) {
  if (fns.length === 0) {
    return args => args
  }
  if (fns.length === 1) {
    return fns[0]
  }
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}