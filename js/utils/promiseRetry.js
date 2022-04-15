Promise.retry = function (fn, times) {
  return new Promise((resolve, reject) => {
    let retry = () => {
      return fn()
        .then((res) => {
          console.log('成功')
          resolve(res);
        })
        .catch((e) => {
          times--;
          if (times === 0) {
            console.log('重试结束，失败')
            reject(e);
          } else {
            retry();
          }
        });
    };
    return retry();
  });
};

function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let i = Math.random().toFixed(2);
      console.log(i);
      if (i > 0.5) {
        resolve(i);
      } else {
        reject(i);
      }
    }, 2000);
  });
}
