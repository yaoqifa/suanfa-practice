function addBigString(a, b) {
  let res = ''
  const len1 = a.length
  const len2 = b.length
  const len = Math.max(len1, len2)
  a = `${'0'.repeat(len - len1)}${a}`
  b = `${'0'.repeat(len - len2)}${b}`
  let carry = 0

  for (let i = len - 1; i >= 0; i--) {
    let cur = +a[i] + +b[i] + carry
    carry = Math.floor(cur / 10)
    res = `${cur % 10}${res}`
  }
  if (carry) {
    res = `${carry}${res}`
  }
  return res
}

addBigString('99345', '967')