// console.log(1111)模拟实现loadash中的_.get()函数，实现如下传入参数取值效果

// 题目描述
// 描述信息​

function get(obj, ...rest) {​
  let res = []
  // 请补全函数参数和实现逻辑​
  if (rest.length === 0) {
    return obj
  }
  function find(path) {
    let arr = []
    let temp = path.split('.')
    temp.forEach((item) => {
      const t2 = item.split('[')
      if (t2.length > 1) {
        t2.forEach((item2) => {
          if (item2.indexOf(']') > -1) {
            arr.push(item2.substring(0, item2.length - 1))
          } else {
            arr.push(item2)
          }
        })
      } else {
        arr.push(item)
      }
    })
    arr.reduce((pre, cur) => {
      return pre[cur] === undefined ? {} : pre[cur]
    }, obj)
  }
  rest.forEach((path) => {
    res.push(find(path))
  })
  return res
}​
const obj = { selector: { to: { toutiao: 'FE coder' } }, target: [1, 2, { name: 'byted' }] };​
// 运行代码​
get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')​



//  输出结果：​
// ['FE coder', 1, 'byted']monorepo 如果各个pkg之前存在依赖关系，它们之间的关系会形成有向图，如何得到一个打包顺序

// 题目描述
// const graph = {​
//   '@package/a': [​
//     '@package/b',​
//     '@package/c',​
//     '@package/d',​
//     '@package/e',​
//     '@package/f',​
//     '@package/g',​
//     '@package/h',​
//   ],​
//   '@package/b': ['@package/g'],​
//   '@package/c': ['@package/b', '@package/f', '@package/h'],​
//   '@package/d': ['@package/b', '@package/f', '@package/h'],​
//   '@package/e': ['@package/b', '@package/f', '@package/h'],​
//   '@package/f': ['@package/b', '@package/g', '@package/h'],​
//   '@package/g': ['@package/h'],​
//   '@package/h': ['@package/i'],​
// };​

// const result = solve(graph);​

// console.log(result);​

// [​
//   '@package/i',​
//   '@package/h',​
//   '@package/g',​
//   '@package/b',​
//   '@package/f',​
//   '@package/c',​
//   '@package/d',​
//   '@package/e',​
//   '@package/a'​
// ]