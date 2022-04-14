https://juejin.cn/post/6844904162405138445#heading-19

function myPlugin() {

}

myPlugin.prototype.apply = function(compiler) {
  compiler.hooks.run.tap('myPlugin', () => {
    console.log('this is myPlugin')
  })
  compiler.hooks.down.tap('myPlugin', () => {
    console.log('down')
  })
}