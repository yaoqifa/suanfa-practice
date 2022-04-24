export const debounce = (fn, wait = 50) => {
  let timer
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

// Debounce
// 比如一个页面的 "resize" 事件，我们对这个事件的处理可能是重新对页面进行布局或者至少是改变某个 dom 元素的布局，可以想象一般这个事件一旦触发就会短时间（比如是 500ms）内连续触发多次，
// 然后对应的事件处理函数（比如叫 handler）会也会被执行对应的次数，但实际上我们关注的只是 500ms 内最后一次 "resize" 事件处理的结果，于是最开始的一次到倒数第二次中间的所有 "resize" 都是不需要去处理的，那么我们会怎么做呢？
// 我们可能会对 handler 做个 500ms 的延时，同时在每次 "resize" 触发的时候记录它的「触发时间」，在下次 "resize" 的时候比较当前时间和上次触发时间，如果时间差小于 500ms 那么我们就把上一次的处理的剩下延时重置为 500ms，
// 同时将当次的的触发时间作为下次触发时的参照时间，这样会造成什么结果呢？这样造成的结果是：在一个时间段内，如果任意相邻两次事件触发的间隔小于 500ms，那么不管这整个时间段的长度是多少，也就是说不管事件触发了多少次，
// 最终 handler 都只会被执行一次，就是最后的那一次；极端情况下，如果这个时间段趋于无穷，那么 handler 一次也得不到执行。这种短时间间隔内处理多次事件触发的机制就是 Debounce。
// Throttle
// 某些情况下对于 Debounce 的处理方式我们可能不满意，比如对每个 500ms 的间隔的事件的连续触发，我们想要 handler 至少执行一次，可能是在 500ms 的开头，也可能是在结尾，比如是开头，此时我们会怎么做？
// 我们可能会想到每次触发事件时，把当次的触发时间和上次的「handler 的执行时间」（而 debounce 是上次事件的触发时间）对比，那么每次事件的触发时间和上次 handler 的执行时间会有个差值，如果这个差值大于 500ms，
// 那么理所应当地，执行 handler 并记录此时的执行时间作为下一次触发时的参考时间；如果小于 500ms ，就什么也不做。这个延时到期了之后执行 handler，执行 handler 之后的再次触发事件时就创建一个新的时长为 500ms 的延迟。
// 这样我们就保证了每个 500ms 内的多次事件触发的第一次总会得到处理。这种短时间间隔内处理多次事件触发的机制就是 Throttle。相同情形下，10s 中连续触发事件，任意相邻两次触发时间间隔小于 500ms，debounce 只会执行一次 handler 而 throttle 会执行 10（或者 11）次。
// 二者根本差别
// 有了上面的例子，再来总结下二者的概念，debounce 和 throttle 本质上都是「为了避免某个『事件』在『一个较短的时间段内』（称为 delta T）内连续触发从而引起的其对应的『事件处理函数』不必要的连续执行」的一种事件处理机制。
// 二者的根本的区别在于 throttle 保证了在每个 delta T 内至少执行一次，而 debounce 没有这样的保证。体现在实现层面上的区别就是，每次事件触发时参考的「时间点」对于 debounce 来是「上一次事件触发的时间」并且在延时没有结束时会重置这个延时为 500ms，而对于 throttle 来讲是「上一次 handler 执行的时间」并且在延时尚未结束时不会重置延时。

function debounceOrThrottle ({ fn, wait = 300, immediate = false, isExec = false }) {
  if (typeof fn !== 'function') {
    throw new Error('fn should be function')
  }
  let timeId = null
  let context = null
  let args = null
  let result = null
  let lastTriggerTime = null
  let lastExecTime = null

  function later () {
    let interval = Date.now() - (isExec ? lastExecTime : lastTriggerTime)
    if (interval < wait && interval > 0) {
      setTimeout(later, wait - interval)
    } else {
      if (!immediate) {
        result = fn.apply(context, args)
        context = args = null
      }
      timeId = null
    }
  }
  return function (...arr) {
    context = this
    args = arr
    !isExec && (lastTriggerTime = Date.now())
    const callNow = immediate && !timeId

    if (!timeId) {
      isExec && (lastExecTime = Date.now())
      timeId = setTimeout(later, wait)
    }
    if (callNow) {
      isExec && (lastExecTime = Date.now())
      result = fn.apply(context, args)
      context = args = null
    }
    return result
  }
}

const debounce3 = ({ fn, wait, immediate }) =>
  debounceOrThrottle({
    fn,
    wait,
    immediate
  })

const throttle = ({ fn, wait, immediate = true }) =>
  debounceOrThrottle({
    fn,
    wait,
    immediate,
    executeOncePerWait: true
  })