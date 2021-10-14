class Dialog {
  constructor(config = {}) {
    this.lastX = 0
    this.lastY = 0
    this.x = 0
    this.y = 0
    this.dialog
    this.index = 0
    this.isMoving = false
    this.config = config
  }
  open() {
    const modal = document.createElement('div')
    this.index++
    modal.id = `modal-${this.index}`
    modal.style = `
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,.3);
      display: flex;
      align-items: center;
      justify-content: center;
    `
    if (this.config.modalClose) {
      modal.addEventListener('click', this.close.bind(this))
    }
    document.body.appendChild(modal)
    this.dialog = document.createElement('div')
    this.dialog.style = `padding: 20px; background: #fff;`

    this.dialog.innerText = this.config.text


    this.dialog.addEventListener('click', e => e.stopPropagation())
    this.dialog.addEventListener('mousedown', this.handleMouseDown.bind(this))
    document.addEventListener('mousemove', this.handleMouseMove.bind(this))
    document.addEventListener('mouseup', this.handleMouseUp.bind(this))

    modal.appendChild(this.dialog)
  }
  close() {
    this.dialog.removeEventListener('mousedown', this.handleMouseDown)
    document.removeEventListener('mousemove', this.handleMouseMove)
    document.removeEventListener('mouseup', this.handleMouseUp)
    document.body.removeChild(document.querySelector(`#modal-${this.index}`))
  }
  handleMouseDown(e) {
    this.isMoving = true
    this.x = e.clientX
    this.y = e.clientY
  }
  handleMouseMove(e) {
    if (this.isMoving) {
      this.dialog.style.transform = `translate(${e.clientX - this.x + this.lastX}px, ${e.clientY - this.y + this.lastY}px)`
    }
  }
  handleMouseUp(e) {
    this.lastX = e.clientX - this.x + this.lastX
    this.lastY = e.clientY - this.y + this.lastY
    this.isMoving = false
  }
}

let myDialog = new Dialog({text: 'qifa test dialog'})
myDialog.open()