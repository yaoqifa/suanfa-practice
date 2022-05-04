function getType(obj) {
  return Object.prototype.toString.call(obj);
}
function isArray(arr) {
  return getType(arr) === "[object Array]";
}
function isObject(obj) {
  return getType(obj) === "[object Object]";
}

function deepClone(data, map = new Map()) {
  if (map.get(data)) {
    return map.get(data);
  }
  let newObj;
  if (isArray(data)) {
    newObj = [];
    map.set(data, newObj);
    for (let i = 0; i < data.length; i++) {
      newObj.push(deepClone(data[i], map));
    }
  } else if (isObject(data)) {
    newObj = {};
    map.set(data, newObj);
    // 对象情况下，用Reflect.ownKeys 可以枚举出Symbol
    // Reflect.ownKeys(data).forEach((key) => {
    //   newObj[key] = deepClone(data[key], map);
    // })
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        newObj[key] = deepClone(data[key], map);
      }
    }
  } else {
    return data;
  }
  return newObj;
}

var a = {b: 2, c: {d: [4,5]}, e: [{f: {g: 6}}]}
a.g = a
console.log(deepClone(a))