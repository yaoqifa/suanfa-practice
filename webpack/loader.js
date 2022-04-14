
// https://juejin.cn/post/6891649726656020493#heading-9
// webpack处理特定格式的文件，需要loader高速怎么处理
// 不能是箭头函数
module.exports = function myLoader(sourceCode) {
  return sourceCode + `\n; const loader = 'myLoder'`
}

// 获取options参数
module.exports = function replaceHello(sourceCode) {
  // this.query.name
  return sourceCode.replace('hello', '哈哈')
}

// 使用callback
module.exports = function callback(sourceCode) {
  const content = sourceCode.replace('hello', '哈哈')
  this.callback(null, content)
  // 使用callback时，必须返回undefined
  return
}
// 异步loader
module.exports = function asyncCallback(source) {
  const callback = this.async()
  setTimeout(() => {
    const content = sourceCode.replace('hello', '')
    callback(null, content)
  }, 3000)
}
// 把css插入到head中
module.exports = function styleLoader(source) {
  return `const tag = document.createElement('style');
    tag.innerHTML = ${source};
    document.head.appendChild(tag);
  `
}
// css-loader 把less-loader转换的代码序列化
module.exports = function(source) {
  return JSON.stringify(source)
}

// less-loader 把less转换成css
const less = require('less')
module.exports = function lessLoader(source) {
  less.render(source, (err, output) => {
    this.callback(err, output.css)
  })
}
