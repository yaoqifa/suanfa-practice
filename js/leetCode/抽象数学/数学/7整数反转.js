// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
// 123 -> 321 -123 -> -321 120 -> 21 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

const reverse = (num) => {
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  if (num > max || num < min) {
    return 0
  }
  const arrNum = String(num).split('')
  let arg = num < 0 ? arrNum.shift() : ''
  let res = Number(arrNum.reverse().join(''))
  res = arg ? res * -1 : res
  return res > max || res < min ? 0 : res
}
