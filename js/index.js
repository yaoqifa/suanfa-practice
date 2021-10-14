import cKit from './canvas.js'

;(function (window, undefined) {
  let canvas = document.getElementById('test')
  
  cKit.drawRect(canvas)
  // cKit.drawFace(canvas)
  // cKit.drawFont(canvas)
  // cKit.drawArc(canvas)
  // cKit.drawBezier(canvas)
  cKit.drawGezi(canvas)
  // cKit.drawImg(canvas)
  cKit.drawClock()

  // cKit.downloadFile('clock', canvas.toDataURL('img/png'))

})(window)


