function repeat (str, times) {
  if (typeof str !== 'string') {
    throw new Error('must string')
  }
  let tt
  if (typeof times === 'boolean') {
    tt = Number(times)
  } else if (typeof times === 'number' || typeof times === 'string') {
    tt = parseInt(times)
  }
  if (Number.isNaN(tt)) {
    tt = 0
  }
  if (tt < 0) {
    throw new Error('error')
  }
  let res = ''
  for (let i = 0; i < tt; i++) {
    res += str
  }
  return res
}