(function flexible (window, document) {
  let docEl = document.documentElement
  let dpr = window.devicePixelRatio || 1

  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    } else {
      document.addEventListener('DomContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  function setRem () {
    let rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }
  setRem()

  window.addEventListener('resize', setRem)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRem()
    }
  })
  if (dpr >= 2) {
    let fakeBody = document.createElement('body')
    let testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }

}(window, document))