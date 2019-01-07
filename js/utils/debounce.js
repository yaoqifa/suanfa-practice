export const debounce  = (fn, wait = 50) => {
  let timer = 0
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

// 对于按钮防点击来说的实现：如果函数是立即执行的，就立即调用，如果函数是延迟执行的，就缓存上下文和参数，放到延迟函数中去执行。
// 一旦我开始一个定时器，只要我定时器还在，你每次点击我都重新计时。一旦你点累了，定时器时间到，定时器重置为 null，就可以再次点击了。
// 对于延时执行函数来说的实现：清除定时器ID，如果是延迟调用就调用函数

export const debounce2 = (fn, wait = 50, immediate = true) => {
  let timer, context, args
  const later = setTimeout(() => {
    if (!immediate) {
      fn.apply(context, args)
      context = null
      args = null
    }
  }, wait)
  return function (...params) {
    if (timer) {
      clearTimeout(timer)
      timer = later()
    } else {
      timer = later()
      if (immediate) {
        fn.apply(this, params)
      } else {
        context = this
        args = params
      }
    }
  }
}