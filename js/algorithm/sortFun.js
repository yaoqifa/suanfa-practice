// 归并排序
function merge (left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  if (left.length) {
    result = result.concat(left)
  }
  if (right.length) {
    result = result.concat(right)
  }
  return result
}
function mergeSort (arr) {
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let middle = Math.floor(len / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

// 快排
function quickSort (arr) {
  let res = JSON.parse(JSON.stringify(arr))
  if (res.length < 2) {
    return res
  }
  let middle = Math.floor(res.length / 2)
  let cur = res.splice(middle, 1)
  let left = []
  let right = []
  res.forEach(item => {
    if (item < cur) {
      left.push(item)
    } else {
      right.push(item)
    }
  })
  return quickSort(left).concat(cur, quickSort(right))
}

