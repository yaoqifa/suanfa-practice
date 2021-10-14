Array.prototype.myMap = function (fn) {
  return this.reduce((pre, cur, index) => {
    return [...pre, fn(cur, index, this);]
  }, []);
}