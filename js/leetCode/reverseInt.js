function reverse(num) {
  if (num < 0) {
    return `-${reverse(Math.abs(num))}`
  }
  if (num < 10) {
    return num;
  }
  return `${num % 10}${reverse(Math.floor(num / 10))}`
}