// 延迟打印数组 [1,2,3,4,5]，每一次打印的初始延迟为 1000ms，增长延迟为 500ms。0s:    1
// 1s:    2
// 2.5s: 3
// 4.5s: 4
// 7s:    5

const asyncPrintn = (arr) => {
  arr.reduce(async (prevPro, cur, index) => {
    await prevPro
    const timer = index === 0 ? 0 : (index - 1) * 500 + 1000
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(cur)
        resolve(timer)
      }, timer)
    })
  }, Promise.resolve(0))
}


const str = 'adefrfdnnfhdueassjfkdiskcddfjds'

const obj = str.split('').reduce((all, cur) => {
  if (cur in all) {
    all[cur]++
  } else {
    all[cur] = 1
  }
  return all
}, {})

// const p1 = Promise.resolve(1)
// const p2 = Promise.resolve(2)
// const p3 = Promise.resolve(3)

// const res = [p1, p2, p3].reduce((all, cur) => {
//   return all.then(cur)
// }, Promise.resolve(1))

const promisePrint = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('a')
  }, 1000)
})
const print10 = async () => {
  for (let i = 0; i < 10; i++) {
    console.log(await promisePrint())
  }
}

[1, 2, 3, 4, 5].reduce(async (all, cur) => {
  await all
  console.log(await promisePrint())
}, Promise.resolve())