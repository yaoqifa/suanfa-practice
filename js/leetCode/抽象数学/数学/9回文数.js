const isPalindrome = (num) => {
  // return String(num) === String(num).split('').reverse().join('')

  let res = 0
  while(num) {
    let temp = num % 10
    res = res * 10 + temp
    num = (num - temp) / 10
  }
  return res >= 0 && res === num
}