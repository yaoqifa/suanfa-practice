// 新理解
// debounce防抖 防止一段时间内被连续触发很多次，一般每次触发生成一个定时器，定时器时间没到又触发了，就重新计时，保证只响应一次
// debounce 频繁操作但是只需要响应最后一次即可
// 输入框验证，只需要对最后一次输入事件作出验证即可
// resize事件

// throttle节流 不管连续触发多次，总是以特定的频率触发
// 节流：调节频率，以一定的频率去响应
// 搜索联想
// 响应拖拽

// 假如有一个饮水机，规定按下按钮之后2秒后开始出水，有个闲得x疼的人很快的按按钮10秒，饮水机会作何反应呢？
// 防抖（debounce）：在按下按钮和出水的这2秒内如果还有人按按钮，饮水机会重新开始计算2秒，也就是说总是以最新的操作为基准来计算时间
// 节流：即使被人不间断的按按钮了10秒钟，但是饮水机依然不紧不慢的2s出一次水，也就是说不管外部操作的多快，饮水机总会有自己的频率

const debounce = (fn, wait) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}

const throttle = (fn, wait) => {
  let timer
  let start = Date.now()

  return () => {
    let now = Date.now()
    clearTimeout(timer)
    if (now - start >= wait) {
      fn()
      start = now
    } else {
      timer = setTimeout(() => {
        fn()
      }, wait)
    }
  }
}