class eventEmit {
  constructor() {
    this.events = {};
  }
  on(eventType, cb) {
    if (eventType) {
      let list = this.events[eventType] || [];
      list.push(cb);
      this.events[eventType] = list;
    }
  }
  emit(eventType, ...args) {
    let list = this.events[eventType] || [];
    if (list && list.length) {
      list.forEach((cb) => {
        cb(...args);
      });
    }
  }
  off(eventType, cb) {
    if (fn) {
      this.events[eventType].splice(fn, 1);
    } else {
      delete this.events[eventType];
    }
  }
}
/**
 * mdn EventTarget
 */
var EventTarget = function () {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function (type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function (type, callback) {
  if (!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for (var i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback) {
      stack.splice(i, 1);
      return this.removeEventListener(type, callback);
    }
  }
};

EventTarget.prototype.dispatchEvent = function (event) {
  if (!(event.type in this.listeners)) {
    return;
  }
  var stack = this.listeners[event.type];
  event.target = this;
  for (var i = 0, l = stack.length; i < l; i++) {
    stack[i].call(this, event);
  }
};

class Vue {
  constructor() {
    //  事件通道调度中心
    this._events = Object.create(null);
  }
  $on(event, fn) {
    if (Array.isArray(event)) {
      event.map((item) => {
        this.$on(item, fn);
      });
    } else {
      (this._events[event] || (this._events[event] = [])).push(fn);
    }
    return this;
  }
  $once(event, fn) {
    function on() {
      this.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  }
  $off(event, fn) {
    if (!arguments.length) {
      this._events = Object.create(null);
      return this;
    }
    if (Array.isArray(event)) {
      event.map((item) => {
        this.$off(item, fn);
      });
      return this;
    }
    const cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (!fn) {
      this._events[event] = null;
      return this;
    }
    let cb;
    let i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  }
  $emit(event) {
    let cbs = this._events[event];
    if (cbs) {
      const args = [].slice.call(arguments, 1);
      cbs.map((item) => {
        args ? item.apply(this, args) : item.call(this);
      });
    }
    return this;
  }
}
