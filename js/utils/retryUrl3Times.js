// 发送请求时如果5秒内没有响应，则重复执行当前的请求，请求发送次数总共不超过三次

function retry(asyncFun, times = 3) {
  times--
  return new Promise((resolve, reject) => {
    Promise.race([asyncFun(), timeOut5()]).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  }).catch(err => {
    if (times >= 0) {
      times--
      return retry(asyncFun)
    } else {
      return 'after 3 times err...'
    }
  })
}

function asyncUrl() {
  return new Promise((resolve, reject) => {
    let timer = Math.floor(Math.random() * 10)
    console.log('async url take', timer, 's')
    setTimeout(() => {
      resolve(`success url get ${timer}`)
    }, timer * 1000)
  })
}

function timeOut5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('timeout')
    }, 2000);
  })
}

retry(asyncUrl).then((res) => console.log(res)).catch((err) => console.log(err))


* 代码实现一个需求，发送请求时如果5秒内没有响应，则重复执行当前的请求，请求发送次数总共不超过三次
 * @param {*} fn
 * @param {*} times
 * @param {*} delay
 * @returns
 */

// 超时检测函数
// const timeOut = (delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(false);
//     }, delay);
//   });
// };

// function retry(fn, times = 5, delay) {
//   return new Promise((resolve, reject) => {
//     if (!times--) {
//       console.log(times);
//       return;
//     }
//     Promise.race([fn(), timeOut(delay)])
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject('race 内部超时');
//       });
//   }).catch((err) => {
//     console.log(err);
//     return retry(fn, times, delay);
//   });
// }

// // 模拟请求
// const test = function () {
//   const delay = Math.floor(Math.random() * 10000);
//   console.log(`本次请求花费：${delay}ms`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1234);
//     }, delay);
//   });
// };

// // 如果请求花费时间 > 2000ms 就重新发送请求，直到请求成功才停止重试
// retry(test, 5, 2000).then((res) => {
//   console.log('res->', res);
// });