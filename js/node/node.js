// process.nextTick(()=>{
//   console.log('nexttick')
// })
// Promise.resolve().then(()=>{
//   console.log('promise1')
// }).then(()=>{
//   console.log('promise2')
// })
// setImmediate(()=>{
//   console.log('immediate')
// })
// console.log('end')

setTimeout(() => {
  console.log('timer1')

  Promise.resolve().then(function() {
    console.log('promise1')
  })
 }, 0)

 process.nextTick(() => {
  console.log('nextTick')
  process.nextTick(() => {
    console.log('nextTick')
    process.nextTick(() => {
      console.log('nextTick')
      process.nextTick(() => {
        console.log('nextTick')
      })
    })
  })
 })