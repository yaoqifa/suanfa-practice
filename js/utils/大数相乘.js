multiBigString('99999334444566677777779', '99999999999999')

function multiBigString(a, b) {
  if (a.startWith('0') || b.startWith('0')) {
    return '0'
  }
  const len1 = a.length
  const len2 = b.length
  let res = new Array(len1 + len2).fill(0)
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const cur = a[i] * b[j] + res[i + j + 1]
      res[i + j + 1] = cur % 10
      res[i + j] = Math.floor(cur / 10) + res[i + j]
    }
  }
  return res.join('').replace(/^0*/g, '')
}