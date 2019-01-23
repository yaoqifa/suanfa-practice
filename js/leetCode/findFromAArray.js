// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数

// 例如二维数组arr = [ [1,2,3,4], [5,6,7,8], [9,10,11,12]	]，target=7

function find (arr, target) {
  if (!arr.length) {
    return false
  }
  let fromRow = arr.length - 1
  let fromCol = 0
  while (fromRow >= 0 && fromCol < arr[0].length) {
    let temp = arr[fromRow][fromCol]
    if (target === temp) {
      return true
    } else if (target < temp) {
      fromRow--
    } else {
      fromCol++
    }
  }
  return false
}