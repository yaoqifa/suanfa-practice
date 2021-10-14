Array.prototype.mySplice = function (start, count, ...args) {
  const len = this.length
  let _start = start
  let res = []
  let thisArr = []
  function setThis(that, arr) {
    arr.forEach((v, index) =>that[index] = v)
    that.length = arr.length
  }
  if (start < 0) {
    _start = len + start
    _start = _start < 0 ? 0 : _start
  }
  if (start > len) {
    _start = len
  }
  if (count === undefined) {
    res = this.slice(_start)
    setThis(this, this.slice(0, _start))
    return res
  }
  res = this.slice(_start, _start + count)
  const left = this.slice(0, _start)
  const right = this.slice(_start + count)
  setThis(this, left.concat(args, right))
  return res
}