function webpackPlugin1(options) {
  this.options = options
}
webpackPlugin1.prototype.apply = function (compiler) {
  console.log(Object.keys(compiler.hooks))
  compiler.hooks.done.tap('webpackPlugin1', () => {
    console.log('webpackPlugin1...', this.options.msg)
  })
}

module.exports = webpackPlugin1