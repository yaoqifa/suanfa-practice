/**
 * 要求如下：

要求最大并发数 maxNum
每当有一个请求返回，就留下一个空位，可以增加新的请求
所有请求完成后，结果按照 urls 里面的顺序依次打出
*/

class Schedule {
  constructor(count) {
    this.count = count;
    this.task = [];
    this.executing = 0;
  }

  add(reqPromise) {
    this.task.push(reqPromise);
    if (this.executing < this.count) {
      this.runTask();
    }
  }

  runTask() {
    if (!this.task.length) {
      return;
    }
    this.executing++;
    const p = this.task.shift();
    p.then((url) => {
      this.executing--;
      this.runTask();
    });
  }
}

const req = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true); //这里第三个参数不能为false,会变成同步
    xhr.onload = () => {
      if(xhr.status === 200) {
        resolve(url);
      } else {
        reject(url);
      }
    }
    xhr.send();
  })
}
const printFunc = (promise) => {
  return promise.then(url => {
    console.log(url);
  })
}
const multiRequest = (urls, maxNum) => {
  const schedule = new Schedule(maxNum);
  urls.forEach((url) => {
    schedule.add(printFunc(req(url)));
  })
}
