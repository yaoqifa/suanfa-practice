const promiseAll = (ps) => {
  if (!Array.isArray(ps)) {
    throw new Error('must be array')
  }
  return new Promise((resolve, reject) => {
    let count = 0
    let len = ps.length
    let res = new Array(len)
    ps.forEach((p, index) => {
      Promise.resolve(p).then((result) => {
        res[index] = result
        count++
        if (count === len) {
          resolve(res)
        }
      }, (err) => {
        reject(err)
      })
    })
  })
}