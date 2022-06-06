let watcher = null;
function autorun(fn) {
  watcher = fn;
  fn();
}
//  当autorun执行fn的时候，设置全局变量watcher为该fn,之后触发的getter里，则将这个watcher作为它的观察者，并在setter中执行它的所有观察者函数。
function observable(target) {
  const _target = { ...target };
  let proxy = {};
  let subs = new Map();

  Object.keys(target).forEach((key) => {
    Object.defineProperty(proxy, key, {
      get() {
        if (watcher) {
          let watchers = subs.get(key);
          if (!watchers) {
            subs.set(key, new Set([watcher]));
          } else {
            watchers.add(watcher);
          }
        }
        const value = _target[key];
        console.log(`read ${key} = ${value}`);
        return value;
      },
      set(value) {
        console.log(`set ${key} = ${value}`);
        _target[key] = value;
        let watchers = subs.get(key);
        if (watcher) {
          watchers.forEach((watcher) => {
            watcher();
          });
        }
        return value;
      },
    });
  });
  return proxy;
}
const data = observable({ age: 10, name: "Zchary" });
autorun(() => {
  console.log(`autorun: ${data.name} is ${data.age} years old`);
});
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    data.age++;
  }, 1000 * (i + 1));
}
