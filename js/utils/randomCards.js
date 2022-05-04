function randomCards(arr) {
  const len = arr.length
  let i = len - 1
  let random
  while (i) {
    random = Math.floor(Math.random() * i)
    const temp = arr[i]
    arr[i] = arr[random]
    arr[random] = temp
    i--
  }
  return arr
}

console.log(randomCards([1,2,3,4,5,6,7,8,9]))

// 知道总数情况下，如果很大的数随机选k个，可以从前往后一次遍历k，然后k/i-1 替换1/k
