// 简写 Redux
// mydux.js文件
// function createStore(reducer) {
//   /**
//    * 1.注册用到的方法,并return出去提供使用
//    * 2.定义默认的状态与事件池
//    * 3.默认先触发一次dispatch给state赋予默认值
//    * 4.componentDidMount后会通过subscribe往状态池中追加事件
//    * 5.在具体的事件处触发dispatch,传入具体的action,修改state的值,并且触发事件池中的事件，从而更新组件
//    */
//   let state,
//     listeners = [];
//   function dispatch(action) {
//     //传入state和action,返回修改后最新的state状态值
//     state = reducer(state, action);
//     //通知事件事件池中的方法执行
//     for (let i = 0; i < listeners.length; i++) {
//       let curFn = listeners[i];
//       if (typeof curFn === "function") {
//         curFn();
//         continue;
//       }
//       //不是函数的移除掉
//       listeners[i].splice(i, 1);
//       i--;
//     }
//   }
//   //组件通过getState获取最新的状态值（此处要深拷贝一下，避免组件直接通过对象引用修改状态值，redux的源码中貌似没有深拷贝，存在一些缺陷）
//   function getState() {
//     return JSON.parse(JSON.stringify(state));
//   }
//   function subscribe(fn) {
//     //此处进行一个去重复，避免添加重复的事件（redux的源码中貌似也没有去重复,存在一些缺陷）
//     for (let i = 0; i < listeners.length; i++) {
//       if (listeners[i] === fn) {
//         return;
//       }
//     }
//     listeners.push(fn);
//     //返回一个移除事件的函数，可以进行调用，从事件池中移除追加的事件
//     return function unsubscribe() {
//       let index = listeners.indexOf(fn);
//       if (index > -1) {
//         // listeners.splice(index, 1);  //这个地方不能用splice,可能会导致数组塌陷问题
//         listeners[index] = null;
//       }
//     };
//   }
//   //创建的时候先调用一下，为了是当默认state没值的时候，触发reducer给初始化的state赋予一个默认值
//   dispatch({
//     type: `@@redux/INIT${Math.random()}`,
//   });
//   return {
//     dispatch,
//     getState,
//     subscribe,
//   };
// }

const initialState = { sum: 0 }

function reduceTest(state = initialState, action) {
  switch(action.type) {
    case 'add':
      return {...state, sum: state.sum + 1}
    case 'decrease':
      return {...state, sum: state.sum - 1}
    default:
      return state
  }
}

const myStore = createStore(reduceTest)
myStore.subscribe(() => console.log(myStore.getState()))
myStore.dispatch({type: 'add'})
myStore.dispatch({type: 'decrease'})
myStore.dispatch({type: 'add'})
myStore.dispatch({type: 'add'})
myStore.dispatch({type: 'add'})

function createStore(reducer) {
  let state
  let listener = []
  function subscribe(cb) {
    listener.push(cb)
  }
  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < listener.length; i++) {
      if (typeof listener[i] === 'function') {
        listener[i]()
      }
    }
  }
  function getState() {
    return state
  }
  return {
    dispatch,
    subscribe,
    getState
  }
}