module.exports = class FileListPlugin {
  constructor(options) {
    this.fileName = options.fileName || 'fileList.md'
  }
  apply(compiler) {
    compiler.hooks.emit.tapPromise('FileListPlugin', (compilation) => {
      return Promise.resolve().then(() => {
        const len = Object.keys(compilation.assets).length
        let content =  `# 一共有${len}个文件\n\n`
        for (let filename in compilation.assets) {
          content +=  `-${filename}\n`
        }

        compilation.assets[this.fileName] = {
          source: function() {
            return content
          },
          size: function() {
            return content.length
          }
        }
      })
    })
  }
}