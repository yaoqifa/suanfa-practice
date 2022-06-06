// let list = [1, 5, [9, 8], [2, [1, 9]], 7];

function arrFlatten(list) {
  return list.reduce((pre, curr) => {
    return pre.concat(Array.isArray(curr) ? arrFlatten(curr) : curr)
  }, [])
}

function arrFlattenWithLevel(list, level = 1) {
    return level ? list.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? arrFlattenWithLevel(cur, level - 1) : cur)
    }, []) : list.slice()
}

//  对象扁平化
//  说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
//  示例：
//  var input = {
//  a: 1,
//  b: [ 1, 2, { c: true }, [ 3 ] ],
//  d: { e: 2, f: 3 },
//  g: null,
//  }
//  var output = flatten(input);
//  output如下
//  {
//  "a": 1,
//  "b[0]": 1,
//  "b[1]": 2,
//  "b[2].c": true,
//  "b[3][0]": 3,
//  "d.e": 2,
//  "d.f": 3,
//  // "g": null, 值为null或者undefined，丢弃
//  }
function isObj(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

function objFlatten(obj) {
  let result = {}
  function flatten(val, key) {
    key = key || ''
    if (Array.isArray(val)) {
      val.forEach((item, index) => {
        if (item instanceof Object) {
          flatten(item, `${key}[${index}]`)
        } else {
          result[`${key}[${index}]`] = item
        }
      })
    } else if (isObj(val)) {
      for(valK in val) {
        const valV = val[valK]
        if (valV instanceof Object) {
          flatten(valV, `${key}${valK}`)
        } else {
          if (key) {
            result[`${key}.${valK}`] = valV
          } else {
            result[valK] = valV
          }
        }
      }
    } else {
      return val
    }
  }
  flatten(obj)
  return result
}

// const data1 = {"a.b.c": 1, "a.b.d": 2}
// const data2 = {"a.b.e": 3, "a.b.f": 4}
// 把如上两个对象合并成一个JSON，其中的.需要处理成对应的层级

function joinJSON(data1, data2) {
  let obj = {}
  function spread(key, val, obj) {
    const arr = key.split('.')
    const len = arr.length
    arr.reduce((pre, curr, index) => {
      if (!pre[curr]) {
        pre[curr] = {}
      }
      if (index === len - 1) {
        pre[curr] = val
      }
      return pre[curr]
    }, obj)
  }
  for (let key in data1) {
    spread(key, data1[key], obj)
  }
  for (let key in data2) {
    spread(key, data2[key], obj)
  }
  return obj
}


//  对象扁平化
//  说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
//  示例：
 var input = {
 a: 1,
 b: [ 1, 2, { c: true }, [ 3 ] ],
 d: { e: 2, f: 3 },
 g: null,
 }
//  var output = flatten(input);
//  output如下
//  {
//  "a": 1,
//  "b[0]": 1,
//  "b[1]": 2,
//  "b[2].c": true,
//  "b[3][0]": 3,
//  "d.e": 2,
//  "d.f": 3,
//  // "g": null, 值为null或者undefined，丢弃
//  }
function fattenObj(obj) {
  let res = {}
  function flatten(obj, key = '') {
    if (isObj(obj)) {
      for (let objKey in obj) {
        const val = obj[objKey]
        if (isObj(val) || Array.isArray(val)) {
          flatten(val, `${key}.${objKey}`)
        } else {
          if (key) {
            res[`${key}.${objKey}`] = val
          } else {
            res[objKey] = val
          }
        }
      }
    } else if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        if (isObj(item) || Array.isArray(item)) {
          flatten(item, `${key}[${index}]`)
        } else {
          res[`${key}[${index}]`] = item
        }
      })
    }
  }
  flatten(obj)
  return res
}

// const data1 = {"a.b.c": 1, "a.b.d": 2}
// const data2 = {"a.b.e": 3, "a.b.f": 4}
// 把如上两个对象合并成一个JSON，其中的.需要处理成对应的层级

function toJSON(data1, data2) {
  let obj = {}
  function spread(key, val) {
    let arr = key.split('.')
    arr.reduce((pre, cur, index) => {
      if (!pre[cur]) {
        pre[cur] = {}
      }
      if (index === arr.length - 1) {
        pre[cur] = val
      }
      return pre[cur]
    }, obj)
  }
  for (let key in data1) {
    spread(key, data1[key])
  }
  for (let key in data2) {
    spread(key, data2[key])
  }
  return obj
}