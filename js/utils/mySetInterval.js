function mySetInterval(fn, delay) {
  let timer
  const loop = (fn, delay) => {
    timer = setTimeout(() => {
      loop(fn, delay)
      fn.call(this, timer)
    }, delay)
  }
  loop(fn, delay)
}

mySetInterval((timer) => {
  console.log('1')
  clearTimeout(timer) // 可以清除
}, 1000)


function mySetInterval2(fn, interval) {
  let startTime = Date.now()
  const loop = () => {
    const timer = requestAnimationFrame(loop)
    if (Date.now() - startTime >= interval) {
      startTime = Date.now()
      fn.call(this, timer)
    }
  }
  loop()
}