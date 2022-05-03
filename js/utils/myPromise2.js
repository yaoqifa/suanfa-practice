const STATUS = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

function isObj(x) {
  return typeof x === 'object'
}

function isFunc(fn) {
  return typeof fn === 'function'
}
// 先判断x是不是promise
/**
 * 处理promise递归的函数
 *
 * promise2 {Promise} 默认返回的promise
 * x {*} 我们自己 return 的对象
 * resolve
 * reject
 */
function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError('chaining cycle detected for promise'))
  }
  let called
  if (x !== null && (isObj(x) || isFunc(x))) {
    try {
      const then = x.then
      if (isFunc(then)) {
        then.call(x, res => {
          if (called) return
          called = true
          resolvePromise(promise2, res, resolve, reject)
        }, err => {
          if (called) return
          called = true
          reject(err)
        })
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true
      rejcet(error)
    }
  } else {
    resolve(x)
  }
}
class Promise {
  constructor(executor) {
    this.status = STATUS.PENDING // 默认pending
    this.value // resolve成功的值
    this.error // reject失败时的值
    this.resolveQueue = [] // 成功存放数组
    this.rejectQueue = [] // 失败方法存放数组

    const resolve = res => {
      if (this.status === STATUS.PENDING) {
        this.value = res;
        this.status = STATUS.RESOLVED
        this.resolveQueue.forEach(fn => fn())
      }
    }
    const reject = err => {
      if (this.status === STATUS.PENDING) {
        this.error = err
        this.status = STATUS.REJECTED
        this.rejectQueue.forEach(fn => fn())
      }
    }

    executor(resolve, reject)
  }
  then(onFullfilled, onRejected) {
    onFullfilled = isFunc(onFullfilled) ? onFullfilled : value => value
    onRejected = isFunc(onRejected) ? onRejected : err => { throw err }
    let promise2
    promise2 = new Promise((resolve, reject) => {
      if (this.status === STATUS.RESOLVED) {
        setTimeout(() => {
          const x = onFullfilled(this.value)
          resolvePromise(promise2, x, resolve, reject)
        })
      }
      if (this.status === STATUS.REJECTED) {
        setTimeout(() => {
          const x = onRejected(this.error)
          resolvePromise(promise2, x, resolve, reject)
        })
      }
      if (this.status === STATUS.PENDING) {
        this.resolveQueue.push(() => {
          setTimeout(() => {
            const x = onFullfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
          })
        })
        this.rejectQueue.push(() => {
          setTimeout(() => {
            const x = onRejected(this.error)
            resolvePromise(promise2, x, resolve, reject)
          })
        })
      }
    })
    return promise2
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  all(promisesArr) {
    let count = 0
    let result = []
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promisesArr.length; i++) {
        promisesArr[i].then(res => {
          result.push(res)
          count++
          if (count === promisesArr.length) {
            resolve(result)
          }
        }).catch(err => {
          reject(err)
        })
      }
    })
  }
  race(promisesArr) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promisesArr.length; i++) {
        promisesArr[i].then(resolve, reject)
      }
    })
  }
  resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  }

  reject(value) {
    return new Promise((resolve, reject) => {
      reject(value)
    })
  }
  allSettled(promiseArr) {
    return new Promise((resolve, reject) => {
      let count = 0;
      let result = []
      for (let i = 0; i < promiseArr.length; i++) {
        promiseArr[i].then(res => {
          result.push(res)
        }).catch(err => {
          result.push(err)
        }).finally(() => {
          count++
          if (count === promiseArr.length) {
            resolve(result)
          }
        })
      }
    })
  }
}