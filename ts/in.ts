// in用于取联合类型的值。主要用于数组和对象的构造。

type name = 'a' | 'b' | 'c'
type inName = {
  [key in name]: number;
}

const obj: inName = {
  a: 1,
  b: 2,
  c: 3
}

// https://juejin.cn/post/6844904147167215624