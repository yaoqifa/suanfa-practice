const path = require('path');
const fs = require('fs');

console.log(__dirname);
console.log(__filename);
console.log(path.resolve('./'));
console.log(process.cwd());

console.log(path.join('src', 'const', 'index.html'));
console.log(path.join(''));

console.log(path.parse('src/const/index.html'));

fs.readFile(path.resolve(__dirname, 'node.js'), 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
