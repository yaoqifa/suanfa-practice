// https://github.com/rxaviers/async-pool/blob/master/lib/es6.jslet assert, assertType;

function asyncPool(poolLimit, array, iteratorFn) {
  let i = 0;
  const ret = [];
  const executing = [];
  const enqueue = function () {
    if (i === array.length) {
      return Promise.resolve();
    }
    const item = array[i++];
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);

    let r = Promise.resolve();

    if (poolLimit <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= poolLimit) {
        r = Promise.race(executing);
      }
    }

    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret));
}
// 异步加载图片，并发控制
// https://cloud.tencent.com/developer/article/1467306

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.url = url;
    img.onload = function () {
      resolve(img);
    };
    img.onerror = reject;
  });
}

function loadImage2(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(i, Date.now());
      resolve(i);
    }, i * 1000);
  });
}

function multiLoadImage(urls = [], multi, asyncFunc) {
  const len = urls.length;
  return new Promise((resolve) => {
    let count = 0;
    let res = [];
    function request() {
      count++;
      asyncFunc(urls.shift()).then((img) => {
        res.push(img);
        count--;
        if (urls.length && count < multi) {
          request();
        }
      });
    }
    while (res.length === len) {
      resolve(res);
    }
    for (let i = 0; i < multi; i++) {
      request();
    }
  });
}

const resData = await multiLoadImage([1,2,3,4,5,1,2], 3, loadImage2)


function concurrent(urls, limit, asyncFunc) {
  const len = urls.length
  return new Promise(resolve => {
    let executing = 0
    let res = []
    function request() {
      executing++
      Promise.resolve(() => asyncFunc(urls.shift())).then((val) => {
        res.push(val)
        executing--
        if (executing < limit && urls.length) {
          request()
        }
      })
      while(res.length === len) {
        resolve(res)
      }
    }
    for (let i = 0; i < Math.min(len, limit); i++) {
      request()
    }
  })
}