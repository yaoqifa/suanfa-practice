/** 模拟call，可以看成给新对象添加一个函数，执行完再删除
 *
 * @param {*} context 改变的上下文this
 * @param {*} args 剩余参数
 */
Function.prototype.myCall = function (context, ...args) {
  context = context || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}

/** 模拟apply，与call类似
 *
 * @param {*} context 改变的上下文this
 * @param {*} args 剩余参数
 */
Function.prototype.myApply = function (context, args) {
  context = context || window
  args = Array.isArray(args) ? args : [args]
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}

/** 模拟bind，返回一个函数
 *
 * @param {*} context 改变的上下文this
 * @param {*} arg1 剩余参数
 * @return 返回一个函数，bind可以做柯里化
 */
Function.prototype.myBind = function (context, ...arg1) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  let self = this
  return function f (...arg2) {
    if (this instanceof f) {
      return new self(...arg1, ...arg2)
    }
    return self.apply(context, arg1.concat(...arg2))
  }
}
/*************** test ***************/
let obj = {
  aa: 99
}

function func (...args) {
  console.log(...args, this.aa)
}
func.call(obj, 1, 3, 4, 5, 7) // 1 3 4 5 7 99
func.apply(obj, [3, 4, 5, 6]) // 3 4 5 6 99
func.myCall(obj, 3, 4, 5, 6) // 3 4 5 6 99
func.myApply(obj, [5556, 6, 7, 7]) // 5556 6 7 7 99
let a = func.myBind(obj, 4, 5, 6, 6, 7)
a(1, 1, 1, 1) // 4 5 6 6 7 1 1 1 1 99
new a(8, 8, 8, 8) // 4 5 6 6 7 8 8 8 8 undefined

let b = func.bind(obj, 4, 5, 6, 6, 7)
b(1, 1, 1, 1) // 4 5 6 6 7 1 1 1 1 99
new b(8, 8, 8, 8) // 4 5 6 6 7 8 8 8 8 undefined