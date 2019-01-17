function A (name) {
  this.name = name
}
A.prototype.printName = function () {
  console.log(this.name)
}

function B (name, age) {
  A.call(this)
  this.name = name
  this.age = age
}

B.prototype = Object.create(A.prototype)
B.prototype.constructor = B
