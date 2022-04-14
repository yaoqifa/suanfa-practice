class WebpackPlugin2 {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.done.tap('webpackPlugin2', () => {
      console.log('webpackPlugin2...', this.options.msg)
    })
  }
}

module.exports = WebpackPlugin2