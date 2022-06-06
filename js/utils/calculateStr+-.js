// 商汤面试题
function calculate(str) {
  let res = 0
  let arr = []
  let temp = str.split('+')
  temp.forEach((item, index) => {
    if (item.indexOf('-') > -1) {
      const tt = item.split('-')
      tt.forEach((t, i) => {
        arr.push(t)
        if (i < tt.length - 1) {
          arr.push('-')
        }
      })
    } else {
      arr.push(item)
    }
    if (index < temp.length - 1) {
      arr.push('+')
    }
  })
  let opt = ''
  arr.forEach((item, index) => {
    if (index === 0) {
      res = Number(item)
    } else if (['+', '-'].indexOf(item) === -1) {
      res += opt === '+' ? Number(item) : -Number(item)
    } else {
      opt = item
    }
  })
  return res
}
const test = '10+20-40'
console.log(calculate(test)) // -10
const test2 = '10+20-40+50+60+3-4.2'
console.log(calculate(test2))
const test3 = '10+20+30+4+5+6'
console.log(calculate(test3)) // 75
const test4 = '-10+20-40'
console.log(calculate(test4))