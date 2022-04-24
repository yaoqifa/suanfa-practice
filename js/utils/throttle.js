// 防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。

/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数
 */
const throttle = (func, wait, options = { leading = true, trailing = true }) => {
  let previous = 0
  return function (...args) {

    let now = current()
    let remain = wait - (now - preivious)
    if (remain <= 0 || remain > wait) {
      func.apply(this, args)
      previous = now
    }
  }
}

const current = () => {
  return +new Date()
}

_.throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  // 之前的时间戳
  var previous = 0;
  // 如果 options 没传则设为空对象
  if (!options) options = {};
  // 定时器回调函数
  var later = function() {
    // 如果设置了 leading，就将 previous 设为 0
    // 用于下面函数的第一个 if 判断
    previous = options.leading === false ? 0 : _.now();
    // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    // 获得当前时间戳
    var now = _.now();
    // 首次进入前者肯定为 true
  // 如果需要第一次不执行函数
  // 就将上次时间戳设为当前的
    // 这样在接下来计算 remaining 的值时会大于0
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 如果当前调用已经大于上次调用时间 + wait
    // 或者用户手动调了时间
   // 如果设置了 trailing，只会进入这个条件
  // 如果没有设置 leading，那么第一次会进入这个条件
  // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
  // 其实还是会进入的，因为定时器的延时
  // 并不是准确的时间，很可能你设置了2秒
  // 但是他需要2.2秒才触发，这时候就会进入这个条件
    if (remaining <= 0 || remaining > wait) {
      // 如果存在定时器就清理掉否则会调用二次回调
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // 判断是否设置了定时器和 trailing
    // 没有的话就开启一个定时器
      // 并且不能不能同时设置 leading 和 trailing
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};


function throttle(fn, delay) {
  let prevTime = 0
  return function(...args) {
    const now = new Date().getTime()
    if (now - prevTime > delay) {
      fn.apply(this, args)
      prevTimer = now
    }
  }
}

function throttle(fn, delay) {
  let prevTime = 0
  let timer
  return function(...args) {
    const now = Date.now()
    const remaining = delay - (now - prevTime);
    // 如果第二次执行超过delay了就立即执行
    // remaining > wait是为了处理修改了系统时间的情况
    // 比如把当前系统时间往过去调了十分钟，那么now其实是比prevTime小的
    // 那么remaning就可能是一个比较大的数了
    if (remaining > 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      fn.apply(this, args)
      prevTimer = now
    } else if (!timer) {
      // 这里就是为了处理1.5s停止触发的情况
      // 以1.5s为例，delay为1s，这个时候我们设置一个定时器
      // 让它在0.5s后执行
      // 这样在整个过程中，就是第0s, 第1s，第2s分别执行一次，共三次
      // 虽然我们是1.5s就停止触发了
      // 这样就保证了最后一次动作一直可以执行
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
        prevTime = Date.now()
      }, remaining)
    }
  }
}
