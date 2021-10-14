
(function(globals) {
  'use strict';

  var nextTick = function (fn) {
    if (typeof setImmediate === 'function') {
      setImmediate(fn);
    } else if (typeof process !== 'undefined' && process.nextTick) {
      process.nextTick(fn);
    } else {
      setTimeout(fn, 0);
    }
  };

  var makeIterator = function (tasks) {
    var makeCallback = function (index) {
      var fn = function () {
        if (tasks.length) {
          tasks[index].apply(null, arguments);
        }
        return fn.next();
      };
      fn.next = function () {
        return (index < tasks.length - 1) ? makeCallback(index + 1): null;
      };
      return fn;
    };
    return makeCallback(0);
  };

  var _isArray = Array.isArray || function(maybeArray){
    return Object.prototype.toString.call(maybeArray) === '[object Array]';
  };

  var waterfall = function (tasks, callback) {
    callback = callback || function () {};
    if (!_isArray(tasks)) {
      var err = new Error('First argument to waterfall must be an array of functions');
      return callback(err);
    }
    if (!tasks.length) {
      return callback();
    }
    var wrapIterator = function (iterator) {
      return function (err) {
        if (err) {
          callback.apply(null, arguments);
          callback = function () {};
        } else {
          var args = Array.prototype.slice.call(arguments, 1);
          var next = iterator.next();
          if (next) {
            args.push(wrapIterator(next));
          } else {
            args.push(callback);
          }
          nextTick(function () {
            iterator.apply(null, args);
          });
        }
      };
    };
    wrapIterator(makeIterator(tasks))();
  };

  if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
      return waterfall;
    }); // RequireJS
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = waterfall; // CommonJS
  } else {
    globals.asyncWaterfall = waterfall; // <script>
  }
})(this);

class File {
  constructor() {}

  // 创建文件
  createFile(callback) {
    setTimeout(() => {
      if (0) {
          console.log('创建文件失败');
          callback('err');
      } else {
          console.log('创建文件成功');
          callback(null);
      };
    }, 3000);
  }

  // 写文件
  writeFile(callback) {
    setTimeout(() => {
      if (1) {
        console.log('写文件失败');
        callback('err');
      } else {
        console.log('写文件成功');
        callback(null);
      };
    }, 2000);
  }

  // 读文件
  readFile(callback) {
    setTimeout(() => {
      if (0) {
        console.log('读文件失败');
        callback('err');
      } else {
        console.log('读文件成功');
        callback(null, 'I love async!');
      };
    }, 4000);
  }
};
let file = new File();

asyncWaterfall([function(callback) {
  file.createFile(function(err) {
    if (!err) {
      callback(null, 'createFile Ok');
    } else {
      callback('createFileFail');
    };
  });
}, function(err, callback) {
  file.writeFile(function(err) {
    if (!err) {
      callback(null, 'writeFile Ok');
    } else {
      callback('writeFileFail');
    };
  });
}, function(err, callback) {
  file.readFile(function(err) {
    if (!err) {
      callback(null, 'readFile Ok');
    } else {
      callback('readFileFail');
    };
  });
}], function(err, result) {
  console.log(err);
  console.log(result);
});

//const waterfall = (tasks, callback) => {
//   return function (tasks, callback) {
//     callback = typeof callback === 'function' ? callback : () => {}
//     if (!Array.isArray(tasks)) {
//       return callback(new Error('..'))
//     }
//     if (!tasks.length) {
//       callback()
//     }
//     let taskIndex = 0
//     function next (err, ...args) {
//       if (err || taskIndex === tasks.length) {
//         return callback.apply(null, args)
//       }
//       nextTask(args.slice(1))
//     }
//     async function nextTask (...args) {
//       let task = Promise.resolve(tasks[taskIndex])
//       taskIndex++
//       args.push(next)
//       return await task(null, args)
//     }
//     nextTask([])
//   } ()
// }