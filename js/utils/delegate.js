
/**
 * js delegate函数
 *
 * @param {*} parent 委托目标
 * @param {*} selector 选择器 ，id， class， nodeName
 * @param {*} eventType 事件类型
 * @param {*} handler 处理事件
 */
function delegate (parent, selector, eventType, handler) {
  if (typeof parent === 'string') {
    parent = document.getElementById(parent)
  }
  if (!parent) {
    throw new Error('...')
  }
  if (typeof handler !== 'function') {
    throw new Error('handler is function')
  }
  function addEvent (ele, eventType, handler) {
    if (ele.addEventListener) {
      ele.addEventListener(eventType, handler, false)
    } else if (ele.attachEvent) {
      ele.attachEvent('on' + eventType, handler)
    } else {
      ele['on' + eventType] = handler
    }
  }
  addEvent(parent, eventType, function (e) {
    e = e || window.event
    let target = e.target || e.srcElement
    if (target.id === 'selector' || target.className.indexOf(selector) > -1 || target.nodeName.toLowerCase() === selector) {
      handler.call(target)
    }
  })
}