function drawRect (el) {
  if (el.getContext) {
    let ctx = el.getContext('2d')
    ctx.save()
    ctx.fillStyle = '#0dc2b3'
    ctx.fillRect(0, 0, 100, 50)
    ctx.translate(100, 100)
    ctx.rotate(-Math.PI * 0.1)
    ctx.scale(0.8, 0.8)
    ctx.strokeRect(0, 0, 100, 50)
    ctx.transform(1, 0.5, -0.5, 1, 30, 10)
    ctx.fillRect(0, 0, 100, 50)
    ctx.transform(1, 0.5, -0.5, 1, 30, 10)
    ctx.fillRect(0, 0, 100, 50)
    ctx.restore()
  } else {
    console.log('...')
  }
}

function drawFace (el) {
  let ctx = el.getContext('2d')
  ctx.clearRect(0, 0, 200, 200)
  ctx.fillStyle = '#0dc2b3'
  ctx.fillRect(0, 10, 150, 150)

  let path = new Path2D()
  path.arc(75, 75, 50, 0, Math.PI * 2, false)
  path.moveTo(50, 50)
  path.lineTo(50, 60)
  path.lineTo(60, 60)
  path.lineTo(60, 50)
  path.lineTo(50, 50)

  path.moveTo(100, 55)
  path.arc(95, 55, 5, 0, Math.PI * 2, false)

  path.moveTo(101, 91)
  path.arc(75, 75, 30, Math.PI * 0.2, Math.PI * 0.82, false)

  ctx.strokeStyle = "#fff"
  ctx.lineWidth = 1
  ctx.stroke(path)
}

function drawFont (el) {
  let ctx = el.getContext('2d')
  ctx.strokeRect(220, 100, 200, 100)
  ctx.shadowOffsetX = 2
  ctx.shadowOffsetY = 2
  ctx.shadowBlur = 2
  ctx.shadowColor = '#999'
  ctx.font = '24px Verdana'

  let gradient = ctx.createLinearGradient(0, 0 ,el.width, 0)
  gradient.addColorStop('0', "magenta")
  gradient.addColorStop('0.5', '#00f')
  gradient.addColorStop('1', '#f00')

  ctx.fillStyle = gradient
  ctx.strokeStyle= '#000'
  ctx.fillText('canvas text', 230, 100)
}

function drawArc (el) {
  let ctx = el.getContext('2d')
  ctx.beginPath()
  ctx.arc(50, 50, 40 , 0 , Math.PI / 2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(150, 50, 40, 0, -Math.PI / 2, true)
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(100, 50)
  ctx.arcTo(200, 50, 200, 100, 50)
  ctx.stroke();
}

function drawBezier (el) {
  let ctx = el.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(250, 20)
  ctx.quadraticCurveTo(250, 80, 380, 20)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(250, 120)
  ctx.bezierCurveTo(250, 160, 380, 170, 380, 120)
  ctx.lineCap = 'round'
  ctx.stroke()
}

function drawGezi (el) {
  let ctx = el.getContext('2d')
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j ++) {
      ctx.setLineDash([12, 3])
      ctx.strokeStyle = 'rgb(' + Math.floor(28.3 * i) + ', ' + Math.floor(255 - 28.3 * j) + ',' + Number.parseInt(Math.random() * 255) + ')'
      ctx.strokeRect(i * 30, j * 30, 25, 25)
    }
  }
  ctx.rotate(Math.PI * 0.5)
  ctx.save()
}

function drawImg (el) {
  let img2 = document.querySelector('img')
  let ctx = el.getContext('2d')
  window.onload = function () {
    ctx.drawImage(img2, 120, 120, 300, 250, 50, 50, 200, 150)
    // for (let i = 0; i < 9; i++) {
    //   for (let j = 0; j < 9; j ++) {
    //     ctx.drawImage(img2, i * 30, j * 30, 29, 29)
    //   }
    // }
  }
}

function drawClock () {
  let el = document.getElementById('clock')
  let ctx = el.getContext('2d')
  ctx.clearRect(0, 0, ctx.width, ctx.height)

  let time = new Date()
  let s = time.getSeconds()
  let m = time.getMinutes()
  let h = time.getHours()
  // h = h > 12 ? h - 12 : h

  function bg () {
    ctx.save()
    ctx.clearRect(0, 0, 400, 400)
    ctx.translate(200, 200)
    ctx.rotate( -Math.PI / 2) // 坐标轴逆时针旋转90，x轴正好对准12点方向
    
    let gradient = ctx.createLinearGradient(150, 0, -150, 0)
    gradient.addColorStop(0, '#242f37')
    gradient.addColorStop(1, '#48585c')
    ctx.fillStyle = gradient

    ctx.beginPath()
    ctx.arc(0, 0, 150, 0, Math.PI * 2, true)
    ctx.fill()
  }

  function hourTag () {
    ctx.save()
    for (let i = 0; i < 12; i++) {
      ctx.beginPath()
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 3
      ctx.rotate(Math.PI / 6)
      ctx.moveTo(140, 0)
      ctx.lineTo(120, 0)
      ctx.stroke()
    }
    ctx.restore()
  }

  function minuteTag () {
    ctx.save()
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        ctx.beginPath()
        ctx.strokeStyle = '#536b7a'
        ctx.lineWidth = 2
        ctx.moveTo(140, 0)
        ctx.lineTo(130, 0)
        ctx.stroke()
      }
      ctx.rotate(Math.PI / 30)
    }
    ctx.restore()
  }

  function font () {
    ctx.save()
    ctx.rotate(Math.PI / 2)
    ctx.beginPath()
    ctx.fillStyle = '#0dc2b3'
    ctx.font = '24px Microsoft yahei'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('3', 100, 0)
    ctx.fillText('6', 0, 100)
    ctx.fillText('9', -100, 0)
    ctx.fillText('12', 0, -100)
    ctx.restore()
  }

  function hourHand () {
    ctx.save()
    ctx.rotate(h * Math.PI / 6 + m * Math.PI / 360 + s * Math.PI / 21600)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#fff'
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(100, 0)
    ctx.stroke()
    ctx.arc(92, 0, 3, 0, Math.PI * 2)
    ctx.fillStyle = '#34434c'
    ctx.fill()
    ctx.restore()
  }

  function minuteHand () {
    ctx.save()
    ctx.rotate(m * Math.PI / 30 + s * Math.PI / 1800)
    ctx.lineWidth = 6
    ctx.strokeStyle = '#fff'
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(130, 0)
    ctx.stroke()

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#34434c'
    ctx.beginPath()
    ctx.moveTo(125, 0)
    ctx.lineTo(110, 0)
    ctx.stroke()
    ctx.restore()
  }

  function secondHand () {
    ctx.save()
    ctx.rotate(s * Math.PI / 30)
    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = '#fff'
    ctx.moveTo(0, 0)
    ctx.lineTo(141, 0)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 12
    ctx.strokeStyle = '#fff'
    ctx.moveTo(0, 0)
    ctx.lineTo(- 36, 0)
    ctx.stroke()

    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.arc(0, 0, 15, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.strokeStyle = '#cdd2d5'
    ctx.lineWidth = 1
    ctx.arc(0, 0, 8, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }

  function bound () {
    ctx.beginPath()
    ctx.lineWidth = 6
    let gradient = ctx.createLinearGradient(150, 0, -150, 0)
    gradient.addColorStop(0, '#000')
    gradient.addColorStop(1, '#000')
    ctx.strokeStyle = 'gradient'
    ctx.arc(0 , 0, 152, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }

  function digitTime () {
    let time = h + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s)
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = '#0dc2b3'
    ctx.font = '20px Microsoft yahei'
    ctx.textAlign = 'center'
    ctx.fillText(time, 200, 300)
    ctx.restore()
  }

  bg()
  hourTag()
  minuteTag()
  // font()
  hourHand()
  minuteHand()
  secondHand()
  bound()
  digitTime()

  window.requestAnimationFrame(drawClock)
}

function downloadFile (fileName, content) {
  function base64Img2Blob(code){
    let parts = code.split(';base64,')
    let contentType = parts[0].split(':')[1]
    let raw = window.atob(parts[1])
    let rawLength = raw.length

    let uInt8Array = new Uint8Array(rawLength)

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i)
    }

    return new Blob([uInt8Array], {type: contentType})
  }
   
  let aLink = document.createElement('a')
  let blob = base64Img2Blob(content) //new Blob([content]);

  let evt = document.createEvent("HTMLEvents")
  evt.initEvent("click", false, false) //initEvent 不加后两个参数在FF下会报错
  aLink.download = fileName
  aLink.href = URL.createObjectURL(blob)

  aLink.dispatchEvent(evt)
}
export default {
  drawRect,
  drawFace,
  drawFont,
  drawArc,
  drawBezier,
  drawGezi,
  drawImg,
  drawClock,
  downloadFile
}