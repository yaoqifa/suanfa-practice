/**
 * 向页面插入大量数据， 主要运用了requestAnimationFrame
 * @param el el
 * @param total 总条数
 * @param once 一次插入数量
 */
export default const bigInsert = (el, total, once) => {
  const max = total / once
  let count = 0
  const add = () => {
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < once; i++) {
      const li = document.createElement('li')
      li.innerText = Math.floor(Math.random() * total)
      fragment.appendChild(li)
    }
    el.appendChild(fragment)
    count++
    loop()
  }
  const loop = () => {
    if (count < max) {
      window.requestAnimationFrame(add)
    }
  }
  loop()
}