console.time('fibonacci')
let f = (n, prev = 1, next = 1) => {
  if (n < 2) {
    return next
  }
  return f(n - 1, next, prev + next)
}
f(1475)

console.timeEnd('fibonacci')

// fibonacci: 0.217041015625ms

// fibonacci: 0.177978515625ms

// fibonacci: 0.19873046875ms

// fibonacci: 0.1630859375ms

// fibonacci: 0.207763671875ms

/*

刚测了下性能，如果是普通写法
console.time('series')
function series(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return series(n - 1) + series(n -2);
}
f(40) // 165580141
console.timeEnd('series')
结果打印 series: 8574.739013671875ms
f(50)可能就调用栈溢出了，浏览器崩溃

而如果用尾递归
console.time('fibonacci')
let f = (n, prev = 1, next = 1) => {
  if (n < 2) {
    return next
  }
  return f(n - 1, next, prev + next)
}
f(1475) // 1.3069892237633987e+308
f(1476) // Infinity
console.timeEnd('fibonacci')
结果打印  fibonacci: 0.1630859375ms， 试了5次，0.20ms以下
尾递归优化，调用帧永远只有一项，，结果Infinity 也不会爆内存。
嘿嘿，老铁，我是个较真的人。
*/ 
