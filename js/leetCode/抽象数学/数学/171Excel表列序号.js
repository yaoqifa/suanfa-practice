/**
 *  A -> 1 Z -> 26 AA -> 27  ZY -> 701
 */

 const getNum = (str) => {
   let sum = 0
   const arr = str.split('').reverse()
   sum = arr.reduce((pre, cur, index) => {
    return pre + (cur.charCodeAt(0) - 64) * Math.pow(26, index)
   }, 0)

   return sum
 }