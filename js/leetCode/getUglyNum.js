// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
// 分析
// 首先从题目可以知道，对于一个丑数p，p*2、p*3、p*5都是丑数。
// 那么从第一个丑数1开始，1*2、1*3、1*5都是丑数，最小的2是第二个丑数；
// 对于第二个丑数2来说，又多出来三个需要被比较的数字，即2*2、2*3、2*5，再加上第一轮挑剩下的1*3、1*5，但是这里显然可以看出来，
// 1*3<2*3，1*5<2*5，所以其实只需要比较2*2、1*3、1*5即可。
// ......
// 按照这样的节奏比下去即可。

// 2 3 5
// 1 2 3 4 5 6 8 10
function GetUglyNumber_Solution (index) {
  if(index < 7) {
    return index
  }
  let res = []
  res[0] = 1
  let t2 = 0
  let t3 = 0
  let t5 = 0
  for(let i = 1; i < index; i++) {
    res[i] = Math.min(res[t2] * 2, Math.min(res[t3] * 3, res[t5] * 5))
    if(res[i] === res[t2] * 2) {
      t2++
    }
    if(res[i] === res[t3] * 3) {
      t3++
    }
    if(res[i] === res[t5] * 5) {
      t5++
    }
  }
  return res[index - 1]
}