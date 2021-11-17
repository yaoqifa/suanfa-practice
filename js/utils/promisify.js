function promisify(origin) {
  return function fn(args) {
    return new Promise((resolve, reject) => {
      args.push((err, ...data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
      origin.apply(this, args)
    })
  }
}