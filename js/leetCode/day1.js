/**
 *
  Given a sorted array, remove the duplicates in place such that > each element appear only once and return the new length.
  Do not allocate extra space for another array, you must do this in place with constant memory.
  For example, Given input array A = [1,1,2],
  Your function should return length = 2, and A is now [1,2].
 */

let arr = [1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5, 6]

// 去除重复，最多允许n个重复
function removeDuplicate (a, n) {
  let len = a.length
  let i = 0
  let num = 0
  for (let j = 1; j < len; j++) {
    if (a[i] !== a[j]) {
      a[++i] = a[j]
      num = 0
    } else {
      num++
      if (num < n) {
        a[++i] = a[j]
      }
    }
  }
  a.splice(i + 1)
  console.log(a, i + 1)
}

removeDuplicate(arr, 2)