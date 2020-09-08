function bigNumAdd(a, b) {
  let arrA = a.split('').map(v => Number(v))
  let arrB = b.split('').map(v => Number(v))

  const len1 = arrA.length
  const len2 = arrB.length

  const len = Math.max(len1, len2)
  arrA = new Array(len - len1).fill(0).concat(arrA).reverse()
  arrB = new Array(len - len2).fill(0).concat(arrB).reverse()

  let carry = 0
  const arr = []
  for (let i = 0; i < len; i++) {
    let val = arrA[i] + arrB[i] + carry
    if (val > 10) {
      carry = 1
      val = val - 10
    } else {
      carry = 0
    }
    arr.push(val)
  }

  return arr.reverse().join('')
}