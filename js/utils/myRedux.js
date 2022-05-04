// const initialState = { sum: 0 }

// function reduceTest(state = initialState, action) {
//   switch(action.type) {
//     case 'add':
//       return {...state, sum: state.sum + 1}
//     case 'decrease':
//       return {...state, sum: state.sum - 1}
//     default:
//       return state
//   }
// }

// const myStore = createStore(reduceTest)
// myStore.subscribe(() => console.log(myStore.getState()))
// myStore.dispatch({type: 'add'})
// myStore.dispatch({type: 'decrease'})
// myStore.dispatch({type: 'add'})
// myStore.dispatch({type: 'add'})
// myStore.dispatch({type: 'add'})

// function createStore(reducer) {
//   let state
//   let listener = []
//   function subscribe(cb) {
//     listener.push(cb)
//   }
//   function dispatch(action) {
//     state = reducer(state, action)
//     for (let i = 0; i < listener.length; i++) {
//       if (typeof listener[i] === 'function') {
//         listener[i]()
//       }
//     }
//   }
//   function getState() {
//     return state
//   }
//   return {
//     dispatch,
//     subscribe,
//     getState
//   }
// }

export default function createStore(reducer, preloadedState) {
  // 保存reducer的变量
  let currentReducer = reducer
  // 保存state的变量
  let currentState = preloadedState
  // 订阅状态的改变，在state改变之后会触发里面的监听事件
  let currentListeners = []

  // 获取当前的state
  function getState() {
    return currentState
  }

  // 订阅函数
  function subscribe(listener: () => void) {

    let isSubscribed = true
    // 将订阅函数放到listeners队列中，state更新后会一次调用里面的函数
    currentListeners.push(listener)
    // 返回一个取消订阅的函数
    return function unsubscribe() {
      if (!isSubscribed) {
        return
      }

      isSubscribed = false

      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
    }
  }

  // 分发action的函数
  function dispatch(action) {
    // 执行reducer，根据action生成新的state保存到currentState
    currentState = currentReducer(currentState, action)

    const listeners = currentListeners
    // 依次触发listeners中订阅的函数，更新UI
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }

  // 这里触发一个dispatch，不会命中reducer里面的任何逻辑，
  // 所以直接走default，返回初始的state，达到设置初始默认值的目的
  dispatch({ type: ActionTypes.INIT })
  // 闭包
  const store = {
    dispatch: dispatch,
    subscribe,
    getState,
    // ...
  }
  return store
}

const store = createStore(reducer, initState， applyMiddleware(Middleware1, Middleware2...))

export default function applyMiddleware(
  ...middlewares
) {
  // 返回一个函数，接受参数是createStore方法。
  return (createStore) => <S, A extends AnyAction>(
    reducer: Reducer<S, A>,
    preloadedState?: PreloadedState<S>
  ) => {
    // 调用createStore，创建一个store
    const store = createStore(reducer, preloadedState)
    let dispatch: Dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }
    // middleware接受的参数，一个middleware实际上就是一个函数
    // 参数包含两个属性，getState和dispatch，所以一个redux的中间件需要接受并使用这两个方法
    const middlewareAPI: MiddlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }
    // 遍历middleware数组，给middleware数组传递上面的middlewareAPI参数，得到一个新的函数数组
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    // 得到一个新的dispatch方法，替换原有store的dispatch方法。
    // 新的dispatch方法通过compose方法将上一步得到的函数数组组合成一个函数，具体如何做到的，下面会描述。
    dispatch = compose<typeof dispatch>(...chain)(store.dispatch)
    // 返回一个新的store对象，dispatch是通过compose函数得到的新的dispatch方法
    return {
      ...store,
      dispatch
    }
  }
}

export default function compose(...funcs: Function[]) {
  // 处理数组为空的边界case
  if (funcs.length === 0) {
    return (arg) => arg
  }
  // 处理数组为1的情况，这种情况下也不需要组合，直接返回第一个元素就行
  if (funcs.length === 1) {
    return funcs[0]
  }
  // 有多个函数，通过 array的reduce方法来组合
  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}

/************** redux-thunk中间件原理      */
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    // 当action是一个函数的时候，调用这个函数，传递dispatch、getState给action
    // 在action函数中去处理异步逻辑，调用dispatch
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    // 如果不是函数，就是一个正常的同步action，直接dispatch
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
