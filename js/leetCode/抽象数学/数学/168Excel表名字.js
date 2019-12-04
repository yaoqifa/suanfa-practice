/**
 *  1 -> A 26 -> Z 27 -> AA  701 -> ZY
 */

 const getName = (num) => {
   let str = ''
   while (num > 0) {
    if (num % 26 === 0) {
      str = String.fromCharCode(26 + 64) + str
      num = Math.floor(num / 26) - 1
    } else {
      str = String.fromCharCode(num % 26 + 64) + str
      num = Math.floor(num / 26)
    }
   }

   return str
 }