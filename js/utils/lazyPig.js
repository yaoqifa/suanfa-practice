// 实现一个LazyPig，可以按照以下方式调用:

// LazyPig("Peggy")
// // 输出:
// > Hello，I'm Peggy！
// LazyPig("Peggy").sleep(10).eat("dinner")
// // 输出
// > Hello，I'm Peggy！
// //等待10秒..
// Wake up after 10
// Eat dinner~

function lazyPig(name) {
  console.log(`Hello，I'm ${name}！`)
  let obj = {}
  obj.sleep = function (time) {
    let date = Date.now()
    while(Date.now() - date < time * 1000){}
    console.log(`Wake up after ${time}s！`)
    return obj
  }
  obj.eat = function(food) {
    console.log(`Eat ${food}~`)
    return obj
  }
  return obj
}