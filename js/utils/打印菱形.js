function repeat(s, n) {
  let str = ''
  for (let i = 0; i < n; i++) {
    str += s
  }
  return str
}

function print(n) {
  let arr = []
  let str = ''
  for (let i = 0; i < n; i++){
      arr.push(repeat(' ', n - i) + repeat('*', 2 * i - 1) + '\n')
  }
  const right = arr.slice().reverse()
  arr.push(repeat('*', 2 * n - 1) + '\n')
  arr = arr.concat(right)
  str = arr.join('')
  console.log(str)
  return str
}

print(10)