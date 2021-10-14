// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，
// 因此输出2。如果不存在则输出0。

function findMoreThanHalf (arr) {
  if (arr.length < 1) {
    return 0
  }
  let arr2 = JSON.parse(JSON.stringify(arr))
  let times = 0
  let cur
  for (let i = 0; i < arr.length; i++) {
    if (times === 0) {
      cur = arr[i]
    } else {
      if (cur === arr[i]) {
        times++
      } else {
        times--
      }
    }
  }
  times = 0
  for (let i = 0; i < arr.length; i++) {
    if (cur === arr[i]) {
      times++
    }
  }
  if (times > Math.floor(arr.length / 2)) {
    return cur
  }
  return 0
}