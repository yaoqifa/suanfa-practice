Array.prototype.myIndexOf = function (value, fromIndex) {
  const len = this.length
  let index = -1
  fromIndex = fromIndex === undefined ? 0 : fromIndex
  if (fromIndex < 0) {
    fromIndex = len + fromIndex
    fromIndex = fromIndex < 0 ? 0 : fromIndex
  }
  for (let i = fromIndex; i < len; i++) {
    if (this[i] === value) {
      index = i
      break
    }
  }
  return index
}