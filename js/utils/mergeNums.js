// 合并两个number数组a，b并排序，如果有一个数出现多次，如a数组有1个5，b数组有2个5，合并出的数组应有2个5，即按次数多的保留

function merge(a, b) {
  let arr = []
  let objA = {}
  let objB = {}
  a.sort((i, j) => i - j)
  b.sort((i, j) => i - j)

  a.forEach(i => {
    objA[i] = objA[i] === undefined ? 1 : objA[i] + 1
  })
  b.forEach(i => {
    objB[i] = objB[i] === undefined ? 1 : objB[i] + 1
  })
  const lenA = a.length
  const lenB = b.length
  let i = j = 0
  while (i < lenA && j < lenB) {
    if (a[i] === b[j]) {
      if (objA[a[i]] >= objB[b[j]]) {
        arr = arr.concat(new Array(objA[a[i]]).fill(a[i]))
      } else {
        arr = arr.concat(new Array(objB[b[j]]).fill(b[j]))
      }
      i += objA[a[i]]
      j += objB[b[j]]
    } else if (a[i] < b[j]) {
      arr = arr.concat(new Array(objA[a[i]]).fill(a[i]))
      i += objA[a[i]]
    } else {
      arr = arr.concat(new Array(objB[b[j]]).fill(b[j]))
      j += objB[b[j]]
    }
  }
  if (i < lenA) {
    arr = arr.concat(a.slice(i))
  }
  if (j < lenB) {
    arr = arr.concat(b.slice(j))
  }
  return arr
}

// test....
var a = [1, 2, 5, 6, 7, 5, 2, 4]
var b = [4, 5, 4, 5, 5, 9, 8, 7, 7]

console.log(merge(a, b))

// [1, 2, 2, 4, 4, 5, 5, 5, 6, 7, 7, 8, 9]