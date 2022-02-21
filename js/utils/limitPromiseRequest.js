function mockRequest(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('get ', url)
      resolve(url)
    }, 5000 * Math.random())
  })
}

function limitPromiseRequest(urls, limit) {
  let index = 0
  let length = urls.length
  // 也可以pool把所有请求存下来
  let pools = []
  for (; index < Math.min(length, limit); index++) {
    pools[index] = run(urls[index])
  }
  function run(url) {
    return mockRequest(url).then(() => {
      if (index < length) {
        const e = run(urls[index])
        pools[index] = e
        index++
        return e
      } else {
        return Promise.all(pools).then((res) => {
          console.log('all resolved', res)
        })
      }
    }).catch(() => {
      return Promise.reject()
    })
  }
}