function promisify(origin) {
  return function fn(...args) {
    return new Promise((resolve, reject) => {
      args.push((err, ...data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
      origin.apply(this, args)
    })
  }
}


// test
// const imageSrc = 'https://www.themealdb.com/images/ingredients/Lime.png';

// function loadImage(src, callback) {
//     const image = document.createElement('img');
//     image.src = src;
//     image.alt = '公众号若川视野专用图？';
//     image.style = 'width: 200px;height: 200px';
//     image.onload = () => callback(null, image);
//     image.onerror = () => callback(new Error('加载失败'));
//     document.body.append(image);
// }

// const loadImagePromise = function(src){
//   return new Promise(function(resolve, reject){
//       loadImage(src, function (err, image) {
//           if(err){
//               reject(err);
//               return;
//           }
//           resolve(image);
//       });
//   });
// };
// loadImagePromise(imageSrc).then(res => {
//   console.log(res);
// })
// .catch(err => {
//   console.log(err);
// });

// //

// const loadImagePromise = promisify(loadImage);
// async function load(){
//     try{
//         const res = await loadImagePromise(imageSrc);
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// load();