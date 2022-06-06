/**
 * 1.  编写一个函数 实现累乘功能 ，接收的参数不限量，返回他们的乘积

2. 可不可以加一个缓存，比如第一次计算了3*8*23 ，下次又要计算 3*8*23 可以把上次计算的结果返回
3.  可以对缓存做一些优化吗？ 比如我内存有限，是否有一个缓存刷新、淘汰策略
 */

// 有顺序的
const map = new Map()
const length = 3
function multi(...rest) {
  const arr = rest.sort((a, b) => a - b)
  const key = arr.join('*')
  const temp = map.get(key)
  if (temp) {
    console.log('has cached', key)
    // 每次获取，置换到第一位
    map.delete(key)
    map.set(key, temp)
    return temp
  }
  const res = arr.reduce((pre, cur) => pre * cur, 1)
  if (map.size >= length) {
    // delete last
    const lastKey = map.keys().next().value
    console.log('has get last..', lastKey)
    map.delete(lastKey)
  }
  map.set(key, res)
  console.log('new map...', map)
  return res
}
// test
console.log(multi(3, 8, 23))
console.log(multi(8, 3, 23) * multi(4, 5))
console.log(multi(8, 3, 23) * multi(4, 5, 6))
console.log(multi(8, 3, 23) * multi(4, 5, 7))
console.log(multi(8, 3, 23) * multi(4, 5, 8))

